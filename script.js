const DATA = {
  L1: {
    S1: [
      ["Analyse 1", 7], ["Algèbre 1", 6], ["Structures de données et algorithmique 1", 6],
      ["Statistique 1", 6], ["TIC 1", 3], ["Anglais 1", 2]
    ],
    S2: [
      ["Analyse 2", 7], ["Algèbre 2", 6], ["Structures de données et algorithmique 2", 6],
      ["Statistique 2", 6], ["Outils de programmation pour les mathématiques", 3], ["Anglais 2", 2]
    ]
  },
  L2: {
    S1: [
      ["Analyse 3", 7], ["Topologie", 5], ["Algèbre 3", 4], ["Probabilités 1", 5],
      ["Programmation Orientée Objet", 3], ["Complexité", 4], ["Anglais 3", 2]
    ],
    S2: [
      ["Analyse 4", 7], ["Algèbre 4", 4], ["Probabilités 2", 4], ["Bases de données", 4],
      ["Langage de programmation Python", 4], ["Recherche Opérationnelle 1", 5], ["Anglais 4", 2]
    ]
  },
  L3: {
    S1: [
      ["Data Mining 1", 6], ["Analyse numérique", 6], ["Optimisation non linéaire", 6],
      ["Modélisation et études de cas", 5], ["Introduction au management de l'entreprise", 5]
    ],
    S2: [
      ["Processus Aléatoires", 6], ["Data Mining 2", 6], ["Recherche Opérationnelle 2", 4],
      ["Sondages et Enquêtes", 4], ["Gestion de Projets", 3], ["Théorie de l'information", 3], ["Stage/Projet", 4]
    ]
  },
  M1: {
    S1: [
      ["Modèles linéaires", 5], ["Séries chronologiques", 5], ["Inférence bayésienne", 4],
      ["Simulation", 4], ["Data Warehouse et OLAP", 5], ["Analyse multicritère", 4],
      ["Introduction à la Sécurité informatique", 3]
    ],
    S2: [
      ["Estimation non paramétrique", 6], ["Analyse de données catégorielles", 4], ["Machine learning", 4],
      ["Systèmes de bases de données réparties", 4], ["Programmation et logiciels de science des données", 4],
      ["Extraction d'informations multimédia", 4], ["Métaheuristiques", 4]
    ]
  },
  M2: {
    S1: [
      ["Machine learning avancé", 8], ["Bases de données et big data", 4], ["Modèles graphiques", 6],
      ["Théorie des codes et applications", 5], ["Arbres de décision", 4], ["Finance", 3]
    ],
    S2: [
      ["Projet de Fin d'Études", 30]
    ]
  }
};

const MODULE_ICON = `<svg class="mod-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L2 8l10 5 8-4.2V16h1.5V8L12 3z" fill="currentColor"/><path d="M6 12.4V17c0 1.8 2.7 3.2 6 3.2s6-1.4 6-3.2v-4.6l-6 3.1-6-3.1z" fill="currentColor" opacity="0.55"/></svg>`;
const DRIVE_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.05 3l7.9 0 6.4 11.1-3.95 6.9H12l-3.95-6.9L8.05 3z" fill="none"/><path d="M8.5 3.6L2.2 14.4l3.15 5.5 6.3-10.9L8.5 3.6z" fill="#4f8dff"/><path d="M15.5 3.6h-7l6.3 10.9h7L15.5 3.6z" fill="#9b5cf6"/><path d="M5.35 19.9h13.3l3.15-5.5H8.5l-3.15 5.5z" fill="#3ddc84"/></svg>`;
const BOOK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
const EXT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`;
const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
const X_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`;
const DEFAULT_DRIVE_LINK = "https://drive.google.com/drive/u/2/shared-with-me";

const DEBTS_TEXT = "Une dette est un module que tu n'as pas validé parce que tu as obtenu une note inférieure à 10/20. Si tu remplis les conditions pour passer en année supérieure, tu peux quand même continuer tes études tout en gardant cette matière en dette. Tu devras repasser l'examen et les interros du module pour avoir une note supérieure à 10 afin de l'effacer.";
const SPECIALITE_TEXT = "Cette spécialité est un master intégré, c'est-à-dire qu'on est déjà spécialisé dès la première année en Science des données, et on a le droit à une Licence aussi à la L3.";

const DEBOUCHES_HTML = `
<ul class="job-list">
  <li><strong>Data Scientist</strong> : crée des modèles prédictifs, analyse les données et développe des solutions d'IA.</li>
  <li><strong>Machine Learning Engineer</strong> : conçoit et déploie des modèles d'apprentissage automatique en production.</li>
  <li><strong>Data Engineer</strong> : construit les pipelines de données et les infrastructures de traitement.</li>
  <li><strong>Data Analyst / Business Analyst</strong> : transforme les données en informations utiles pour aider à la prise de décision.</li>
  <li><strong>AI Engineer</strong> : développe des applications basées sur l'intelligence artificielle (vision par ordinateur, NLP, IA générative, etc.).</li>
  <li><strong>MLOps Engineer</strong> : automatise le déploiement, le suivi et la maintenance des modèles d'IA.</li>
  <li><strong>BI (Business Intelligence) Developer</strong> : crée des tableaux de bord et des outils d'aide à la décision.</li>
  <li><strong>Research Scientist</strong> : travaille dans la recherche en intelligence artificielle, souvent après un doctorat.</li>
</ul>
`;

