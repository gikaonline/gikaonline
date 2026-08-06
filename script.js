const pages = 35;
const site = document.getElementById('site');

const anchors = {
  work: 'page-02',
  about: 'page-33',
  contact: 'page-35',
  masks: 'page-03',
  amphoreus: 'page-11',
  fashion: 'page-15',
  graffiti: 'page-20',
  digital: 'page-24',
  projects: 'page-29'
};

function addHotspot(page, label, href, x, y, w, h, extra = {}) {
  const a = document.createElement('a');
  a.className = 'hotspot';
  a.href = href;
  a.setAttribute('aria-label', label);
  a.style.left = x + '%';
  a.style.top = y + '%';
  a.style.width = w + '%';
  a.style.height = h + '%';
  if (extra.download) a.setAttribute('download', extra.download);
  if (extra.target) {
    a.target = extra.target;
    a.rel = 'noopener';
  }
  page.appendChild(a);
}

for (let i = 1; i <= pages; i++) {
  const section = document.createElement('section');
  const n = String(i).padStart(2, '0');
  section.className = 'page';
  section.id = `page-${n}`;
  section.setAttribute('aria-label', `Portfolio page ${i}`);

  const img = document.createElement('img');
  img.src = `assets/page-${n}.webp`;
  img.alt = `GIKA portfolio page ${i}`;
  img.loading = i <= 2 ? 'eager' : 'lazy';
  img.decoding = 'async';
  if (i === 1) img.fetchPriority = 'high';
  section.appendChild(img);

  // Transparent navigation areas matching the original page layout.
  addHotspot(section, 'Work', `#${anchors.work}`, 61.5, 2.0, 7.0, 8.0);
  addHotspot(section, 'About', `#${anchors.about}`, 69.0, 2.0, 7.0, 8.0);
  addHotspot(section, 'Download CV', 'files/GIKA-CV.pdf', 76.2, 2.0, 6.5, 8.0, { target: '_blank' });
  addHotspot(section, 'Contact', `#${anchors.contact}`, 83.0, 2.0, 11.5, 8.0);
  addHotspot(section, 'Return to top', '#page-01', 1.5, 1.0, 12.0, 9.0);

  if (i === 2) {
    addHotspot(section, 'Masks', `#${anchors.masks}`, 3.0, 25.5, 25.0, 8.0);
    addHotspot(section, 'Amphoreus', `#${anchors.amphoreus}`, 3.0, 34.0, 25.0, 8.0);
    addHotspot(section, 'Fashion Art', `#${anchors.fashion}`, 3.0, 42.5, 25.0, 8.0);
    addHotspot(section, 'Graffiti', `#${anchors.graffiti}`, 3.0, 51.0, 25.0, 8.0);
    addHotspot(section, 'Digital Art', `#${anchors.digital}`, 3.0, 59.5, 25.0, 8.0);
    addHotspot(section, 'Projects', `#${anchors.projects}`, 3.0, 68.0, 25.0, 8.0);
  }
  if (i === 33) {
    addHotspot(section, 'Download portfolio PDF', 'files/GIKA-Portfolio-2026.pdf', 40.0, 73.0, 21.0, 9.5, { target: '_blank' });
  }
  if (i === 34) {
    addHotspot(section, 'Download CV PDF', 'files/GIKA-CV.pdf', 80.0, 82.0, 14.0, 10.0, { target: '_blank' });
  }
  if (i === 35) {
    addHotspot(section, 'Email GIKA', 'mailto:hello@gika.online', 3.0, 55.0, 34.0, 10.0);
    addHotspot(section, 'GIKA on Instagram', 'https://www.instagram.com/_gika/', 3.0, 69.0, 22.0, 10.0, { target: '_blank' });
  }

  site.appendChild(section);
}
