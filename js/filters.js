// Color-coding views and filtering logic

const VIEW_CONFIGS = {
  region: {
    title: "Region",
    getColor: (site) => {
      const map = {
        "Asia": "#E8A838",
        "CEEI": "#3ABDB5",
        "WE": "#00B050",
        "-": "#444444"
      };
      return map[site.region] || "#444444";
    },
    legend: [
      { label: "Asia", color: "#E8A838" },
      { label: "CEEI", color: "#3ABDB5" },
      { label: "Western Europe", color: "#00B050" },
    ]
  },
  mes: {
    title: "MES Status",
    getColor: (site) => {
      const map = {
        "MES full": "#00B050",
        "MES lite": "#E8A838",
        "No MES": "#888888",
        "Other MES": "#5B9BD5",
        "Lineview": "#9B72CB",
        "LV": "#9B72CB",
      };
      return map[site.mes] || "#444444";
    },
    legend: [
      { label: "MES Full", color: "#00B050" },
      { label: "MES Lite", color: "#E8A838" },
      { label: "No MES", color: "#888888" },
      { label: "Other MES", color: "#5B9BD5" },
      { label: "Lineview / LV", color: "#9B72CB" },
    ]
  },
  year: {
    title: "Deployment Year (TilliT)",
    getColor: (site) => {
      const y = site.tilliT.year;
      if (y >= 2040) return "#333333";
      if (y <= 2025) return "#00B050";
      if (y === 2026) return "#7BC67E";
      if (y === 2027) return "#E8A838";
      if (y === 2028) return "#E07830";
      return "#D04040";
    },
    legend: [
      { label: "2025 or earlier", color: "#00B050" },
      { label: "2026", color: "#7BC67E" },
      { label: "2027", color: "#E8A838" },
      { label: "2028", color: "#E07830" },
      { label: "2029+", color: "#D04040" },
      { label: "TBD", color: "#333333" },
    ]
  }
};

let currentView = "region";

function getSiteColor(site) {
  return VIEW_CONFIGS[currentView].getColor(site);
}

function setView(view) {
  currentView = view;
  renderLegend();
}

function renderLegend() {
  const el = document.getElementById("legend");
  const config = VIEW_CONFIGS[currentView];
  el.innerHTML = `
    <div class="legend-title">${config.title}</div>
    ${config.legend.map(item => `
      <div class="legend-item">
        <span class="legend-dot" style="background:${item.color};color:${item.color}"></span>
        <span>${item.label}</span>
      </div>
    `).join("")}
  `;
}
