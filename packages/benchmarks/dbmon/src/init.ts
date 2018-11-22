import { startFPSMonitor, startMemMonitor, initProfiler } from "perf-monitor";

let mutations = 0.5;
let N = 50;

export function getMutations() {
  return mutations;
}

export function getN() {
  return N;
}

function parseQueryString(a: string[]): { [key: string]: string } {
  if (a.length === 0) {
    return {};
  }
  const b = {} as { [key: string]: string };
  for (let i = 0; i < a.length; ++i) {
    const p = a[i].split("=", 2);
    if (p.length === 1) {
      b[p[0]] = "";
    } else {
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
  }
  return b;
}

export function init(): void {
  const qs = parseQueryString(window.location.search.substr(1).split("&"));
  if (qs["n"] !== void 0) {
    N = parseInt(qs["n"], 10);
  }
  if (qs["m"] !== void 0) {
    mutations = parseFloat(qs["m"]);
  }

  document.addEventListener("DOMContentLoaded", () => {
    startFPSMonitor();
    startMemMonitor();
    initProfiler("view update");

    const sliderContainer = document.createElement("div");
    sliderContainer.style.display = "flex";
    const slider = document.createElement("input");
    slider.type = "range";
    slider.style.marginBottom = "10px";
    slider.style.marginTop = "5px";
    const text = document.createElement("label");
    text.textContent = "mutations : " + (mutations * 100).toFixed(0) + "%";

    slider.addEventListener("change", (e) => {
      mutations = Number.parseFloat((e.target as HTMLInputElement).value) / 100;
      text.textContent = "mutations : " + (mutations * 100).toFixed(0) + "%";
    });
    sliderContainer.appendChild(text);
    sliderContainer.appendChild(slider);
    document.body.insertBefore(sliderContainer, document.body.firstChild);
  });
}
