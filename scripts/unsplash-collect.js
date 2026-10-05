const QUERIES = [
  "indian dentist",
  "indian doctor portrait",
  "dentist portrait",
  "dental clinic reception",
  "dental x-ray",
  "orthodontic braces",
  "dental implants",
  "dental laboratory tools",
  "teeth whitening dental",
  "pediatric dentist child",
  "oral surgery dentist",
  "dental chair modern",
  "dental instruments",
  "dentist smiling patient india",
  "dental checkup india",
  "dental sterilization autoclave",
  "intraoral scanner dental",
  "dental implant model",
  "woman smiling teeth",
  "dental team clinic staff",
  "root canal treatment",
  "dental crown tooth",
  "medical team india hospital",
  "doctor india stethoscope",
];

const out = {};
for (const q of QUERIES) {
  const tab = await tools["browser.tabs.open"]({ url: `https://unsplash.com/s/photos/${encodeURIComponent(q).replace(/%20/g, "-")}` });
  const r = await tools["browser.evaluate"]({
    tabID: tab.id,
    script: `(() => { try { return Array.from(document.querySelectorAll('img')).map(i => ({ alt: i.alt, src: i.currentSrc || i.src })).filter(x => x.src.includes('images.unsplash.com/photo-')).map(x => ({ alt: x.alt, id: (x.src.match(/photo-([0-9a-f]+-[0-9a-f]+)/) || [])[1] })).filter(x => x.id).filter((x, i, a) => a.findIndex(y => y.id === x.id) === i); } catch (e) { return []; } })()`,
  });
  const items = Array.isArray(r.value) ? r.value : [];
  out[q] = items.slice(0, 14);
  await tools["browser.tabs.close"].catch ? null : null;
}
return JSON.stringify(out, null, 1);