let currentYear = "L1";
let currentSem = "S1";
let currentView = "home";

const yearTabsEl = document.getElementById("yearTabs");
const semTabsEl = document.getElementById("semTabs");
const modulesBodyEl = document.getElementById("modulesBody");
const coursContainerEl = document.getElementById("coursContainer");
const ringProgressEl = document.getElementById("ringProgress");
const ringValueEl = document.getElementById("ringValue");
const statusPillEl = document.getElementById("statusPill");
const statusTextEl = document.getElementById("statusText");
const creditsValidesEl = document.getElementById("creditsValides");

const RING_CIRC = 2 * Math.PI * 62;
let displayedMoyenne = 0;
let displayedPct = 0;
let ringAnimToken = 0;

/* ---------- NAVIGATION ---------- */
const sidebarEl = document.querySelector(".sidebar");
let sidebarHideTimer = null;

function showView(view){
  const wasHome = currentView === "home";
  currentView = view;
  ["home","notes","cours","jeu","exercice","apropos","parametres"].forEach(v => {
    document.getElementById(`view-${v}`).classList.toggle("hidden", v !== view);
  });
  document.querySelectorAll(".navitem").forEach(n => n.classList.toggle("active", n.dataset.view === view || (view === "exercice" && n.dataset.view === "jeu")));
  document.body.classList.toggle("on-home", view === "home");

  clearTimeout(sidebarHideTimer);

  if (view === "home") {
    if (wasHome) {
      sidebarEl.classList.add("hide");
    } else {
      sidebarEl.classList.remove("hide");
      void sidebarEl.offsetWidth; // force le recalcul pour que la transition se déclenche
      sidebarEl.style.opacity = "0";
      sidebarHideTimer = setTimeout(() => { sidebarEl.classList.add("hide"); }, 500);
    }
  } else if (wasHome) {
    sidebarEl.classList.remove("hide");
    sidebarEl.style.opacity = "0";
    void sidebarEl.offsetWidth; // force le recalcul pour que la transition se déclenche
    requestAnimationFrame(() => { sidebarEl.style.opacity = "1"; });
  } else {
    sidebarEl.classList.remove("hide");
    sidebarEl.style.opacity = "1";
  }

  if (view === "cours") renderCours();
  if (view === "exercice") renderExercise();
  window.scrollTo({top:0, behavior:"instant"});
}
document.querySelectorAll(".navitem").forEach(n => n.addEventListener("click", () => showView(n.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(el => el.addEventListener("click", () => {
  if (el.dataset.subject) currentSubject = el.dataset.subject;
  showView(el.dataset.goto);
}));

/* ---------- MODALE ---------- */
const modalOverlayEl = document.getElementById("modalOverlay");
const youDiedOverlayEl = document.getElementById("youDiedOverlay");
let youDiedAudioCtx = null;
let youDiedTimer = null;

function playYouDiedSound(){
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!youDiedAudioCtx) youDiedAudioCtx = new Ctx();
    const ctx = youDiedAudioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(120, now);
    osc1.frequency.exponentialRampToValueAtTime(48, now + 2.4);

    const osc2 = ctx.createOscillator();
    osc2.type = "sawtooth";
    osc2.frequency.setValueAtTime(200, now);
    osc2.frequency.exponentialRampToValueAtTime(70, now + 2.4);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 2.4);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.18);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now); osc2.start(now);
    osc1.stop(now + 2.7); osc2.stop(now + 2.7);
  } catch(e) { /* audio indisponible sur cet appareil */ }
}

function triggerYouDied(){
  clearTimeout(youDiedTimer);
  youDiedOverlayEl.classList.remove("show");
  void youDiedOverlayEl.offsetWidth; // relance l'animation même si déjà affichée récemment
  youDiedOverlayEl.classList.add("show");
  playYouDiedSound();
  youDiedTimer = setTimeout(() => youDiedOverlayEl.classList.remove("show"), 3200);
}
youDiedOverlayEl.addEventListener("click", () => {
  clearTimeout(youDiedTimer);
  youDiedOverlayEl.classList.remove("show");
});
const modalTitleEl = document.getElementById("modalTitle");
const modalTextEl = document.getElementById("modalText");
let modalTimerInterval = null;

