const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");
const sharp = require("sharp");

const CACHE = "C:/Users/intel/AppData/Local/Temp/opencode/raw";
const OUT = "C:/Users/intel/Desktop/Dental/public/images";

/** id :: unsplash photo id (after "photo-"), alt taken from search metadata */
const WANTED = {
  hero: {
    __shape: [1440, 1080],
    "hero-main-treatment": ["1777331903190-341a3dd0441b", "dentist talking with a patient in a modern dental office"],
    "hero-consultation": ["1657470179447-0f5aa16daa91", "dentist working on a patient in a bright clinic"],
    "hero-team-care": ["1588776814546-daab30f310ce", "two dentists in protective gear performing a procedure"],
  },
  clinic: {
    __shape: [1400, 933],
    "clinic-treatment-room": ["1643660527071-52e37cf7c7ea", "dental operatory with chair and equipment"],
    "clinic-modern-chair": ["1643660527190-4f401370f788", "dental chair and modern equipment"],
    "clinic-dental-chair": ["1643660527076-726d42bb1a06", "dental chair with overhead light in a clean room"],
    "clinic-dental-operatory": ["1643660527098-559f89e45a92", "dental room with chair and monitor"],
    "clinic-reception": ["1629909613654-28e377c37b09", "modern dental office with chair and equipment"],
    "clinic-waiting-area": ["1762625570087-6d98fca29531", "modern clinic waiting room with chairs"],
    "clinic-equipment": ["1642844771937-23accb161a3d", "dental room with chair and monitor"],
  },
  doctors: {
    __shape: [900, 1125],
    "dr-arjun-mehta": ["1612349317150-e413f6a5b16d", "male dental specialist in a white coat and glasses"],
    "dr-priya-sharma": ["1659353888906-adb3e0041693", "female dental surgeon in a white coat"],
    "dr-rohit-verma": ["1612531386530-97286d97c2d2", "male orthodontist wearing glasses"],
    "dr-ananya-iyer": ["1659353886973-ced1dfeab3ac", "female doctor with a stethoscope around her neck"],
    "dr-vikram-reddy": ["1659353885824-1199aeeebfc6", "male doctor wearing a white coat and stethoscope"],
    "dr-kavya-nair": ["1623854767648-e7bb8009f0db", "smiling female doctor with a stethoscope"],
  },
  services: {
    __shape: [1200, 800],
    "service-general-dentistry": ["1606811971618-4486d14f3f99", "dental examination with mirror and instruments"],
    "service-cosmetic-dentistry": ["1677026010083-78ec7f1b84ed", "close-up of a bright healthy smile"],
    "service-dental-implants": ["1663755489920-5e09f66d011a", "dentist examining a patient with a mirror before implant surgery"],
    "service-root-canal": ["1698749778813-ad5f2814e50f", "dental mirror in focus with the treatment chair behind"],
    "service-orthodontics": ["1598256989809-394fa4f6cd26", "person showing silver braces on teeth"],
    "service-teeth-whitening": ["1654373535457-383a0a4d00f9", "close-up of white teeth after whitening"],
    "service-pediatric-dentistry": ["1758205307836-0829c799890b", "dentist examining a young child's teeth"],
    "service-oral-surgery": ["1734518352234-a58257a579be", "dental room prepared for a surgical procedure"],
  },
  treatments: {
    __shape: [1200, 900],
    "treatment-dental-implants": ["1771442873035-474765b40ac6", "gloved hand holding a dental implant and crown"],
    "treatment-root-canal": ["1777793389944-f7165259a05c", "dentist showing a model of a damaged tooth"],
    "treatment-braces-aligners": ["1609840114035-3c981b782dfe", "clear plastic dental aligner being inserted"],
    "treatment-smile-makeover": ["1545803928-04e3f4cdd4ed", "woman smiling confidently after a smile makeover"],
    "treatment-teeth-whitening": ["1654373535457-383a0a4d00f9", "close-up of whiter teeth after treatment"],
    "treatment-crowns-bridges": ["1564420042700-a64e34a54c1b", "ceramic dental crowns and denture models"],
  },
  technology: {
    __shape: [1200, 800],
    "tech-digital-xray": ["1588776814546-1ffcf47267a5", "dentist examining dental X-ray scans on a light box"],
    "tech-intraoral-scanner": ["1667133295311-e6911e6e22db", "doctor and patient reviewing a digital scan on screen"],
    "tech-smile-planning": ["1777443726993-8f9c8e96e46e", "dentist examining a 3D dental scan on a tablet"],
    "tech-dental-chair": ["1598256989800-fe5f95da9787", "dental chair with equipment in a bright clinic"],
    "tech-sterilization": ["1728102199887-a285f8957c5d", "gloved hand pointing at sterilised surgical instruments"],
  },
  gallery: {
    __shape: [1200, 900],
    "gallery-consultation": ["1681939282781-341ac4f61996", "woman having her teeth checked by a dentist"],
    "gallery-xray-diagnosis": ["1522849696084-818b29dfe210", "dental X-ray showing teeth and jaw"],
    "gallery-pediatric-care": ["1653508310895-62141575a3a9", "young boy having his teeth checked"],
    "gallery-hygiene-checkup": ["1600170311833-c2cf5280ce49", "gloved hand pointing at a dental scan on a tablet"],
    "gallery-oral-care": ["1684607633138-6cc13613369b", "woman getting her teeth checked by a dentist"],
    "gallery-treatment": ["1663755489920-5e09f66d011a", "dentist examining a patient with a dental mirror"],
    "gallery-dental-instruments": ["1643660527095-bfb19b49994a", "group of dental instruments on a tray"],
    "gallery-digital-imaging": ["1777443726993-8f9c8e96e46e", "dentist reviewing a 3D dental scan"],
    "gallery-clinic-interior": ["1642844819197-5f5f21b89ff8", "dental room with chair and monitor"],
    "gallery-orthodontic-care": ["1720685193964-4529228a33c1", "close-up of a tooth with braces"],
    "gallery-smile-result": ["1548382131-e0ebb1f0cdea", "woman smiling in a white top"],
    "gallery-team-care": ["1631217868264-e5b90bb7e133", "dental team consulting during a procedure"],
  },
  about: {
    __shape: [1400, 933],
    "about-clinic-team": ["1758205307854-5f0b57c27f17", "dental professionals practising a procedure"],
    "about-consultation": ["1681939278218-a755fb2bf2d3", "dentist treating a patient comfortably"],
    "about-patient-experience": ["1619691249147-c5689d88016b", "patient reviewing her dental scan"],
  },
};

