/**
 * Brand asset pipeline — turns the supplied logo artwork into web-ready PNGs.
 *
 * Source: `assets/dental-logo-source.jpg` (flat, light grey-green plate, no
 * alpha, and clipped along its bottom edge). This script:
 *
 *   1. crops the complete logo lockup (emblem + "You Care" wordmark) and the
 *      standalone emblem, both measured from the top of the artwork;
 *   2. keys the flat plate out to transparency and de-fringes the soft JPEG
 *      edges so no grey halo survives;
 *   3. trims to the ink bounding box and writes palette PNGs (small + crisp) to
 *      `public/images/brand/`.
 *
 * Run with: node scripts/build-logo-assets.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const source = path.join(root, "assets", "dental-logo-source.jpg");
const outDir = path.join(root, "public", "images", "brand");

/**
 * Boxes measured from the source artwork, each with a small margin.
 *
 * LOCKUP_BOX is the clinic's own logo: the emblem plus the "You Care"
 * wordmark (ink spans x 142-1471, y 129-327). The descriptor line below it in
 * the source is deliberately left out — the artwork's bottom is clipped, and
 * "Multispeciality Dental Clinic" is set as live text so it stays crisp and
 * legible at header and footer sizes.
 *
 * MARK_BOX is the emblem on its own, used for the app icon.
 */
const LOCKUP_BOX = { left: 130, top: 117, width: 1354, height: 223 };
const MARK_BOX = { left: 128, top: 115, width: 624, height: 226 };

const TARGETS = [
  { file: "logo-lockup.png", box: LOCKUP_BOX, width: 900 },
  { file: "logo-mark.png", box: MARK_BOX, width: 320 },
];

/** Distance thresholds (per channel, 0-255) for the alpha ramp. */
const INK_START = 20;
const INK_FULL = 48;

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

/** Background colour = median of a ring of border pixels. */
async function readPlate(file) {
  const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const at = (x, y) => {
    const i = (y * info.width + x) * info.channels;
    return [data[i], data[i + 1], data[i + 2]];
  };

  const samples = [];
  const { width, height } = info;
  for (let x = 0; x < width; x += 3) {
    samples.push(at(x, 0), at(x, height - 1));
  }
  for (let y = 0; y < height; y += 3) {
    samples.push(at(0, y), at(width - 1, y));
  }

  return [0, 1, 2].map((channel) => median(samples.map((s) => s[channel])));
}

/**
 * Remove the flat plate: pixels close to it become transparent, and partially
 * transparent pixels are un-premultiplied so their colour stays true.
 */
function keyOut(input, width, height, plate) {
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = input[i * 3];
    const g = input[i * 3 + 1];
    const b = input[i * 3 + 2];

    const distance = Math.max(
      Math.abs(r - plate[0]),
      Math.abs(g - plate[1]),
      Math.abs(b - plate[2]),
    );

    let alpha;
    if (distance <= INK_START) alpha = 0;
    else if (distance >= INK_FULL) alpha = 255;
    else alpha = Math.round(((distance - INK_START) / (INK_FULL - INK_START)) * 255);

    let cr = r;
    let cg = g;
    let cb = b;
    if (alpha > 0 && alpha < 255) {
      // Un-premultiply the plate that bled into the soft edge.
      const a = alpha / 255;
      cr = Math.round(Math.min(255, Math.max(0, (r - plate[0] * (1 - a)) / a)));
      cg = Math.round(Math.min(255, Math.max(0, (g - plate[1] * (1 - a)) / a)));
      cb = Math.round(Math.min(255, Math.max(0, (b - plate[2] * (1 - a)) / a)));
    }

    out[i * 4] = cr;
    out[i * 4 + 1] = cg;
    out[i * 4 + 2] = cb;
    out[i * 4 + 3] = alpha;
  }

  return out;
}

async function build() {
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source artwork: ${source}`);
  }
  fs.mkdirSync(outDir, { recursive: true });

  const plate = await readPlate(source);
  console.log("plate colour:", plate.join(","));

  for (const target of TARGETS) {
    const { data: raw, info } = await sharp(source)
      .extract(target.box)
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const keyed = keyOut(raw, info.width, info.height, plate);
    const cropped = {
      left: 0,
      top: 0,
      width: info.width,
      height: info.height,
    };

    let pipeline = sharp(keyed, {
      raw: { width: cropped.width, height: cropped.height, channels: 4 },
    })
      .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({
        top: 6,
        bottom: 6,
        left: 8,
        right: 8,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      });

    const trimmedMeta = await pipeline.clone().metadata();
    pipeline = pipeline.resize({
      width: target.width,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    });

    const outPath = path.join(outDir, target.file);
    await pipeline
      .png({ palette: true, colours: 160, dither: 0.5, effort: 10, compressionLevel: 9 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(
      `${target.file}: ${trimmedMeta.width}x${trimmedMeta.height} -> ${target.width}px wide, ${(stat.size / 1024).toFixed(1)} kB`,
    );
  }
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