function openModal(title, text){
  clearInterval(modalTimerInterval);
  modalTitleEl.textContent = title;
  modalTextEl.textContent = text;
  modalOverlayEl.classList.add("show");
}
function openModalHTML(title, html){
  clearInterval(modalTimerInterval);
  modalTitleEl.textContent = title;
  modalTextEl.innerHTML = html;
  modalOverlayEl.classList.add("show");
}
function closeModal(){
  clearInterval(modalTimerInterval);
  modalOverlayEl.classList.remove("show");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlayEl.addEventListener("click", e => { if (e.target === modalOverlayEl) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll("[data-modal]").forEach(el => {
  el.addEventListener("click", () => {
    if (el.dataset.modal === "dettes") openModal("Dettes", DEBTS_TEXT);
    if (el.dataset.modal === "specialite") openModal("Spécialité", SPECIALITE_TEXT);
    if (el.dataset.modal === "debouches") openModalHTML("Débouchés", DEBOUCHES_HTML);
  });
});

/* ---------- CARD CURSOR GLOW ---------- */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", (e.clientX - r.left) + "px");
    card.style.setProperty("--y", (e.clientY - r.top) + "px");
  });
});

/* ---------- YEAR / SEM TABS ---------- */
Object.keys(DATA).forEach((year, i) => {
  const btn = document.createElement("button");
  btn.className = i === 0 ? "active" : "";
  btn.textContent = year;
  btn.dataset.year = year;
  btn.addEventListener("click", () => {
    currentYear = year;
    [...yearTabsEl.children].forEach(t => t.classList.toggle("active", t === btn));
    renderModules();
  });
  yearTabsEl.appendChild(btn);
});

[...semTabsEl.children].forEach(btn => {
  btn.addEventListener("click", () => {
    currentSem = btn.dataset.sem;
    [...semTabsEl.children].forEach(t => t.classList.toggle("active", t === btn));
    renderModules();
  });
});

/* ---------- STORAGE (avec repli localStorage si window.storage indisponible) ---------- */
const hasCloudStorage = (typeof window.storage !== "undefined") && window.storage && typeof window.storage.get === "function";

async function storageGet(key){
  if (hasCloudStorage) {
    try { return await window.storage.get(key, false); } catch(e) { return null; }
  }
  try {
    const v = localStorage.getItem(key);
    return v !== null ? { value: v } : null;
  } catch(e) { return null; }
}
async function storageSet(key, value){
  if (hasCloudStorage) {
    try { return await window.storage.set(key, value, false); } catch(e) { /* repli */ }
  }
  try { localStorage.setItem(key, value); } catch(e) { console.error("Sauvegarde impossible :", e); }
}
async function storageDelete(key){
  if (hasCloudStorage) {
    try { await window.storage.delete(key, false); return; } catch(e) { /* repli */ }
  }
  try { localStorage.removeItem(key); } catch(e) { /* ignore */ }
}
async function storageListKeys(){
  if (hasCloudStorage) {
    try { const r = await window.storage.list("", false); return (r && r.keys) ? r.keys : []; } catch(e) { return []; }
  }
  const keys = [];
  try {
    for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
  } catch(e) { /* ignore */ }
  return keys;
}

function gradesKey(){ return `grades:${currentYear}:${currentSem}`; }
function driveKey(year, sem, idx){ return `drive:${year}:${sem}:${idx}`; }

async function saveGrades(){
  const modules = DATA[currentYear][currentSem];
  const data = {};
  modules.forEach((mod, idx) => {
    const td = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="td"]`);
    const ex = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="exam"]`);
    if (td && ex && (td.value !== "" || ex.value !== "")) data[idx] = { td: td.value, exam: ex.value };
  });
  await storageSet(gradesKey(), JSON.stringify(data));
}

async function loadGrades(){
  const result = await storageGet(gradesKey());
  if (!result || !result.value) return;
  try {
    const data = JSON.parse(result.value);
    Object.keys(data).forEach(idx => {
      const td = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="td"]`);
      const ex = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="exam"]`);
      if (td) td.value = data[idx].td || "";
      if (ex) ex.value = data[idx].exam || "";
      updateModuleNote(idx);
    });
  } catch(e) { /* données corrompues, on ignore */ }
}