function download(id, attempt = 0) {
  const url = `https://images.unsplash.com/photo-${id}?q=90&w=2200&fm=jpg`;
  const file = path.join(CACHE, `${id}.jpg`);
  if (fs.existsSync(file) && fs.statSync(file).size > 20000) return Promise.resolve(file);
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${id}`));
        }
        const ws = fs.createWriteStream(file);
        res.pipe(ws);
        ws.on("finish", () => ws.close(() => resolve(file)));
      })
      .on("error", (err) => {
        if (attempt < 4) {
          setTimeout(() => download(id, attempt + 1).then(resolve, reject), 1500 * (attempt + 1));
        } else {
          reject(err);
        }
      });
  });
}

(async () => {
  fs.mkdirSync(CACHE, { recursive: true });
  const manifest = [];
  const jobs = [];

  for (const [folder, entries] of Object.entries(WANTED)) {
    const dir = path.join(OUT, folder);
    fs.mkdirSync(dir, { recursive: true });
    for (const [name, value] of Object.entries(entries)) {
      if (name.startsWith("__")) continue;
      jobs.push({ folder, dir, name, id: value[0], alt: value[1], shape: entries.__shape });
    }
  }

  const run = async (job) => {
    const src = await download(job.id);
    const meta = await sharp(src).metadata();
    const [w, h] = job.shape;
    await sharp(src)
      .resize(w, h, { fit: "cover", position: sharp.strategy.attention })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(path.join(job.dir, `${job.name}.jpg`));
    manifest.push({ ...job, srcW: meta.width, srcH: meta.height, outW: w, outH: h });
    return job.name;
  };

  const results = [];
  for (const job of jobs) {
    try {
      results.push({ status: "fulfilled", value: await run(job) });
    } catch (err) {
      results.push({ status: "rejected", reason: err });
    }
  }

  const failed = results.filter((r) => r.status === "rejected");
  console.log(`ok: ${results.length - failed.length}, failed: ${failed.length}`);
  for (const f of failed) console.log("  FAIL", f.reason.message);
  console.log(JSON.stringify(manifest.map((m) => `${m.folder}/${m.name} <- ${m.srcW}x${m.srcH}`), null, 1));
})();