// OneOT Core Data — converted from OneOT Core Data.xlsx
// Coordinates geocoded from site name + country

const SITES = [
  {
    id: 1, name: "Aksu", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 41.1231, lng: 80.2644,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 7 }, cap: { year: 2028, month: 7 }, pilot: 0,
    phases: { 0: {y:2028,m:7}, 1: {y:2029,m:7}, 2: {y:2029,m:7}, 3: {y:2029,m:7}, 4: {y:2028,m:7}, 5: {y:2028,m:7}, 6: {y:2027,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 2, name: "Alivaria", region: "CEEI", cluster: "KUBA", country: "Belarus",
    lat: 53.9006, lng: 27.5590,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2027, month: 2 }, cap: { year: 2027, month: 2 }, pilot: 0,
    phases: { 0: {y:2025,m:12}, 1: {y:2027,m:12}, 2: {y:2027,m:12}, 3: {y:2027,m:12}, 4: {y:2027,m:2}, 5: {y:2027,m:2}, 6: {y:2027,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 3, name: "Almaty", region: "CEEI", cluster: "KUBA", country: "Kazakhstan",
    lat: 43.2220, lng: 76.8512,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 3, cask: 0, dm: 0, keg: 3, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 7, linesCost: 7, linesBenefit: 4,
    tilliT: { year: 2026, month: 10 }, cap: { year: 2026, month: 10 }, pilot: 0,
    phases: { 0: {y:2026,m:6}, 1: {y:2026,m:6}, 2: {y:2026,m:6}, 3: {y:2026,m:6}, 4: {y:2026,m:10}, 5: {y:2026,m:10}, 6: {y:2026,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 4, name: "Alwar", region: "CEEI", cluster: "I&N", country: "India",
    lat: 27.5530, lng: 76.6346,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 4 }, cap: { year: 2028, month: 4 }, pilot: 0,
    phases: { 0: {y:2028,m:1}, 1: {y:2029,m:1}, 2: {y:2029,m:1}, 3: {y:2029,m:1}, 4: {y:2028,m:4}, 5: {y:2028,m:4}, 6: {y:2028,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 5, name: "Aurangabad", region: "CEEI", cluster: "I&N", country: "India",
    lat: 19.8762, lng: 75.3433,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2028, month: 3 }, cap: { year: 2028, month: 3 }, pilot: 0,
    phases: { 0: {y:2028,m:2}, 1: {y:2029,m:2}, 2: {y:2029,m:2}, 3: {y:2029,m:2}, 4: {y:2028,m:3}, 5: {y:2028,m:3}, 6: {y:2028,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 6, name: "Bago", region: "Asia", cluster: "SEA", country: "Myanmar",
    lat: 17.3355, lng: 96.4814,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2028, month: 12 }, cap: { year: 2028, month: 12 }, pilot: 0,
    phases: { 0: {y:2029,m:6}, 1: {y:2030,m:12}, 2: {y:2030,m:12}, 3: {y:2030,m:12}, 4: {y:2028,m:12}, 5: {y:2028,m:12}, 6: {y:2029,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 7, name: "Baku", region: "CEEI", cluster: "KUBA", country: "Azerbaijan",
    lat: 40.4093, lng: 49.8671,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2028, month: 1 }, cap: { year: 2028, month: 1 }, pilot: 0,
    phases: { 0: {y:2027,m:9}, 1: {y:2028,m:9}, 2: {y:2028,m:9}, 3: {y:2028,m:9}, 4: {y:2028,m:1}, 5: {y:2028,m:1}, 6: {y:2028,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 8, name: "Banks's", region: "WE", cluster: "Cntrl Europe", country: "United Kingdom",
    lat: 52.5863, lng: -2.1275,
    mes: "No MES", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 9, name: "Boke", region: "Asia", cluster: "CBC", country: "China",
    lat: 26.2263, lng: 105.7700,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 10 }, cap: { year: 2028, month: 10 }, pilot: 0,
    phases: { 0: {y:2029,m:3}, 1: {y:2030,m:9}, 2: {y:2030,m:9}, 3: {y:2030,m:9}, 4: {y:2028,m:10}, 5: {y:2028,m:10}, 6: {y:2028,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 10, name: "Blagoevgrad", region: "CEEI", cluster: "SEB", country: "Bulgaria",
    lat: 42.0116, lng: 23.0943,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2028, month: 1 }, cap: { year: 2028, month: 1 }, pilot: 0,
    phases: { 0: {y:2026,m:11}, 1: {y:2026,m:11}, 2: {y:2026,m:11}, 3: {y:2027,m:11}, 4: {y:2028,m:1}, 5: {y:2028,m:1}, 6: {y:2028,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 11, name: "Brzesko", region: "WE", cluster: "Cntrl Europe", country: "Poland",
    lat: 49.9687, lng: 20.6081,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 5, linesCost: 5, linesBenefit: 4,
    tilliT: { year: 2025, month: 3 }, cap: { year: 2025, month: 3 }, pilot: 1,
    phases: { 0: {y:2025,m:3}, 1: {y:2025,m:3}, 2: {y:2025,m:3}, 3: {y:2025,m:3}, 4: {y:2025,m:3}, 5: {y:2025,m:3}, 6: {y:2025,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 12, name: "Celarevo", region: "CEEI", cluster: "SEB", country: "Serbia",
    lat: 45.3753, lng: 19.5914,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 1, keg: 1, nrgb: 1, pet: 1, repack: 0, rgb: 1, rgbNrgb: 0 },
    linesNew: 6, linesCost: 6, linesBenefit: 4,
    tilliT: { year: 2027, month: 2 }, cap: { year: 2027, month: 2 }, pilot: 0,
    phases: { 0: {y:2027,m:4}, 1: {y:2028,m:4}, 2: {y:2028,m:4}, 3: {y:2028,m:4}, 4: {y:2027,m:2}, 5: {y:2027,m:2}, 6: {y:2027,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 13, name: "Dharuhera", region: "CEEI", cluster: "I&N", country: "India",
    lat: 28.2052, lng: 76.7968,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 4 }, cap: { year: 2028, month: 4 }, pilot: 0,
    phases: { 0: {y:2028,m:1}, 1: {y:2029,m:1}, 2: {y:2029,m:1}, 3: {y:2029,m:1}, 4: {y:2028,m:4}, 5: {y:2028,m:4}, 6: {y:2028,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 14, name: "Dali", region: "Asia", cluster: "YN", country: "China",
    lat: 25.6065, lng: 100.2676,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 4, linesCost: 4, linesBenefit: 4,
    tilliT: { year: 2027, month: 5 }, cap: { year: 2027, month: 5 }, pilot: 2,
    phases: { 0: {y:2026,m:10}, 1: {y:2028,m:5}, 2: {y:2028,m:5}, 3: {y:2028,m:5}, 4: {y:2027,m:5}, 5: {y:2027,m:5}, 6: {y:2027,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 15, name: "Dazhulin", region: "Asia", cluster: "CBC", country: "China",
    lat: 29.7103, lng: 106.0713,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 4, linesCost: 4, linesBenefit: 4,
    tilliT: { year: 2027, month: 7 }, cap: { year: 2027, month: 7 }, pilot: 0,
    phases: { 0: {y:2027,m:5}, 1: {y:2029,m:9}, 2: {y:2029,m:9}, 3: {y:2029,m:9}, 4: {y:2027,m:7}, 5: {y:2027,m:7}, 6: {y:2027,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 16, name: "Falkenberg", region: "WE", cluster: "Nordics", country: "Sweden",
    lat: 56.9054, lng: 12.4914,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 1, can: 1, cask: 0, dm: 1, keg: 0, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 7, linesCost: 7, linesBenefit: 5,
    tilliT: { year: 2027, month: 12 }, cap: { year: 2027, month: 12 }, pilot: 0,
    phases: { 0: {y:2026,m:9}, 1: {y:2027,m:9}, 2: {y:2027,m:9}, 3: {y:2026,m:5}, 4: {y:2026,m:9}, 5: {y:2027,m:12}, 6: {y:2028,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 17, name: "Farris", region: "WE", cluster: "Nordics", country: "Norway",
    lat: 59.0472, lng: 10.0256,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2027, month: 10 }, cap: { year: 2027, month: 10 }, pilot: 0,
    phases: { 0: {y:2026,m:3}, 1: {y:2027,m:3}, 2: {y:2027,m:3}, 3: {y:2027,m:3}, 4: {y:2027,m:10}, 5: {y:2027,m:10}, 6: {y:2029,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 18, name: "Fuling", region: "Asia", cluster: "CBC", country: "China",
    lat: 29.7030, lng: 107.3940,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 11 }, cap: { year: 2028, month: 11 }, pilot: 0,
    phases: { 0: {y:2029,m:5}, 1: {y:2030,m:11}, 2: {y:2030,m:11}, 3: {y:2030,m:11}, 4: {y:2028,m:11}, 5: {y:2028,m:11}, 6: {y:2028,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 19, name: "Fredericia", region: "WE", cluster: "Nordics", country: "Denmark",
    lat: 55.5658, lng: 9.7527,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 1, can: 3, cask: 0, dm: 1, keg: 1, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 11, linesCost: 11, linesBenefit: 8,
    tilliT: { year: 2027, month: 8 }, cap: { year: 2027, month: 8 }, pilot: 0,
    phases: { 0: {y:2026,m:4}, 1: {y:2027,m:4}, 2: {y:2027,m:4}, 3: {y:2027,m:4}, 4: {y:2026,m:11}, 5: {y:2027,m:8}, 6: {y:2028,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 20, name: "Foshan", region: "Asia", cluster: "CIB", country: "China",
    lat: 23.0215, lng: 113.1214,
    mes: "Other MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 1, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2027, month: 5 }, cap: { year: 2027, month: 5 }, pilot: 0,
    phases: { 0: {y:2028,m:9}, 1: {y:2030,m:3}, 2: {y:2030,m:3}, 3: {y:2030,m:3}, 4: {y:2027,m:5}, 5: {y:2027,m:5}, 6: {y:2027,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 21, name: "Ringnes", region: "WE", cluster: "Nordics", country: "Norway",
    lat: 59.9247, lng: 10.7686,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 1, keg: 0, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 5, linesCost: 5, linesBenefit: 4,
    tilliT: { year: 2027, month: 10 }, cap: { year: 2027, month: 10 }, pilot: 0,
    phases: { 0: {y:2026,m:3}, 1: {y:2027,m:3}, 2: {y:2027,m:3}, 3: {y:2027,m:3}, 4: {y:2027,m:10}, 5: {y:2027,m:10}, 6: {y:2029,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 22, name: "Gorkha", region: "CEEI", cluster: "I&N", country: "Nepal",
    lat: 28.3818, lng: 84.6297,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2028, month: 4 }, cap: { year: 2028, month: 4 }, pilot: 0,
    phases: { 0: {y:2028,m:3}, 1: {y:2029,m:3}, 2: {y:2029,m:3}, 3: {y:2029,m:3}, 4: {y:2028,m:4}, 5: {y:2028,m:4}, 6: {y:2028,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 23, name: "Hamburg", region: "WE", cluster: "Cntrl Europe", country: "Germany",
    lat: 53.5511, lng: 9.9937,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 1, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 1,
    tilliT: { year: 2027, month: 9 }, cap: { year: 2027, month: 9 }, pilot: 0,
    phases: { 0: {y:2026,m:2}, 1: {y:2027,m:2}, 2: {y:2027,m:2}, 3: {y:2027,m:2}, 4: {y:2027,m:9}, 5: {y:2027,m:9}, 6: {y:2029,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 24, name: "Hechuan", region: "Asia", cluster: "CBC", country: "China",
    lat: 29.9920, lng: 106.2769,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2027, month: 7 }, cap: { year: 2027, month: 7 }, pilot: 0,
    phases: { 0: {y:2027,m:6}, 1: {y:2029,m:10}, 2: {y:2029,m:10}, 3: {y:2029,m:10}, 4: {y:2027,m:7}, 5: {y:2027,m:7}, 6: {y:2027,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 25, name: "Hue", region: "Asia", cluster: "SEA", country: "Vietnam",
    lat: 16.4637, lng: 107.5909,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 2, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 6, linesCost: 6, linesBenefit: 4,
    tilliT: { year: 2027, month: 4 }, cap: { year: 2027, month: 4 }, pilot: 0,
    phases: { 0: {y:2026,m:7}, 1: {y:2028,m:6}, 2: {y:2028,m:6}, 3: {y:2026,m:9}, 4: {y:2027,m:4}, 5: {y:2027,m:4}, 6: {y:2027,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 26, name: "Hyderabad", region: "CEEI", cluster: "I&N", country: "India",
    lat: 17.3850, lng: 78.4867,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2028, month: 5 }, cap: { year: 2028, month: 5 }, pilot: 0,
    phases: { 0: {y:2028,m:2}, 1: {y:2029,m:2}, 2: {y:2029,m:2}, 3: {y:2029,m:2}, 4: {y:2028,m:5}, 5: {y:2028,m:5}, 6: {y:2028,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 27, name: "Huizhou", region: "Asia", cluster: "CIB", country: "China",
    lat: 23.1115, lng: 114.4161,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2028, month: 8 }, cap: { year: 2028, month: 8 }, pilot: 0,
    phases: { 0: {y:2028,m:10}, 1: {y:2030,m:4}, 2: {y:2030,m:4}, 3: {y:2030,m:4}, 4: {y:2028,m:8}, 5: {y:2028,m:8}, 6: {y:2027,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 28, name: "Imsdal", region: "WE", cluster: "Nordics", country: "Norway",
    lat: 60.7945, lng: 10.6916,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2027, month: 10 }, cap: { year: 2027, month: 10 }, pilot: 0,
    phases: { 0: {y:2026,m:3}, 1: {y:2027,m:3}, 2: {y:2027,m:3}, 3: {y:2027,m:3}, 4: {y:2027,m:10}, 5: {y:2027,m:10}, 6: {y:2029,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 29, name: "Korla", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 41.7259, lng: 86.1746,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2028, month: 6 }, cap: { year: 2028, month: 6 }, pilot: 0,
    phases: { 0: {y:2028,m:6}, 1: {y:2029,m:6}, 2: {y:2029,m:6}, 3: {y:2029,m:6}, 4: {y:2028,m:6}, 5: {y:2028,m:6}, 6: {y:2027,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 30, name: "Kerava", region: "WE", cluster: "Nordics", country: "Finland",
    lat: 60.4033, lng: 25.1053,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 1, can: 2, cask: 0, dm: 1, keg: 1, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 8, linesCost: 8, linesBenefit: 5,
    tilliT: { year: 2027, month: 8 }, cap: { year: 2027, month: 8 }, pilot: 0,
    phases: { 0: {y:2026,m:4}, 1: {y:2027,m:4}, 2: {y:2027,m:4}, 3: {y:2027,m:4}, 4: {y:2026,m:11}, 5: {y:2027,m:8}, 6: {y:2028,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 31, name: "Kunming", region: "Asia", cluster: "YN", country: "China",
    lat: 25.0389, lng: 102.7183,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2027, month: 5 }, cap: { year: 2027, month: 5 }, pilot: 0,
    phases: { 0: {y:2026,m:12}, 1: {y:2028,m:7}, 2: {y:2028,m:7}, 3: {y:2028,m:7}, 4: {y:2027,m:5}, 5: {y:2027,m:5}, 6: {y:2027,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 32, name: "Kolkatta", region: "CEEI", cluster: "I&N", country: "India",
    lat: 22.5726, lng: 88.3639,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 3 }, cap: { year: 2028, month: 3 }, pilot: 0,
    phases: { 0: {y:2028,m:4}, 1: {y:2029,m:4}, 2: {y:2029,m:4}, 3: {y:2029,m:4}, 4: {y:2028,m:3}, 5: {y:2028,m:3}, 6: {y:2028,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 33, name: "Koprivnica", region: "CEEI", cluster: "SEB", country: "Croatia",
    lat: 46.1627, lng: 16.8274,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2027, month: 2 }, cap: { year: 2027, month: 2 }, pilot: 0,
    phases: { 0: {y:2027,m:9}, 1: {y:2028,m:9}, 2: {y:2028,m:9}, 3: {y:2028,m:9}, 4: {y:2027,m:2}, 5: {y:2027,m:2}, 6: {y:2027,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 34, name: "Kyiv", region: "CEEI", cluster: "KUBA", country: "Ukraine",
    lat: 50.4501, lng: 30.5234,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 6, linesCost: 6, linesBenefit: 5,
    tilliT: { year: 2027, month: 1 }, cap: { year: 2027, month: 1 }, pilot: 0,
    phases: { 0: {y:2027,m:1}, 1: {y:2028,m:1}, 2: {y:2028,m:1}, 3: {y:2026,m:1}, 4: {y:2027,m:1}, 5: {y:2027,m:1}, 6: {y:2027,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 35, name: "Liangping", region: "Asia", cluster: "CBC", country: "China",
    lat: 30.6782, lng: 107.8028,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 10 }, cap: { year: 2028, month: 10 }, pilot: 0,
    phases: { 0: {y:2029,m:4}, 1: {y:2030,m:10}, 2: {y:2030,m:10}, 3: {y:2030,m:10}, 4: {y:2028,m:10}, 5: {y:2028,m:10}, 6: {y:2028,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 36, name: "Lübz", region: "WE", cluster: "Cntrl Europe", country: "Germany",
    lat: 53.4597, lng: 12.0288,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2027, month: 9 }, cap: { year: 2027, month: 9 }, pilot: 0,
    phases: { 0: {y:2026,m:2}, 1: {y:2027,m:2}, 2: {y:2027,m:2}, 3: {y:2027,m:2}, 4: {y:2027,m:9}, 5: {y:2027,m:9}, 6: {y:2029,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 37, name: "Lviv", region: "CEEI", cluster: "KUBA", country: "Ukraine",
    lat: 49.8397, lng: 24.0297,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2027, month: 1 }, cap: { year: 2027, month: 1 }, pilot: 0,
    phases: { 0: {y:2027,m:1}, 1: {y:2028,m:1}, 2: {y:2028,m:1}, 3: {y:2026,m:1}, 4: {y:2027,m:1}, 5: {y:2027,m:1}, 6: {y:2027,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 38, name: "Lixian", region: "Asia", cluster: "CBC", country: "China",
    lat: 29.6335, lng: 111.7675,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2028, month: 9 }, cap: { year: 2028, month: 9 }, pilot: 0,
    phases: { 0: {y:2028,m:11}, 1: {y:2030,m:5}, 2: {y:2030,m:5}, 3: {y:2030,m:5}, 4: {y:2028,m:9}, 5: {y:2028,m:9}, 6: {y:2028,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 39, name: "Marston's", region: "WE", cluster: "Cntrl Europe", country: "United Kingdom",
    lat: 52.7474, lng: -1.6313,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 1, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2025, month: 10 }, cap: { year: 2025, month: 10 }, pilot: 0,
    phases: { 0: {y:2025,m:10}, 1: {y:2027,m:10}, 2: {y:2025,m:10}, 3: {y:2025,m:10}, 4: {y:2025,m:10}, 5: {y:2025,m:10}, 6: {y:2025,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 40, name: "MaWangXiang", region: "Asia", cluster: "CBC", country: "China",
    lat: 28.2000, lng: 112.9500,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2027, month: 7 }, cap: { year: 2027, month: 7 }, pilot: 0,
    phases: { 0: {y:2027,m:5}, 1: {y:2029,m:9}, 2: {y:2029,m:9}, 3: {y:2029,m:9}, 4: {y:2027,m:7}, 5: {y:2027,m:7}, 6: {y:2027,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 41, name: "Mysuru", region: "CEEI", cluster: "I&N", country: "India",
    lat: 12.2958, lng: 76.6394,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2026, month: 10 }, cap: { year: 2026, month: 10 }, pilot: 0,
    phases: { 0: {y:2028,m:5}, 1: {y:2029,m:5}, 2: {y:2029,m:5}, 3: {y:2029,m:5}, 4: {y:2026,m:10}, 5: {y:2026,m:10}, 6: {y:2026,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 42, name: "Northampton", region: "WE", cluster: "Cntrl Europe", country: "United Kingdom",
    lat: 52.2405, lng: -0.9027,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2025, month: 10 }, cap: { year: 2025, month: 10 }, pilot: 0,
    phases: { 0: {y:2025,m:10}, 1: {y:2027,m:10}, 2: {y:2025,m:10}, 3: {y:2025,m:10}, 4: {y:2025,m:10}, 5: {y:2025,m:10}, 6: {y:2025,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 43, name: "Yinchuan", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 38.4872, lng: 106.2309,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 4, linesCost: 4, linesBenefit: 4,
    tilliT: { year: 2028, month: 6 }, cap: { year: 2028, month: 6 }, pilot: 0,
    phases: { 0: {y:2028,m:6}, 1: {y:2029,m:6}, 2: {y:2029,m:6}, 3: {y:2029,m:6}, 4: {y:2028,m:6}, 5: {y:2028,m:6}, 6: {y:2027,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 44, name: "Obernai", region: "WE", cluster: "Cntrl Europe", country: "France",
    lat: 48.4616, lng: 7.4827,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 1, pet: 0, repack: 0, rgb: 0, rgbNrgb: 7 },
    linesNew: 11, linesCost: 11, linesBenefit: 10,
    tilliT: { year: 2027, month: 12 }, cap: { year: 2027, month: 12 }, pilot: 0,
    phases: { 0: {y:2026,m:10}, 1: {y:2027,m:10}, 2: {y:2027,m:10}, 3: {y:2027,m:10}, 4: {y:2027,m:12}, 5: {y:2027,m:12}, 6: {y:2029,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 45, name: "Pakse", region: "Asia", cluster: "SEA", country: "Laos",
    lat: 15.1200, lng: 105.7998,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 4, linesCost: 4, linesBenefit: 4,
    tilliT: { year: 2027, month: 4 }, cap: { year: 2027, month: 4 }, pilot: 0,
    phases: { 0: {y:2026,m:7}, 1: {y:2028,m:6}, 2: {y:2028,m:6}, 3: {y:2026,m:9}, 4: {y:2027,m:4}, 5: {y:2027,m:4}, 6: {y:2027,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 46, name: "Paonta Sahib", region: "CEEI", cluster: "I&N", country: "India",
    lat: 30.4369, lng: 77.6243,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2028, month: 5 }, cap: { year: 2028, month: 5 }, pilot: 0,
    phases: { 0: {y:2028,m:3}, 1: {y:2029,m:3}, 2: {y:2029,m:3}, 3: {y:2029,m:3}, 4: {y:2028,m:5}, 5: {y:2028,m:5}, 6: {y:2028,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 47, name: "Pepsi", region: "Asia", cluster: "SEA", country: "Laos",
    lat: 17.9757, lng: 102.6331,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2028, month: 12 }, cap: { year: 2028, month: 12 }, pilot: 0,
    phases: { 0: {y:2029,m:6}, 1: {y:2030,m:12}, 2: {y:2030,m:12}, 3: {y:2030,m:12}, 4: {y:2028,m:12}, 5: {y:2028,m:12}, 6: {y:2029,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 48, name: "Panzhihua", region: "Asia", cluster: "CBC", country: "China",
    lat: 26.5818, lng: 101.7187,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 9 }, cap: { year: 2028, month: 9 }, pilot: 0,
    phases: { 0: {y:2028,m:11}, 1: {y:2030,m:5}, 2: {y:2030,m:5}, 3: {y:2030,m:5}, 4: {y:2028,m:9}, 5: {y:2028,m:9}, 6: {y:2028,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 49, name: "Ramlösa", region: "WE", cluster: "Nordics", country: "Sweden",
    lat: 56.0466, lng: 12.7015,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2027, month: 12 }, cap: { year: 2027, month: 12 }, pilot: 0,
    phases: { 0: {y:2026,m:9}, 1: {y:2027,m:9}, 2: {y:2027,m:9}, 3: {y:2026,m:5}, 4: {y:2026,m:9}, 5: {y:2027,m:12}, 6: {y:2028,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 50, name: "Rhäzüns", region: "WE", cluster: "Cntrl Europe", country: "Switzerland",
    lat: 46.7985, lng: 9.3983,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2027, month: 11 }, cap: { year: 2027, month: 11 }, pilot: 0,
    phases: { 0: {y:2026,m:1}, 1: {y:2027,m:1}, 2: {y:2027,m:1}, 3: {y:2027,m:1}, 4: {y:2027,m:11}, 5: {y:2027,m:11}, 6: {y:2029,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 51, name: "Rheinfelden", region: "WE", cluster: "Cntrl Europe", country: "Switzerland",
    lat: 47.5540, lng: 7.7936,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2027, month: 11 }, cap: { year: 2027, month: 11 }, pilot: 0,
    phases: { 0: {y:2026,m:1}, 1: {y:2027,m:1}, 2: {y:2027,m:1}, 3: {y:2027,m:1}, 4: {y:2027,m:11}, 5: {y:2027,m:11}, 6: {y:2029,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 52, name: "Ritsona", region: "CEEI", cluster: "SEB", country: "Greece",
    lat: 38.4254, lng: 23.5425,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2027, month: 3 }, cap: { year: 2027, month: 3 }, pilot: 0,
    phases: { 0: {y:2027,m:3}, 1: {y:2028,m:3}, 2: {y:2028,m:3}, 3: {y:2028,m:3}, 4: {y:2027,m:3}, 5: {y:2027,m:3}, 6: {y:2027,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 53, name: "Saku", region: "CEEI", cluster: "SEB", country: "Estonia",
    lat: 59.2989, lng: 24.6652,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2028, month: 2 }, cap: { year: 2028, month: 2 }, pilot: 0,
    phases: { 0: {y:2027,m:11}, 1: {y:2028,m:11}, 2: {y:2028,m:11}, 3: {y:2028,m:11}, 4: {y:2028,m:2}, 5: {y:2028,m:2}, 6: {y:2028,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 54, name: "Saltum", region: "WE", cluster: "Nordics", country: "Denmark",
    lat: 57.2653, lng: 9.7089,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2027, month: 8 }, cap: { year: 2027, month: 8 }, pilot: 0,
    phases: { 0: {y:2026,m:4}, 1: {y:2027,m:4}, 2: {y:2027,m:4}, 3: {y:2027,m:4}, 4: {y:2026,m:11}, 5: {y:2027,m:8}, 6: {y:2028,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 55, name: "Shah Alam", region: "Asia", cluster: "SEA", country: "Malaysia",
    lat: 3.0733, lng: 101.5185,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2028, month: 12 }, cap: { year: 2028, month: 12 }, pilot: 0,
    phases: { 0: {y:2027,m:2}, 1: {y:2028,m:2}, 2: {y:2028,m:2}, 3: {y:2028,m:2}, 4: {y:2028,m:12}, 5: {y:2028,m:12}, 6: {y:2029,m:5}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 56, name: "Shumensko", region: "CEEI", cluster: "SEB", country: "Bulgaria",
    lat: 43.2712, lng: 26.9290,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2028, month: 1 }, cap: { year: 2028, month: 1 }, pilot: 0,
    phases: { 0: {y:2026,m:11}, 1: {y:2026,m:11}, 2: {y:2026,m:11}, 3: {y:2027,m:11}, 4: {y:2028,m:1}, 5: {y:2028,m:1}, 6: {y:2028,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 57, name: "Sierpc", region: "WE", cluster: "Cntrl Europe", country: "Poland",
    lat: 52.8582, lng: 19.6726,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2025, month: 11 }, cap: { year: 2025, month: 11 }, pilot: 0,
    phases: { 0: {y:2025,m:11}, 1: {y:2027,m:11}, 2: {y:2025,m:11}, 3: {y:2025,m:11}, 4: {y:2025,m:11}, 5: {y:2025,m:11}, 6: {y:2025,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 58, name: "Sihanouk Ville", region: "Asia", cluster: "SEA", country: "Cambodia",
    lat: 10.6093, lng: 103.5228,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 6, linesCost: 6, linesBenefit: 5,
    tilliT: { year: 2027, month: 4 }, cap: { year: 2027, month: 4 }, pilot: 3,
    phases: { 0: {y:2026,m:7}, 1: {y:2028,m:6}, 2: {y:2028,m:6}, 3: {y:2026,m:9}, 4: {y:2027,m:4}, 5: {y:2027,m:4}, 6: {y:2027,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 59, name: "Shizhu", region: "Asia", cluster: "CBC", country: "China",
    lat: 30.0146, lng: 108.2901,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 11 }, cap: { year: 2028, month: 11 }, pilot: 0,
    phases: { 0: {y:2029,m:5}, 1: {y:2030,m:11}, 2: {y:2030,m:11}, 3: {y:2030,m:11}, 4: {y:2028,m:11}, 5: {y:2028,m:11}, 6: {y:2028,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 60, name: "Szczecin", region: "WE", cluster: "Cntrl Europe", country: "Poland",
    lat: 53.4285, lng: 14.5528,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2025, month: 11 }, cap: { year: 2025, month: 11 }, pilot: 0,
    phases: { 0: {y:2025,m:11}, 1: {y:2027,m:11}, 2: {y:2025,m:11}, 3: {y:2025,m:11}, 4: {y:2025,m:11}, 5: {y:2025,m:11}, 6: {y:2025,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 61, name: "Tian Dao", region: "Asia", cluster: "CIB", country: "China",
    lat: 32.6853, lng: 119.1557,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 1, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 3 },
    linesNew: 5, linesCost: 5, linesBenefit: 3,
    tilliT: { year: 2027, month: 6 }, cap: { year: 2027, month: 6 }, pilot: 0,
    phases: { 0: {y:2027,m:7}, 1: {y:2029,m:11}, 2: {y:2029,m:11}, 3: {y:2029,m:11}, 4: {y:2027,m:6}, 5: {y:2027,m:6}, 6: {y:2027,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 62, name: "Thessaloniki", region: "CEEI", cluster: "SEB", country: "Greece",
    lat: 40.6401, lng: 22.9444,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 1, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 2,
    tilliT: { year: 2027, month: 3 }, cap: { year: 2027, month: 3 }, pilot: 0,
    phases: { 0: {y:2027,m:3}, 1: {y:2028,m:3}, 2: {y:2028,m:3}, 3: {y:2028,m:3}, 4: {y:2027,m:3}, 5: {y:2027,m:3}, 6: {y:2027,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 63, name: "Tianmuhu", region: "Asia", cluster: "CIB", country: "China",
    lat: 31.2504, lng: 119.4448,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2027, month: 6 }, cap: { year: 2027, month: 6 }, pilot: 0,
    phases: { 0: {y:2027,m:7}, 1: {y:2029,m:11}, 2: {y:2029,m:11}, 3: {y:2029,m:11}, 4: {y:2027,m:6}, 5: {y:2027,m:6}, 6: {y:2027,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 64, name: "Utena", region: "CEEI", cluster: "SEB", country: "Lithuania",
    lat: 55.4980, lng: 25.5997,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 1, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2028, month: 2 }, cap: { year: 2028, month: 2 }, pilot: 0,
    phases: { 0: {y:2027,m:11}, 1: {y:2028,m:11}, 2: {y:2028,m:11}, 3: {y:2028,m:11}, 4: {y:2028,m:2}, 5: {y:2028,m:2}, 6: {y:2028,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 65, name: "Varese", region: "CEEI", cluster: "SEB", country: "Italy",
    lat: 45.8206, lng: 8.8257,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 2, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 5, linesCost: 5, linesBenefit: 2,
    tilliT: { year: 2027, month: 3 }, cap: { year: 2027, month: 3 }, pilot: 0,
    phases: { 0: {y:2027,m:4}, 1: {y:2028,m:4}, 2: {y:2028,m:4}, 3: {y:2028,m:4}, 4: {y:2027,m:3}, 5: {y:2027,m:3}, 6: {y:2027,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 66, name: "Vientiane", region: "Asia", cluster: "SEA", country: "Laos",
    lat: 17.9757, lng: 102.6331,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 3, repack: 0, rgb: 0, rgbNrgb: 4 },
    linesNew: 8, linesCost: 8, linesBenefit: 8,
    tilliT: { year: 2025, month: 12 }, cap: { year: 2025, month: 12 }, pilot: 0,
    phases: { 0: {y:2025,m:12}, 1: {y:2028,m:7}, 2: {y:2025,m:12}, 3: {y:2025,m:12}, 4: {y:2025,m:12}, 5: {y:2025,m:12}, 6: {y:2025,m:12}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 67, name: "Waterloo", region: "CEEI", cluster: "Nrth America", country: "Canada",
    lat: 43.4643, lng: -80.5204,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2028, month: 3 }, cap: { year: 2028, month: 3 }, pilot: 0,
    phases: { 0: {y:2027,m:12}, 1: {y:2028,m:12}, 2: {y:2028,m:12}, 3: {y:2028,m:12}, 4: {y:2028,m:3}, 5: {y:2028,m:3}, 6: {y:2028,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 68, name: "Wernesgrün", region: "WE", cluster: "Cntrl Europe", country: "Germany",
    lat: 50.4394, lng: 12.3628,
    mes: "MES full", operational: 1, mesFlags: { full: 1, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 2, linesCost: 2, linesBenefit: 1,
    tilliT: { year: 2027, month: 9 }, cap: { year: 2027, month: 9 }, pilot: 0,
    phases: { 0: {y:2026,m:2}, 1: {y:2027,m:2}, 2: {y:2027,m:2}, 3: {y:2027,m:2}, 4: {y:2027,m:9}, 5: {y:2027,m:9}, 6: {y:2029,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 69, name: "Urumqi", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 43.8256, lng: 87.6168,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2028, month: 7 }, cap: { year: 2028, month: 7 }, pilot: 0,
    phases: { 0: {y:2028,m:7}, 1: {y:2029,m:7}, 2: {y:2029,m:7}, 3: {y:2029,m:7}, 4: {y:2028,m:7}, 5: {y:2028,m:7}, 6: {y:2027,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 70, name: "Wusu", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 44.4304, lng: 84.6740,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2028, month: 6 }, cap: { year: 2028, month: 6 }, pilot: 0,
    phases: { 0: {y:2028,m:6}, 1: {y:2029,m:6}, 2: {y:2029,m:6}, 3: {y:2029,m:6}, 4: {y:2028,m:6}, 5: {y:2028,m:6}, 6: {y:2027,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 71, name: "Wanzhou", region: "Asia", cluster: "CBC", country: "China",
    lat: 30.8078, lng: 108.4087,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 10 }, cap: { year: 2028, month: 10 }, pilot: 0,
    phases: { 0: {y:2029,m:3}, 1: {y:2030,m:9}, 2: {y:2030,m:9}, 3: {y:2030,m:9}, 4: {y:2028,m:10}, 5: {y:2028,m:10}, 6: {y:2028,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 72, name: "Xichang", region: "Asia", cluster: "CBC", country: "China",
    lat: 27.8946, lng: 102.2634,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 2, linesCost: 2, linesBenefit: 2,
    tilliT: { year: 2028, month: 9 }, cap: { year: 2028, month: 9 }, pilot: 0,
    phases: { 0: {y:2028,m:10}, 1: {y:2030,m:4}, 2: {y:2030,m:4}, 3: {y:2030,m:4}, 4: {y:2028,m:9}, 5: {y:2028,m:9}, 6: {y:2028,m:9}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 73, name: "Yancheng", region: "Asia", cluster: "CIB", country: "China",
    lat: 33.3472, lng: 120.1633,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 8 }, cap: { year: 2028, month: 8 }, pilot: 0,
    phases: { 0: {y:2028,m:9}, 1: {y:2030,m:3}, 2: {y:2030,m:3}, 3: {y:2030,m:3}, 4: {y:2028,m:8}, 5: {y:2028,m:8}, 6: {y:2027,m:11}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 74, name: "Yibin", region: "Asia", cluster: "CBC", country: "China",
    lat: 28.7513, lng: 104.6417,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 2 },
    linesNew: 3, linesCost: 3, linesBenefit: 3,
    tilliT: { year: 2027, month: 6 }, cap: { year: 2027, month: 6 }, pilot: 0,
    phases: { 0: {y:2027,m:6}, 1: {y:2029,m:10}, 2: {y:2029,m:10}, 3: {y:2029,m:10}, 4: {y:2027,m:6}, 5: {y:2027,m:6}, 6: {y:2027,m:6}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 75, name: "Yining", region: "Asia", cluster: "XJ&NX", country: "China",
    lat: 43.9477, lng: 81.3462,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 7 }, cap: { year: 2028, month: 7 }, pilot: 0,
    phases: { 0: {y:2028,m:7}, 1: {y:2029,m:7}, 2: {y:2029,m:7}, 3: {y:2029,m:7}, 4: {y:2028,m:7}, 5: {y:2028,m:7}, 6: {y:2027,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 76, name: "Yongzhou", region: "Asia", cluster: "CBC", country: "China",
    lat: 26.4345, lng: 111.6131,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 1, linesCost: 1, linesBenefit: 1,
    tilliT: { year: 2028, month: 11 }, cap: { year: 2028, month: 11 }, pilot: 0,
    phases: { 0: {y:2029,m:4}, 1: {y:2030,m:10}, 2: {y:2030,m:10}, 3: {y:2030,m:10}, 4: {y:2028,m:11}, 5: {y:2028,m:11}, 6: {y:2028,m:7}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 77, name: "Zaporizhzhia", region: "CEEI", cluster: "KUBA", country: "Ukraine",
    lat: 47.8388, lng: 35.1396,
    mes: "MES lite", operational: 1, mesFlags: { full: 0, lite: 1, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 1 },
    linesNew: 4, linesCost: 4, linesBenefit: 3,
    tilliT: { year: 2027, month: 1 }, cap: { year: 2027, month: 1 }, pilot: 0,
    phases: { 0: {y:2027,m:1}, 1: {y:2028,m:1}, 2: {y:2028,m:1}, 3: {y:2026,m:1}, 4: {y:2027,m:1}, 5: {y:2027,m:1}, 6: {y:2027,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 78, name: "Nike", region: "CEEI", cluster: "KUBA", country: "Kazakhstan",
    lat: 43.3567, lng: 77.0150,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 1, can: 1, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 3, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 5, linesCost: 5, linesBenefit: 4,
    tilliT: { year: 2026, month: 10 }, cap: { year: 2026, month: 10 }, pilot: 0,
    phases: { 0: {y:2026,m:6}, 1: {y:2026,m:6}, 2: {y:2026,m:6}, 3: {y:2026,m:6}, 4: {y:2026,m:10}, 5: {y:2026,m:10}, 6: {y:2026,m:10}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 79, name: "Aldaris", region: "CEEI", cluster: "SEB", country: "Latvia",
    lat: 56.9496, lng: 24.1052,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 1, rgbNrgb: 0 },
    linesNew: 2, linesCost: 2, linesBenefit: 1,
    tilliT: { year: 2028, month: 2 }, cap: { year: 2028, month: 2 }, pilot: 0,
    phases: { 0: {y:2027,m:10}, 1: {y:2028,m:10}, 2: {y:2028,m:10}, 3: {y:2028,m:10}, 4: {y:2028,m:2}, 5: {y:2028,m:2}, 6: {y:2028,m:2}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 80, name: "Ringwood", region: "WE", cluster: "Cntrl Europe", country: "United Kingdom",
    lat: 50.8468, lng: -1.7903,
    mes: "No MES", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 81, name: "Sion", region: "WE", cluster: "Cntrl Europe", country: "Switzerland",
    lat: 46.2328, lng: 7.3607,
    mes: "No MES", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 1 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 1, linesCost: 1, linesBenefit: 0,
    tilliT: { year: 2027, month: 11 }, cap: { year: 2027, month: 11 }, pilot: 0,
    phases: { 0: {y:2026,m:1}, 1: {y:2027,m:1}, 2: {y:2027,m:1}, 3: {y:2027,m:1}, 4: {y:2027,m:11}, 5: {y:2027,m:11}, 6: {y:2029,m:3}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 82, name: "SVY", region: "CEEI", cluster: "SEB", country: "Lithuania",
    lat: 55.7204, lng: 24.3475,
    mes: "No MES", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 0, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 83, name: "Leeds", region: "WE", cluster: "Carlsberg Britvic", country: "United Kingdom",
    lat: 53.8008, lng: -1.5491,
    mes: "LV", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 1, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 84, name: "Rugby", region: "WE", cluster: "Carlsberg Britvic", country: "United Kingdom",
    lat: 52.3702, lng: -1.2616,
    mes: "LV", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 1, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 85, name: "Beckton", region: "WE", cluster: "Carlsberg Britvic", country: "United Kingdom",
    lat: 51.5107, lng: 0.0634,
    mes: "LV", operational: 0, mesFlags: { full: 0, lite: 0, lineview: 1, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 0, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 0, linesCost: 0, linesBenefit: 0,
    tilliT: { year: 2040, month: 1 }, cap: { year: 2040, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:1}, 4: {y:2040,m:1}, 5: {y:2040,m:1}, 6: {y:2040,m:1}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 86, name: "Kylemore", region: "WE", cluster: "Carlsberg Britvic", country: "Ireland",
    lat: 53.3389, lng: -6.3270,
    mes: "LV", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 1, other: 0, none: 0 },
    lines: { bib: 0, can: 2, cask: 0, dm: 0, keg: 0, nrgb: 0, pet: 2, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 4, linesCost: 4, linesBenefit: 4,
    tilliT: { year: 2029, month: 1 }, cap: { year: 2029, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:4}, 4: {y:2026,m:5}, 5: {y:2029,m:1}, 6: {y:2029,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  {
    id: 87, name: "NCW (Newcastle West)", region: "WE", cluster: "Carlsberg Britvic", country: "Ireland",
    lat: 52.4491, lng: -9.0610,
    mes: "LV", operational: 1, mesFlags: { full: 0, lite: 0, lineview: 1, other: 0, none: 0 },
    lines: { bib: 0, can: 0, cask: 0, dm: 0, keg: 1, nrgb: 1, pet: 1, repack: 0, rgb: 0, rgbNrgb: 0 },
    linesNew: 3, linesCost: 3, linesBenefit: 2,
    tilliT: { year: 2029, month: 1 }, cap: { year: 2029, month: 1 }, pilot: 0,
    phases: { 0: {y:2040,m:1}, 1: {y:2040,m:1}, 2: {y:2040,m:1}, 3: {y:2040,m:4}, 4: {y:2026,m:5}, 5: {y:2029,m:1}, 6: {y:2029,m:4}, 7: null, 8: null, 9: null, 10: null }
  },
  { id: 88, name: "New 1", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 89, name: "New 2", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 90, name: "New 3", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 91, name: "New 4", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 92, name: "New 5", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 93, name: "New 6", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 94, name: "New 7", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 95, name: "New 8", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 96, name: "New 9", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 97, name: "New 10", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 98, name: "New 11", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
  { id: 99, name: "New 12", region: "-", cluster: null, country: null, lat: null, lng: null, mes: null, operational: 0, mesFlags: { full:0,lite:0,lineview:0,other:0,none:0 }, lines: { bib:0,can:0,cask:0,dm:0,keg:0,nrgb:0,pet:0,repack:0,rgb:0,rgbNrgb:0 }, linesNew:0, linesCost:0, linesBenefit:0, tilliT:{year:2040,month:1}, cap:{year:2040,month:1}, pilot:0, phases:{0:{y:2040,m:1},1:{y:2040,m:1},2:{y:2040,m:1},3:{y:2040,m:1},4:{y:2040,m:1},5:{y:2040,m:1},6:{y:2040,m:1},7:null,8:null,9:null,10:null} },
];

const GLOBE_SITES = SITES.filter(s => s.lat !== null && s.lng !== null);

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDate(obj) {
  if (!obj || !obj.year || obj.year >= 2040) return "TBD";
  return `${MONTH_NAMES[obj.month - 1]} ${obj.year}`;
}
