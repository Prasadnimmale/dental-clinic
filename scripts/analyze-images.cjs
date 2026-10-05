const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dirs = process.argv.slice(2);
if (!dirs.length) {
  console.error("usage: node analyze-images.js <dir...>");
  process.exit(1);
}

function stats(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    if (!/\.(jpe?g|png)$/i.test(f)) continue;
    const p = path.join(dir, f);
    out.push({ file: path.basename(dir) + "/" + f, path: p });
  }
  return out;
}

async function analyze(item) {
  const img = sharp(item.path);
  const meta = await img.metadata();
  const W = 96;
  const H = Math.max(1, Math.round((meta.height / meta.width) * W));
  const { data } = await img
    .resize(W, H, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let r = 0, g = 0, b = 0, skin = 0, white = 0, dark = 0, lum = 0;
  const n = W * H;
  const gray = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const R = data[i * 3], G = data[i * 3 + 1], B = data[i * 3 + 2];
    r += R; g += G; b += B;
    const L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    gray[i] = L;
    lum += L;
    const mx = Math.max(R, G, B), mn = Math.min(R, G, B);
    if (R > 95 && G > 40 && B > 20 && mx - mn > 15 && Math.abs(R - G) > 15 && R > G && R > B) skin++;
    if (L > 225) white++;
    if (L < 60) dark++;
  }

  let edges = 0;
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const i = y * W + x;
      const gx = gray[i + 1] - gray[i - 1];
      const gy = gray[i + W] - gray[i - W];
      if (Math.sqrt(gx * gx + gy * gy) > 35) edges++;
    }
  }

  // saturation proxy
  let sat = 0;
  for (let i = 0; i < n; i++) {
    const R = data[i * 3], G = data[i * 3 + 1], B = data[i * 3 + 2];
    const mx = Math.max(R, G, B), mn = Math.min(R, G, B);
    sat += mx === 0 ? 0 : (mx - mn) / mx;
  }

  // corner uniformity (studio background?)
  const blockStd = (bx, by) => {
    let s = 0, s2 = 0, k = 0;
    for (let y = by; y < Math.min(by + 10, H); y++)
      for (let x = bx; x < Math.min(bx + 10, W); x++) {
        const v = gray[y * W + x];
        s += v; s2 += v * v; k++;
      }
    return k ? Math.sqrt(Math.max(0, s2 / k - (s / k) ** 2)) : 999;
  };
  const corners = [blockStd(0, 0), blockStd(W - 10, 0), blockStd(0, H - 10), blockStd(W - 10, H - 10)];
  const uniform = corners.filter((v) => v < 6).length;

  return {
    name: item.file,
    w: meta.width,
    h: meta.height,
    ar: +(meta.width / meta.height).toFixed(2),
    lum: Math.round(lum / n),
    rgb: `${Math.round(r / n)},${Math.round(g / n)},${Math.round(b / n)}`,
    skin: +(skin / n).toFixed(3),
    white: +(white / n).toFixed(3),
    dark: +(dark / n).toFixed(3),
    sat: +(sat / n).toFixed(3),
    edge: +(edges / n).toFixed(3),
    uni: uniform,
  };
}

(async () => {
  const items = dirs.flatMap(stats);
  const rows = [];
  for (const it of items) {
    try {
      rows.push(await analyze(it));
    } catch (e) {
      rows.push({ name: it.file, error: String(e.message).slice(0, 60) });
    }
  }
  rows.sort((a, b) => (a.name < b.name ? -1 : 1));
  for (const r of rows) {
    if (r.error) {
      console.log(`${r.name} :: ERR ${r.error}`);
      continue;
    }
    console.log(
      `${r.name.padEnd(44)} ${String(r.w).padStart(4)}x${String(r.h).padEnd(4)} ar=${String(r.ar).padStart(5)} lum=${String(r.lum).padStart(3)} rgb=${r.rgb.padEnd(11)} skin=${String(r.skin).padEnd(5)} wht=${String(r.white).padEnd(5)} drk=${String(r.dark).padEnd(5)} sat=${String(r.sat).padEnd(5)} edge=${String(r.edge).padEnd(5)} uni=${r.uni}`,
    );
  }
})();