/* ---------- NOTES LOGIC ---------- */
function updateModuleNote(idx){
  const td = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="td"]`);
  const ex = modulesBodyEl.querySelector(`input[data-idx="${idx}"][data-type="exam"]`);
  const moyCell = document.getElementById(`moy-${idx}`);
  if (!td || !ex || !moyCell) return null;

  const tdVal = parseFloat(td.value);
  const exVal = parseFloat(ex.value);

  if (!isNaN(exVal)) {
    const note = isNaN(tdVal) ? exVal : (tdVal * 0.4 + exVal * 0.6);
    moyCell.textContent = note.toFixed(2);
    moyCell.style.color = note >= 10 ? "var(--green)" : "var(--red)";
    return note;
  }
  moyCell.textContent = "—";
  moyCell.style.color = "var(--text-dimmer)";
  return null;
}

function renderModules(){
  modulesBodyEl.innerHTML = "";
  const modules = DATA[currentYear][currentSem];

  modules.forEach((mod, idx) => {
    const [nom, credits] = mod;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="mod-cell">
        <div class="mod-name">${MODULE_ICON}${nom}</div>
        <div class="mod-credits">${credits} crédit${credits > 1 ? "s" : ""}</div>
      </td>
      <td class="num" data-label="Crédits">${credits}</td>
      <td class="num" data-label="Note TD"><input type="number" class="grade" data-idx="${idx}" data-type="td" min="0" max="20" step="0.25" placeholder="/20"></td>
      <td class="num" data-label="Note Examen"><input type="number" class="grade" data-idx="${idx}" data-type="exam" min="0" max="20" step="0.25" placeholder="/20"></td>
      <td class="moy" data-label="Moyenne" id="moy-${idx}">—</td>
    `;
    modulesBodyEl.appendChild(tr);
  });

  modulesBodyEl.querySelectorAll("input.grade").forEach(input => {
    input.addEventListener("input", () => {
      updateModuleNote(input.dataset.idx);
      saveGrades();
    });
  });

  resetResultPanel();
  loadGrades();
}

function resetResultPanel(){
  ringAnimToken++;
  displayedMoyenne = 0;
  displayedPct = 0;
  ringProgressEl.setAttribute("stroke-dasharray", RING_CIRC);
  ringProgressEl.setAttribute("stroke-dashoffset", RING_CIRC);
  ringValueEl.innerHTML = `—<span>/20</span>`;
  statusPillEl.className = "status-pill pending";
  statusTextEl.textContent = "À compléter";
  creditsValidesEl.textContent = "— / —";
}

function animateResult(targetMoyenne, targetPct, duration){
  duration = duration || 900;
  const token = ++ringAnimToken;
  const startValue = displayedMoyenne;
  const startPct = displayedPct;
  const startTime = performance.now();

  function frame(now){
    if (token !== ringAnimToken) return; // une nouvelle animation a pris le relais
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    const val = startValue + (targetMoyenne - startValue) * eased;
    const pct = startPct + (targetPct - startPct) * eased;

    ringValueEl.innerHTML = `${val.toFixed(2)}<span>/20</span>`;
    ringProgressEl.setAttribute("stroke-dasharray", RING_CIRC);
    ringProgressEl.setAttribute("stroke-dashoffset", RING_CIRC * (1 - pct));

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      displayedMoyenne = targetMoyenne;
      displayedPct = targetPct;
    }
  }
  requestAnimationFrame(frame);
}

document.getElementById("computeBtn").addEventListener("click", () => {
  const modules = DATA[currentYear][currentSem];
  let totalPoints = 0, totalCreditsFilled = 0, creditsValides = 0, totalCreditsSemestre = 0;
  let anyFilled = false;

  modules.forEach((mod, idx) => {
    const [, credits] = mod;
    totalCreditsSemestre += credits;
    const note = updateModuleNote(idx);
    if (note !== null) {
      totalPoints += note * credits;
      totalCreditsFilled += credits;
      if (note >= 10) creditsValides += credits;
      anyFilled = true;
    }
  });

  if (!anyFilled || totalCreditsFilled === 0) {
    resetResultPanel();
    creditsValidesEl.textContent = `0 / ${totalCreditsSemestre}`;
    return;
  }

  const moyenne = totalPoints / totalCreditsFilled;
  const passed = moyenne >= 10;
  const pct = Math.max(0, Math.min(1, moyenne / 20));

  animateResult(moyenne, pct, 900);

  statusPillEl.className = "status-pill " + (passed ? "pass" : "fail");
  statusTextEl.textContent = passed ? "Semestre validé" : "Semestre non validé";

  if (!passed) {
    setTimeout(() => triggerYouDied(), 900);
  }

  creditsValidesEl.textContent = `${creditsValides} / ${totalCreditsSemestre}`;
});

/* ---------- COURS VIEW ---------- */
const L1_DRIVE_LINKS = {
  "Analyse 1": "https://drive.google.com/drive/u/2/folders/1BzhJgj4rC6JWAwqFnBnVvRQnEpxmIrPL",
  "Algèbre 1": "https://drive.google.com/drive/u/2/folders/1NlpXjEco5seCXYl_K8jruDt7-cxnsdFp",
  "Structures de données et algorithmique 1": "https://drive.google.com/drive/u/2/folders/19_g8YNBAjJZj_y9MyWBohASeM8gqHtPg",
  "Statistique 1": "https://drive.google.com/drive/u/2/folders/1yIVnPjH1iNgJioRAxW8D15lCPgsyvUvf",
  "TIC 1": "https://drive.google.com/drive/u/2/folders/1trzJqK41j4NZcuGuz3V0Xdfm7FgQ8U0v",
  "Anglais 1": "https://drive.google.com/drive/u/2/folders/1a8q2QvaccOkI-3dK2rUCtt-zkeQW_RFG",
  "Analyse 2": "https://drive.google.com/drive/u/2/folders/1wxE_Y9xeRL-SCOrg_T_CVtyu9z769loy",
  "Algèbre 2": "https://drive.google.com/drive/u/2/folders/1BMsRYNL41p0tWsgkV-gRi1c15zmImyGH",
  "Structures de données et algorithmique 2": "https://drive.google.com/drive/u/2/folders/13epNcUaiz4ijs4n1--GYC-mR4rKZq-EH",
  "Statistique 2": "https://drive.google.com/drive/u/2/folders/1z5EZENUvj31rVGvlmec_xWMiHtzRQaYz",
  "Outils de programmation pour les mathématiques": "https://drive.google.com/drive/u/2/folders/1RYEa7c5odlyUPp8MzhAd-4CY7IAcBGMb",
  "Anglais 2": "https://drive.google.com/drive/u/2/folders/1ahTxMjATU7JvbzllR7qDEzoY5JKZBM5P"
};

