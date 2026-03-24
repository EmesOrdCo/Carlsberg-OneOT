// Site detail panel logic

const LINE_TYPE_LABELS = {
  bib: "BIB Line",
  can: "Can Line",
  cask: "CASK",
  dm: "DM Line",
  keg: "KEG Line",
  nrgb: "NRGB",
  pet: "PET Line",
  repack: "Re-pack",
  rgb: "RGB",
  rgbNrgb: "RGB & NRGB"
};

let panelOpen = false;
let currentSite = null;

function openPanel(site) {
  currentSite = site;
  panelOpen = true;
  const panel = document.getElementById("detail-panel");
  const content = document.getElementById("panel-content");
  content.innerHTML = buildPanelHTML(site);
  panel.classList.add("open");

  content.querySelectorAll(".panel-section-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("collapsed");
    });
  });
}

function closePanel() {
  panelOpen = false;
  currentSite = null;
  document.getElementById("detail-panel").classList.remove("open");
}

function buildPanelHTML(site) {
  const totalLines = Object.values(site.lines).reduce((a, b) => a + b, 0);
  const maxLine = Math.max(...Object.values(site.lines), 1);

  const operationalBadge = site.operational
    ? '<span class="badge badge-operational">Operational</span>'
    : '<span class="badge badge-not-operational">Not Operational</span>';

  const pilotBadge = site.pilot
    ? `<span class="badge badge-pilot">Pilot${site.pilot > 1 ? ` (${site.pilot})` : ""}</span>`
    : "";

  const lineTypesHTML = Object.entries(site.lines)
    .filter(([, count]) => count > 0)
    .map(([key, count]) => {
      const pct = Math.round((count / maxLine) * 100);
      return `
        <div class="line-bar-row">
          <span class="line-bar-label">${LINE_TYPE_LABELS[key]}</span>
          <div class="line-bar-track"><div class="line-bar-fill" style="width:${pct}%"></div></div>
          <span class="line-bar-count">${count}</span>
        </div>`;
    }).join("");

  const noLines = totalLines === 0 ? '<div style="color:var(--text-dim);font-size:0.8rem;">No production lines configured</div>' : '';

  const phaseLabels = ["Phase 0","Phase 1","Phase 2","Phase 3","Phase 4 (TilliT)","Phase 5 (Cap)","Phase 6","Phase 7","Phase 8","Phase 9","Phase 10"];
  const phasesHTML = Object.entries(site.phases)
    .filter(([, v]) => v !== null)
    .map(([key, val]) => `
      <span class="timeline-label">${phaseLabels[key] || `Phase ${key}`}</span>
      <span class="timeline-value">${formatDate(val)}</span>
    `).join("");

  return `
    <div class="panel-header">
      <div class="panel-site-name">${site.name}</div>
      <div class="panel-location">${site.country || "Unknown"} &middot; ${site.cluster || "N/A"}</div>
      <div class="panel-badges">
        <span class="badge badge-region">${site.region}</span>
        <span class="badge badge-cluster">${site.cluster || "N/A"}</span>
        ${operationalBadge}
        ${pilotBadge}
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-header">
        <span>MES Status</span>
        <span class="chevron">&#9662;</span>
      </div>
      <div class="panel-section-body">
        <div class="data-row"><span class="data-label">MES Status</span><span class="data-value">${site.mes || "N/A"}</span></div>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-header">
        <span>Production Lines (${totalLines} total)</span>
        <span class="chevron">&#9662;</span>
      </div>
      <div class="panel-section-body">
        <div class="line-bar-container">${lineTypesHTML}${noLines}</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-header">
        <span>Key Dates</span>
        <span class="chevron">&#9662;</span>
      </div>
      <div class="panel-section-body">
        <div class="data-row"><span class="data-label">TilliT</span><span class="data-value">${formatDate(site.tilliT)}</span></div>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-header">
        <span>Deployment Phases</span>
        <span class="chevron">&#9662;</span>
      </div>
      <div class="panel-section-body">
        <div class="timeline-grid">${phasesHTML}</div>
      </div>
    </div>
  `;
}
