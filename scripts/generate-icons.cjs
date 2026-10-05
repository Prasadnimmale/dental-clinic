/**
 * Generates the brand favicon / app icons from the clinic emblem.
 *
 * The emblem is composited onto a white rounded square so the green and violet
 * artwork keeps its contrast in a browser tab and on iOS.
 * Output: src/app/icon.png (512) and src/app/apple-icon.png (180).
 *
 * Run `node scripts/build-logo-assets.cjs` first — it produces the emblem.
 * Run: node scripts/generate-icons.cjs
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
const MARK = path.join(ROOT, "public", "images", "brand", "logo-mark.png");

/** Emblem width as a share of the icon, leaving a comfortable margin. */
const MARK_SCALE = 0.74;

function plate(size, radius) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff"/>
    </svg>`,
  );
}

async function write(target, size, radius) {
  const markWidth = Math.round(size * MARK_SCALE);
  const mark = await sharp(MARK)
    .resize({ width: markWidth })
    .png()
    .toBuffer();
  const markMeta = await sharp(mark).metadata();

  await sharp(plate(size, radius))
    .composite([
      {
        input: mark,
        left: Math.round((size - markWidth) / 2),
        top: Math.round((size - markMeta.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(target);

  console.log(
    "wrote",
    path.relative(ROOT, target),
    `(${size}px, emblem ${markWidth}x${markMeta.height})`,
  );
}

(async () => {
  if (!fs.existsSync(MARK)) {
    throw new Error(`Missing ${MARK} — run scripts/build-logo-assets.cjs first.`);
  }
  await write(path.join(APP_DIR, "icon.png"), 512, 96);
  await write(path.join(APP_DIR, "apple-icon.png"), 180, 0);
})();