function moduleDefaultLink(year, moduleName){
  if (year === "L1" && L1_DRIVE_LINKS[moduleName]) {
    return L1_DRIVE_LINKS[moduleName];
  }
  return null;
}

async function openDriveLink(year, sem, idx, moduleName, forceEdit){
  const key = driveKey(year, sem, idx);
  let link = null;
  const result = await storageGet(key);
  if (result && result.value) link = result.value;

  if (forceEdit) {
    const entered = prompt(`Lien Google Drive pour "${moduleName}" :`, link || moduleDefaultLink(year, moduleName) || "https://drive.google.com/");
    if (!entered) return;
    link = entered.trim();
    await storageSet(key, link);
  } else if (!link) {
    const def = moduleDefaultLink(year, moduleName);
    if (def) {
      link = def;
    } else {
      const entered = prompt(`Aucun lien Drive enregistré pour "${moduleName}". Colle le lien ici :`, "https://drive.google.com/");
      if (!entered) return;
      link = entered.trim();
      await storageSet(key, link);
    }
  }
  window.open(link, "_blank");
}

function bookKey(year, sem, idx){ return `book:${year}:${sem}:${idx}`; }

async function openBookLink(year, sem, idx, moduleName, forceEdit){
  const key = bookKey(year, sem, idx);
  let link = null;
  const result = await storageGet(key);
  if (result && result.value) link = result.value;

  if (!link || forceEdit) {
    const entered = prompt(`Lien Drive des livres/PDF pour "${moduleName}" :`, link || "https://drive.google.com/");
    if (!entered) return;
    link = entered.trim();
    await storageSet(key, link);
  }
  window.open(link, "_blank");
}

