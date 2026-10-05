// Temporary utility: find letter/glyph clusters in a horizontal band.
const sharp = require("sharp");

const file = process.argv[2];

(async () => {
  const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const at = (x, y) => {
    const i = (y * width + x) * channels;
    return [data[i], data[i + 1], data[i + 2]];
  };

  const samples = [];
  for (let x = 0; x < width; x += 3) samples.push(at(x, 0), at(x, height - 1));
  for (let y = 0; y < height; y += 3) samples.push(at(0, y), at(width - 1, y));
  const med = (c) => {
    const s = samples.map((v) => v[c]).sort((a, b) => a - b);
    return s[Math.floor(s.length / 2)];
  };
  const bg = [med(0), med(1), med(2)];
  const ink = (x, y) => {
    const [r, g, b] = at(x, y);
    return (
      Math.abs(r - bg[0]) > 26 || Math.abs(g - bg[1]) > 26 || Math.abs(b - bg[2]) > 26
    );
  };

  // Row bands.
  const rowCounts = new Array(height).fill(0);
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) if (ink(x, y)) rowCounts[y]++;
  const bands = [];
  let s = -1;
  for (let y = 0; y <= height; y++) {
    const has = y < height && rowCounts[y] > 0;
    if (has && s === -1) s = y;
    if (!has && s !== -1) {
      bands.push({ y0: s, y1: y - 1, h: y - s });
      s = -1;
    }
  }
  console.log("row bands:", bands.map((b) => `${b.y0}-${b.y1}(h${b.h})`).join(", "));

  for (const band of bands) {
    const cols = [];
    for (let x = 0; x < width; x++) {
      let n = 0;
      for (let y = band.y0; y <= band.y1; y++) if (ink(x, y)) n++;
      cols.push(n);
    }
    // Cluster columns into glyph groups separated by >= minGap empty columns.
    const minGap = Number(process.argv[3] || 10);
    const groups = [];
    let gs = -1;
    let gap = 0;
    for (let x = 0; x <= width; x++) {
      const on = x < width && cols[x] > 0;
      if (on) {
        if (gs === -1) gs = x;
        gap = 0;
      } else if (gs !== -1) {
        gap++;
        if (gap >= minGap || x === width) {
          groups.push({ x0: gs, x1: x - gap, w: x - gap - gs + 1 });
          gs = -1;
          gap = 0;
        }
      }
    }
    const words = [];
    let ws = groups[0];
    for (const g of groups.slice(1)) {
      if (g.x0 - ws.x1 > 26) {
        words.push(ws);
        ws = g;
      } else {
        ws = { x0: ws.x0, x1: g.x1, w: g.x1 - ws.x0 + 1 };
      }
    }
    if (groups.length) words.push(ws);
    console.log(
      `\nband y${band.y0}-${band.y1} h${band.h}: ${groups.length} glyph groups, ${words.length} word groups`,
    );
    console.log("  glyphs:", groups.map((g) => `${g.x0}-${g.x1}(${g.w})`).join(" "));
    console.log("  words :", words.map((g) => `${g.x0}-${g.x1}(${g.w})`).join(" "));
  }
})();