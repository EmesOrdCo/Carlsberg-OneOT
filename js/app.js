// Main application — Globe initialization and event wiring

(function () {
  const EARTH_TEXTURE = "https://unpkg.com/three-globe@2.35.1/example/img/earth-night.jpg";
  const BG_TEXTURE = "https://unpkg.com/three-globe@2.35.1/example/img/night-sky.png";

  const container = document.getElementById("globe-container");

  const globe = Globe()
    .globeImageUrl(EARTH_TEXTURE)
    .backgroundImageUrl(BG_TEXTURE)
    .atmosphereColor("#00753A")
    .atmosphereAltitude(0.2)
    .pointOfView({ lat: 30, lng: 20, altitude: 2.5 })
    .pointLat("lat")
    .pointLng("lng")
    .pointAltitude(0.01)
    .pointColor(d => getSiteColor(d))
    .pointLabel(d => `<div class="site-label">${d.name}<br><span style="opacity:0.7;font-size:10px">${d.country || ""} · ${d.mes || ""}</span></div>`)
    .pointsMerge(false)
    .onPointClick(handleSiteClick)
    .enablePointerInteraction(true)(container);

  window._globe = globe;

  let currentAltitude = 2.5;

  function dynamicRadius(d) {
    const base = d.operational ? 0.35 : 0.2;
    const scale = Math.min(Math.max(currentAltitude / 2.5, 0.4), 1.0);
    return base * scale;
  }

  globe.pointRadius(dynamicRadius);

  globe.controls().enableDamping = true;
  globe.controls().dampingFactor = 0.1;
  globe.controls().rotateSpeed = 0.6;
  globe.controls().zoomSpeed = 0.8;
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.3;

  globe.controls().addEventListener("change", () => {
    const pov = globe.pointOfView();
    if (Math.abs(pov.altitude - currentAltitude) > 0.05) {
      currentAltitude = pov.altitude;
      globe.pointRadius(dynamicRadius);
    }
  });

  globe.pointsData(GLOBE_SITES);
  renderLegend();
  updateSiteCounter();

  function handleSiteClick(site) {
    if (!site) return;
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: site.lat, lng: site.lng, altitude: 0.15 }, 1500);
    setTimeout(() => openPanel(site), 600);
  }

  // View toggle buttons
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setView(btn.dataset.view);
      globe.pointColor(globe.pointColor());
    });
  });

  // Panel close
  document.getElementById("panel-close").addEventListener("click", () => {
    closePanel();
  });

  // Tour buttons
  document.getElementById("start-tour-btn").addEventListener("click", () => {
    globe.controls().autoRotate = false;
    startTour();
  });
  document.getElementById("tour-play").addEventListener("click", toggleTourPlayPause);
  document.getElementById("tour-next").addEventListener("click", tourNext);
  document.getElementById("tour-prev").addEventListener("click", tourPrev);
  document.getElementById("tour-stop").addEventListener("click", () => {
    stopTour();
    closePanel();
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (panelOpen) closePanel();
      if (tourActive) stopTour();
    }
    if (e.key === "ArrowRight" && tourActive) tourNext();
    if (e.key === "ArrowLeft" && tourActive) tourPrev();
    if (e.key === " " && tourActive) { e.preventDefault(); toggleTourPlayPause(); }
    if (e.key === "1") selectView("region");
    if (e.key === "2") selectView("mes");
    if (e.key === "3") selectView("year");
    if (e.key === "f" || e.key === "F") toggleFullscreen();
  });

  function selectView(view) {
    document.querySelectorAll(".view-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.view === view);
    });
    setView(view);
    globe.pointColor(globe.pointColor());
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  function updateSiteCounter() {
    const operational = GLOBE_SITES.filter(s => s.operational).length;
    document.getElementById("site-counter").textContent = `${GLOBE_SITES.length} sites · ${operational} operational`;
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    globe.width(window.innerWidth);
    globe.height(window.innerHeight);
  });

  // Loading screen
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
  }, 2200);

  // Stop auto-rotate when user interacts
  container.addEventListener("mousedown", () => {
    globe.controls().autoRotate = false;
  });
  container.addEventListener("touchstart", () => {
    globe.controls().autoRotate = false;
  });
})();