async function renderCours(){
  coursContainerEl.innerHTML = "";
  for (const year of Object.keys(DATA)) {
    const section = document.createElement("div");
    section.className = "year-section";

    const head = document.createElement("div");
    head.className = "year-head";
    head.innerHTML = `
      <div class="year-badge">${year}</div>
      ${year === "L1" ? `<button class="year-drive-btn" type="button">${DRIVE_ICON} Drive complet</button>` : ""}
      <div class="year-line"></div>
    `;
    if (year === "L1") {
      head.querySelector(".year-drive-btn").addEventListener("click", () => {
        window.open(DEFAULT_DRIVE_LINK, "_blank");
      });
    }
    section.appendChild(head);

    const cols = document.createElement("div");
    cols.className = "sem-columns";

    for (const [colIdx, sem] of ["S1", "S2"].entries()) {
      const col = document.createElement("div");
      col.className = "sem-col " + (colIdx === 0 ? "left" : "right");
      col.innerHTML = `<h5>Semestre ${colIdx + 1}</h5>`;

      for (const [idx, mod] of DATA[year][sem].entries()) {
        const [nom, credits] = mod;

        const driveResult = await storageGet(driveKey(year, sem, idx));
        const hasDrive = !!moduleDefaultLink(year, nom) || !!(driveResult && driveResult.value);
        const bookResult = await storageGet(bookKey(year, sem, idx));
        const hasBook = !!(bookResult && bookResult.value);

        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
          <div class="left-part">
            ${hasDrive ? `<div class="c-icon">${DRIVE_ICON}</div>` : ""}
            ${hasBook ? `<button type="button" class="c-book-btn" title="Drive des livres/PDF">${BOOK_ICON}</button>` : ""}
            <div class="c-text">
              <div class="c-name">${nom}</div>
              <div class="c-credits">${credits} crédit${credits > 1 ? "s" : ""}</div>
            </div>
          </div>
          <div class="ext">${EXT_ICON}</div>
        `;
        card.addEventListener("click", () => openDriveLink(year, sem, idx, nom, false).then(renderCours));
        card.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          const wantsDrive = confirm(`Clic droit sur "${nom}" :\n\nOK → modifier le lien Drive du module\nAnnuler → modifier le lien des livres/PDF`);
          if (wantsDrive) {
            openDriveLink(year, sem, idx, nom, true).then(renderCours);
          } else {
            openBookLink(year, sem, idx, nom, true).then(renderCours);
          }
        });

        const bookBtn = card.querySelector(".c-book-btn");
        if (bookBtn) {
          bookBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            openBookLink(year, sem, idx, nom, false);
          });
          bookBtn.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openBookLink(year, sem, idx, nom, true).then(renderCours);
          });
        }
        col.appendChild(card);
      }

      cols.appendChild(col);
    }

    section.appendChild(cols);
    coursContainerEl.appendChild(section);
  }
}

/* ---------- SETTINGS ---------- */
document.getElementById("resetBtn").addEventListener("click", async () => {
  if (!confirm("Réinitialiser toutes les notes et tous les liens Drive enregistrés ?")) return;
  try {
    const keys = await storageListKeys();
    for (const k of keys) { await storageDelete(k); }
    alert("Données réinitialisées.");
    renderModules();
  } catch(e) {
    alert("Impossible de réinitialiser pour le moment.");
  }
});

/* ---------- JEU — GÉNÉRATEUR DE PROBLÈMES ---------- */
const EXO_META = {
  integrales: { title: "Intégrales", subtitle: "Primitives, IPP, changement de variable — un nouveau problème généré à chaque fois" },
  equadiff: { title: "Équations différentielles", subtitle: "Équations du 1ᵉʳ et du 2ᵉ ordre — un nouveau problème généré à chaque fois" }
};

const SUP_DIGITS = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
function sup(n){ return String(n).split("").map(c => SUP_DIGITS[c] ?? c).join(""); }

function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function randInt(rng, min, max){ return min + Math.floor(rng() * (max - min + 1)); }
function shuffleWithCorrect(choices, correctValue, rng){
  const arr = choices.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return { choices: arr, correct: arr.indexOf(correctValue) };
}

function genIntegralProblem(rng){
  const kind = randInt(rng, 0, 3);

  if (kind === 0) {
    // Règle de puissance : ∫ a·xⁿ dx = k·x^(n+1) + C  (a = k·(n+1))
    const n = randInt(rng, 2, 5);
    const k = randInt(rng, 1, 4);
    const a = k * (n + 1);
    const statement = `∫ ${a}x${sup(n)} dx = ?`;
    const correctValue = `${k}x${sup(n + 1)} + C`;
    const options = [correctValue, `${a}x${sup(n + 1)} + C`, `${k}x${sup(n)} + C`, `${k}x${sup(n + 2)} + C`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  if (kind === 1) {
    // Exponentielle : ∫ a·e^(bx) dx = k·e^(bx) + C  (a = k·b)
    const b = randInt(rng, 2, 5);
    const k = randInt(rng, 1, 4);
    const a = k * b;
    const statement = `∫ ${a}e^(${b}x) dx = ?`;
    const correctValue = `${k}e^(${b}x) + C`;
    const options = [correctValue, `${a}e^(${b}x) + C`, `${k}xe^(${b}x) + C`, `${k}e^(${b + 1}x) + C`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  if (kind === 2) {
    // Cosinus : ∫ a·cos(bx) dx = k·sin(bx) + C  (a = k·b)
    const b = randInt(rng, 2, 5);
    const k = randInt(rng, 1, 4);
    const a = k * b;
    const statement = `∫ ${a}cos(${b}x) dx = ?`;
    const correctValue = `${k}sin(${b}x) + C`;
    const options = [correctValue, `${k}cos(${b}x) + C`, `-${k}sin(${b}x) + C`, `${a}sin(${b}x) + C`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  // Sinus : ∫ a·sin(bx) dx = -k·cos(bx) + C  (a = k·b)
  const b = randInt(rng, 2, 5);
  const k = randInt(rng, 1, 4);
  const a = k * b;
  const statement = `∫ ${a}sin(${b}x) dx = ?`;
  const correctValue = `-${k}cos(${b}x) + C`;
  const options = [correctValue, `${k}cos(${b}x) + C`, `${a}cos(${b}x) + C`, `${k}sin(${b}x) + C`];
  const r = shuffleWithCorrect(options, correctValue, rng);
  return { statement, choices: r.choices, correct: r.correct };
}

function genODEProblem(rng){
  const kind = randInt(rng, 0, 3);

  if (kind === 0) {
    // y' = k y, y(0) = y0  →  y = y0·e^(kx)
    let k = randInt(rng, 1, 5);
    if (rng() < 0.5) k = -k;
    const y0 = randInt(rng, 2, 9);
    const statement = `y' = ${k}y, y(0) = ${y0} → y(x) = ?`;
    const correctValue = `${y0}e^(${k}x)`;
    const options = [correctValue, `${y0}e^(${-k}x)`, `${-y0}e^(${k}x)`, `${y0}e^(${k + 1}x)`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  if (kind === 1) {
    // y' + k y = 0  →  y = C·e^(-kx)
    const k = randInt(rng, 1, 6);
    const statement = `y' + ${k}y = 0 → y(x) = ?`;
    const correctValue = `C·e^(${-k}x)`;
    const options = [correctValue, `C·e^(${k}x)`, `C·e^(${-k}²x)`, `-${k}·C·x`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  if (kind === 2) {
    // x y' = k y (x > 0)  →  y = C·x^k
    const k = randInt(rng, 1, 4);
    const statement = `xy' = ${k}y (x > 0) → y(x) = ?`;
    const correctValue = `C·x${sup(k)}`;
    const options = [correctValue, `C·x${sup(k + 1)}`, `C/x${sup(k)}`, `${k}·C·x`];
    const r = shuffleWithCorrect(options, correctValue, rng);
    return { statement, choices: r.choices, correct: r.correct };
  }

  // y'' + w² y = 0  →  y = A cos(wx) + B sin(wx)
  const w = randInt(rng, 1, 4);
  const statement = `y'' + ${w === 1 ? "" : w + "²"}y = 0 → y(x) = ?`;
  const correctValue = `A·cos(${w}x) + B·sin(${w}x)`;
  const options = [correctValue, `A·e^(${w}x) + B·e^(${-w}x)`, `A·cos(${w}x${sup(2)})`, `A·x + B`];
  const r = shuffleWithCorrect(options, correctValue, rng);
  return { statement, choices: r.choices, correct: r.correct };
}

function generateProblem(subject, rng){
  return subject === "integrales" ? genIntegralProblem(rng) : genODEProblem(rng);
}

let currentSubject = "integrales";

function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function yesterdayKey(){
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function daysSinceEpoch(){
  return Math.floor(Date.now() / 86400000);
}
function todaysExercise(){
  const seed = daysSinceEpoch() * 7919 + (currentSubject === "integrales" ? 13 : 29);
  return generateProblem(currentSubject, mulberry32(seed));
}
function dateKeyOffset(n){
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

const exerciseTitleEl = document.getElementById("exerciseTitle");
const exerciseSubtitleEl = document.getElementById("exerciseSubtitle");
const streakFlameEl = document.getElementById("streakFlame");
const streakCountEl = document.getElementById("streakCount");
const exerciseFieldLabelEl = document.getElementById("exerciseFieldLabel");
const backToDailyBtnEl = document.getElementById("backToDailyBtn");
const exerciseStatementEl = document.getElementById("exerciseStatement");
const exerciseChoicesEl = document.getElementById("exerciseChoices");
const exerciseFeedbackEl = document.getElementById("exerciseFeedback");
const checkAnswerBtnEl = document.getElementById("checkAnswerBtn");
const exerciseWeightNoteEl = document.getElementById("exerciseWeightNote");
const exerciseTimerEl = document.getElementById("exerciseTimer");
const historyStripEl = document.getElementById("historyStrip");

let selectedChoiceIdx = null;
let timerInterval = null;
let timerSeconds = 0;
let practiceExercise = null; // null = mode "exercice du jour" ; sinon = exercice d'entraînement en cours

function updateTimerDisplay(){
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  exerciseTimerEl.textContent = `${m}:${String(s).padStart(2, "0")}`;
}
function startTimer(){
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
  exerciseTimerEl.classList.add("running");
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}
function stopTimer(){
  clearInterval(timerInterval);
  exerciseTimerEl.classList.remove("running");
}

function streakKey(){ return `${currentSubject}-streak`; }

async function loadStreakData(){
  const result = await storageGet(streakKey());
  if (!result || !result.value) return { streak: 0, lastDate: null, history: {} };
  try {
    const data = JSON.parse(result.value);
    if (!data.history) data.history = {};
    return data;
  } catch(e) { return { streak: 0, lastDate: null, history: {} }; }
}
async function saveStreakData(data){
  await storageSet(streakKey(), JSON.stringify(data));
}

function renderHistoryStrip(history){
  historyStripEl.innerHTML = "";
  const dayLetters = ["D","L","M","M","J","V","S"];
  for (let n = 6; n >= 0; n--) {
    const key = dateKeyOffset(n);
    const d = new Date();
    d.setDate(d.getDate() - n);
    const cell = document.createElement("div");
    cell.className = "history-cell";
    if (n === 0) cell.classList.add("today");
    if (history[key]) cell.classList.add("done");
    cell.textContent = 6 - n; // numérotation qui commence à 0 (le plus ancien jour affiché)
    cell.title = `${dayLetters[d.getDay()]} ${d.getDate()}/${d.getMonth()+1}`;
    cell.addEventListener("click", () => showPracticeExercise(cell.title));
    historyStripEl.appendChild(cell);
  }
}

function renderChoiceButtons(ex, locked){
  exerciseChoicesEl.innerHTML = "";
  ex.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    if (locked) {
      btn.disabled = true;
      if (i === ex.correct) btn.classList.add("correct");
    } else {
      btn.addEventListener("click", () => {
        selectedChoiceIdx = i;
        exerciseChoicesEl.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected", "incorrect"));
        btn.classList.add("selected");
        exerciseFeedbackEl.className = "exercise-feedback";
        exerciseFeedbackEl.textContent = "";
      });
    }
    exerciseChoicesEl.appendChild(btn);
  });
}

function showPracticeExercise(label){
  practiceExercise = generateProblem(currentSubject, Math.random);
  selectedChoiceIdx = null;

  exerciseFieldLabelEl.textContent = `Entraînement — ${label}`;
  backToDailyBtnEl.style.display = "inline-block";
  exerciseWeightNoteEl.textContent = "Cet entraînement n'affecte pas ta série.";

  exerciseStatementEl.textContent = practiceExercise.statement;
  renderChoiceButtons(practiceExercise, false);
  exerciseFeedbackEl.className = "exercise-feedback";
  exerciseFeedbackEl.textContent = "";
  checkAnswerBtnEl.style.display = "flex";
  startTimer();

  window.scrollTo({top: 0, behavior: "smooth"});
}

backToDailyBtnEl.addEventListener("click", () => {
  practiceExercise = null;
  renderExercise();
});

async function renderExercise(){
  practiceExercise = null;
  backToDailyBtnEl.style.display = "none";
  exerciseWeightNoteEl.textContent = "Un nouvel exercice apparaît chaque jour à minuit";

  const bankInfo = EXO_META[currentSubject];
  exerciseTitleEl.textContent = bankInfo.title;
  exerciseSubtitleEl.textContent = bankInfo.subtitle;
  exerciseFieldLabelEl.textContent = "Exercice du jour";

  const data = await loadStreakData();
  const done = data.lastDate === todayKey();
  const ex = todaysExercise();
  selectedChoiceIdx = null;

  streakCountEl.textContent = `${data.streak} jour${data.streak > 1 ? "s" : ""}`;
  streakFlameEl.classList.toggle("active", data.streak > 0);
  renderHistoryStrip(data.history);

  exerciseStatementEl.textContent = ex.statement;
  renderChoiceButtons(ex, done);

  if (done) {
    exerciseFeedbackEl.className = "exercise-feedback correct";
    exerciseFeedbackEl.textContent = "✅ Exercice du jour terminé — reviens demain pour continuer ta série !";
    checkAnswerBtnEl.style.display = "none";
    stopTimer();
    updateTimerDisplay();
  } else {
    exerciseFeedbackEl.className = "exercise-feedback";
    exerciseFeedbackEl.textContent = "";
    checkAnswerBtnEl.style.display = "flex";
    startTimer();
  }
}

checkAnswerBtnEl.addEventListener("click", async () => {
  if (selectedChoiceIdx === null) {
    exerciseFeedbackEl.className = "exercise-feedback incorrect";
    exerciseFeedbackEl.textContent = "Choisis une réponse avant de valider.";
    return;
  }

  // ---- MODE ENTRAÎNEMENT (n'affecte pas la série) ----
  if (practiceExercise) {
    const ex = practiceExercise;
    const btns = exerciseChoicesEl.querySelectorAll(".choice-btn");
    if (selectedChoiceIdx === ex.correct) {
      btns[selectedChoiceIdx].classList.add("correct");
      btns.forEach(b => b.disabled = true);
      checkAnswerBtnEl.style.display = "none";
      stopTimer();
      exerciseFeedbackEl.className = "exercise-feedback correct";
      exerciseFeedbackEl.textContent = "✅ Bonne réponse !";
    } else {
      btns[selectedChoiceIdx].classList.add("incorrect");
      exerciseFeedbackEl.className = "exercise-feedback incorrect";
      exerciseFeedbackEl.textContent = "❌ Pas tout à fait — réessaie.";
    }
    return;
  }

  // ---- MODE EXERCICE DU JOUR ----
  const ex = todaysExercise();
  const btns = exerciseChoicesEl.querySelectorAll(".choice-btn");

  if (selectedChoiceIdx === ex.correct) {
    btns[selectedChoiceIdx].classList.add("correct");
    btns.forEach(b => b.disabled = true);
    checkAnswerBtnEl.style.display = "none";
    stopTimer();

    const data = await loadStreakData();
    const newStreak = data.lastDate === yesterdayKey() ? data.streak + 1 : 1;
    const history = data.history || {};
    history[todayKey()] = true;
    await saveStreakData({ streak: newStreak, lastDate: todayKey(), history });

    streakCountEl.textContent = `${newStreak} jour${newStreak > 1 ? "s" : ""}`;
    streakFlameEl.classList.add("active");
    exerciseFeedbackEl.className = "exercise-feedback correct";
    exerciseFeedbackEl.textContent = "✅ Bonne réponse ! Série mise à jour — reviens demain.";
    renderHistoryStrip(history);
  } else {
    btns[selectedChoiceIdx].classList.add("incorrect");
    exerciseFeedbackEl.className = "exercise-feedback incorrect";
    exerciseFeedbackEl.textContent = "❌ Pas tout à fait — réessaie.";
  }
});

renderModules();
showView("home");
