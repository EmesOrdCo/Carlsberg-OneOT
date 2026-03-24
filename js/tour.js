// Guided tour logic

let tourActive = false;
let tourPlaying = false;
let tourIndex = 0;
let tourTimer = null;
let tourSites = [];
const TOUR_INTERVAL = 8000;
const TOUR_ALTITUDE = 0.45;

function startTour() {
  tourSites = GLOBE_SITES.filter(s => s.operational === 1).sort((a, b) => {
    const regionOrder = { "WE": 0, "CEEI": 1, "Asia": 2 };
    const rDiff = (regionOrder[a.region] ?? 9) - (regionOrder[b.region] ?? 9);
    if (rDiff !== 0) return rDiff;
    return a.lng - b.lng;
  });

  if (tourSites.length === 0) return;

  tourActive = true;
  tourPlaying = true;
  tourIndex = 0;

  document.getElementById("tour-bar").classList.remove("hidden");
  document.getElementById("start-tour-btn").classList.add("hidden");
  updateTourIcons(true);

  flyToTourSite();
  scheduleTourAdvance();
}

function stopTour() {
  tourActive = false;
  tourPlaying = false;
  clearTimeout(tourTimer);
  tourTimer = null;

  document.getElementById("tour-bar").classList.add("hidden");
  document.getElementById("start-tour-btn").classList.remove("hidden");
  document.getElementById("tour-progress-fill").style.width = "0%";
  updateTourIcons(false);
}

function pauseTour() {
  if (!tourActive) return;
  tourPlaying = false;
  clearTimeout(tourTimer);
  tourTimer = null;
  updateTourIcons(false);
}

function resumeTour() {
  if (!tourActive) return;
  tourPlaying = true;
  updateTourIcons(true);
  scheduleTourAdvance();
}

function toggleTourPlayPause() {
  if (tourPlaying) {
    pauseTour();
  } else if (tourActive) {
    resumeTour();
  }
}

function tourNext() {
  if (!tourActive || tourSites.length === 0) return;
  clearTimeout(tourTimer);
  tourTimer = null;
  tourIndex = (tourIndex + 1) % tourSites.length;
  flyToTourSite();
  if (tourPlaying) scheduleTourAdvance();
}

function tourPrev() {
  if (!tourActive || tourSites.length === 0) return;
  clearTimeout(tourTimer);
  tourTimer = null;
  tourIndex = (tourIndex - 1 + tourSites.length) % tourSites.length;
  flyToTourSite();
  if (tourPlaying) scheduleTourAdvance();
}

function flyToTourSite() {
  const site = tourSites[tourIndex];
  if (!site || !window._globe) return;

  document.getElementById("tour-label").textContent = `${tourIndex + 1} / ${tourSites.length} — ${site.name}`;
  document.getElementById("tour-progress-fill").style.width = `${((tourIndex + 1) / tourSites.length) * 100}%`;

  window._globe.pointOfView({ lat: site.lat, lng: site.lng, altitude: TOUR_ALTITUDE }, 1800);

  setTimeout(() => openPanel(site), 900);
}

function scheduleTourAdvance() {
  clearTimeout(tourTimer);
  tourTimer = setTimeout(() => {
    tourIndex = (tourIndex + 1) % tourSites.length;
    flyToTourSite();
    if (tourPlaying) scheduleTourAdvance();
  }, TOUR_INTERVAL);
}

function updateTourIcons(playing) {
  const playIcon = document.querySelector("#tour-play .icon-play");
  const pauseIcon = document.querySelector("#tour-play .icon-pause");
  if (playing) {
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  } else {
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  }
}
