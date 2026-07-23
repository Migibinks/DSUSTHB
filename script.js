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
const EXT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`;
const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
const X_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`;
const DEFAULT_DRIVE_LINK = "https://drive.google.com/drive/u/2/shared-with-me";

const DEBTS_TEXT = "Une dette est un module que tu n'as pas validé parce que tu as obtenu une note inférieure à 10/20. Si tu remplis les conditions pour passer en année supérieure, tu peux quand même continuer tes études tout en gardant cette matière en dette. Tu devras repasser l'examen et les interros du module pour avoir une note supérieure à 10 afin de l'effacer.";
const SPECIALITE_TEXT = "Cette spécialité est un master intégré, c'est-à-dire qu'on est déjà spécialisé dès la première année en Science des données, et on a le droit à une Licence aussi à la L3.";

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

/* ---------- NAVIGATION ---------- */
function showView(view){
  currentView = view;
  ["home","notes","cours","apropos","parametres"].forEach(v => {
    document.getElementById(`view-${v}`).classList.toggle("hidden", v !== view);
  });
  document.querySelectorAll(".navitem").forEach(n => n.classList.toggle("active", n.dataset.view === view));
  if (view === "cours") renderCours();
  window.scrollTo({top:0, behavior:"instant"});
}
document.querySelectorAll(".navitem").forEach(n => n.addEventListener("click", () => showView(n.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(el => el.addEventListener("click", () => showView(el.dataset.goto)));

/* ---------- MODALE ---------- */
const modalOverlayEl = document.getElementById("modalOverlay");
const modalTitleEl = document.getElementById("modalTitle");
const modalTextEl = document.getElementById("modalText");

function openModal(title, text){
  modalTitleEl.textContent = title;
  modalTextEl.textContent = text;
  modalOverlayEl.classList.add("show");
}
function closeModal(){
  modalOverlayEl.classList.remove("show");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlayEl.addEventListener("click", e => { if (e.target === modalOverlayEl) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll("[data-modal]").forEach(el => {
  el.addEventListener("click", () => {
    if (el.dataset.modal === "dettes") openModal("Dettes", DEBTS_TEXT);
    if (el.dataset.modal === "specialite") openModal("Spécialité", SPECIALITE_TEXT);
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
      <td>
        <div class="mod-name">${MODULE_ICON}${nom}</div>
        <div class="mod-credits">${credits} crédit${credits > 1 ? "s" : ""}</div>
      </td>
      <td class="num">${credits}</td>
      <td class="num"><input type="number" class="grade" data-idx="${idx}" data-type="td" min="0" max="20" step="0.25" placeholder="/20"></td>
      <td class="num"><input type="number" class="grade" data-idx="${idx}" data-type="exam" min="0" max="20" step="0.25" placeholder="/20"></td>
      <td class="moy" id="moy-${idx}">—</td>
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
  ringProgressEl.setAttribute("stroke-dasharray", RING_CIRC);
  ringProgressEl.setAttribute("stroke-dashoffset", RING_CIRC);
  ringValueEl.innerHTML = `—<span>/20</span>`;
  statusPillEl.className = "status-pill pending";
  statusTextEl.textContent = "À compléter";
  creditsValidesEl.textContent = "— / —";
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

  ringProgressEl.setAttribute("stroke-dasharray", RING_CIRC);
  ringProgressEl.setAttribute("stroke-dashoffset", RING_CIRC * (1 - pct));
  ringValueEl.innerHTML = `${moyenne.toFixed(2)}<span>/20</span>`;

  statusPillEl.className = "status-pill " + (passed ? "pass" : "fail");
  statusTextEl.textContent = passed ? "Semestre validé" : "Semestre non validé";

  creditsValidesEl.textContent = `${creditsValides} / ${totalCreditsSemestre}`;
});

/* ---------- COURS VIEW ---------- */
function moduleDefaultLink(year, moduleName){
  // Seul le drive donné pour L1 est connu : on pointe directement vers le titre du module dans ce drive.
  if (year === "L1") {
    return `https://drive.google.com/drive/search?q=${encodeURIComponent(moduleName)}`;
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

function renderCours(){
  coursContainerEl.innerHTML = "";
  Object.keys(DATA).forEach(year => {
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

    ["S1", "S2"].forEach((sem, colIdx) => {
      const col = document.createElement("div");
      col.className = "sem-col " + (colIdx === 0 ? "left" : "right");
      col.innerHTML = `<h5>Semestre ${colIdx + 1}</h5>`;

      DATA[year][sem].forEach((mod, idx) => {
        const [nom, credits] = mod;
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
          <div class="left-part">
            <div class="c-icon">${DRIVE_ICON}</div>
            <div class="c-text">
              <div class="c-name">${nom}</div>
              <div class="c-credits">${credits} crédit${credits > 1 ? "s" : ""}</div>
            </div>
          </div>
          <div class="ext">${EXT_ICON}</div>
        `;
        card.addEventListener("click", () => openDriveLink(year, sem, idx, nom, false));
        card.addEventListener("contextmenu", (e) => { e.preventDefault(); openDriveLink(year, sem, idx, nom, true); });
        col.appendChild(card);
      });

      cols.appendChild(col);
    });

    section.appendChild(cols);
    coursContainerEl.appendChild(section);
  });
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

renderModules();
showView("home");
