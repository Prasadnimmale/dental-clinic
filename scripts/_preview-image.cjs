// Temporary utility: high-resolution ASCII preview of one region.
// Usage: node _preview-image.cjs <file> <cols> [leftFrac] [topFrac] [wFrac] [hFrac]
const sharp = require("sharp");

const file = process.argv[2];
const COLS = Number(process.argv[3] || 110);
const leftFrac = Number(process.argv[4] ?? 0);
const topFrac = Number(process.argv[5] ?? 0);
const wFrac = Number(process.argv[6] ?? 1);
const hFrac = Number(process.argv[7] ?? 1);

(async () => {
  const meta = await sharp(file).metadata();
  const region = {
    left: Math.round(meta.width * leftFrac),
    top: Math.round(meta.height * topFrac),
    width: Math.round(meta.width * wFrac),
    height: Math.round(meta.height * hFrac),
  };
  if (region.left + region.width > meta.width) region.width = meta.width - region.left;
  if (region.top + region.height > meta.height) region.height = meta.height - region.top;

  const forced = Number(process.argv[8] || 0);
  const rows = forced || Math.max(1, Math.round((COLS * (region.height / region.width)) / 2.05));

  const { data, info } = await sharp(file)
    .extract(region)
    .resize(COLS, rows, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const px = (x, y) => {
    const i = (y * info.width + x) * info.channels;
    return [data[i], data[i + 1], data[i + 2]];
  };

  const bg = px(0, 0);
  const near = (r, g, b, t) =>
    Math.abs(r - t[0]) < 24 && Math.abs(g - t[1]) < 24 && Math.abs(b - t[2]) < 24;

  console.log(
    `${file} region ${region.left},${region.top} ${region.width}x${region.height} preview ${info.width}x${info.height}`,
  );
  let out = "";
  for (let y = 0; y < info.height; y++) {
    let line = "";
    for (let x = 0; x < info.width; x++) {
      const [r, g, b] = px(x, y);
      if (near(r, g, b, bg)) {
        line += ".";
        continue;
      }
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max - min;
      const lum = (r + g + b) / 3;
      if (max > 232 && sat < 26) line += "W";
      else if (lum > 205) line += "+";
      else if (sat > 42 && g > r + 14 && g > b + 14) line += "G";
      else if (sat > 42 && b > r + 14 && b >= g - 6) line += "V";
      else if (sat > 42 && r > g + 14) line += "R";
      else if (lum < 64) line += "#";
      else if (lum < 118) line += "*";
      else if (lum < 170) line += "-";
      else line += ":";
    }
    out += line + "\n";
  }
  console.log(out);
})();