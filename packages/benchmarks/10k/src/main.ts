import {
  component, withNextFrame, render, _, useSelect, Context, context, TrackByKey, key, statelessComponent,
} from "ivi";
import { span, div } from "ivi-html";
import { startFPSMonitor, startMemMonitor, initProfiler, startProfile, endProfile } from "perf-monitor";

function randomColor(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateData(): string[] {
  const result = new Array<string>(10000);
  for (let i = 0; i < 10000; i++) {
    result[i] = randomColor();
  }
  return result;
}

function updateData(data: string[], mutations: number): void {
  if (mutations > 0) {
    if (mutations === 1) {
      for (let i = 0; i < 10000; i++) {
        data[i] = randomColor();
      }
    } else {
      for (let i = 0; i < 10000; i++) {
        if (Math.random() < mutations) {
          data[i] = randomColor();
        }
      }
    }
  }
}

const Pixel = component<number>((c) => {
  const getColor = useSelect<string, number>(c, (i) => context<{ data: string[] }>().data[i]);
  return (i) => span("pixel", { style: { background: getColor(i) } });
});

const PixelImage = statelessComponent(() => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    const offset = i * 100;
    const cols = [];
    for (let j = 0; j < 100; j++) {
      cols.push(key(j, Pixel(offset + j)));
    }
    rows.push(key(i, div("row", _, TrackByKey(cols))));
  }

  return div("image", _, TrackByKey(rows));
});

document.addEventListener("DOMContentLoaded", () => {
  startFPSMonitor();
  startMemMonitor();
  initProfiler("data update");
  initProfiler("view update");

  let mutations = 0.5;

  const sliderContainer = document.createElement("div");
  sliderContainer.style.margin = "0 auto";
  sliderContainer.style.width = "80%";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.style.width = "100%";

  slider.addEventListener("change", (e) => {
    mutations = Number.parseFloat((e.target as HTMLInputElement).value) / 100;
  });
  sliderContainer.appendChild(slider);
  document.body.insertBefore(sliderContainer, document.body.firstChild);

  const data = generateData();
  const ctx = {
    data: data,
  };
  const container = document.getElementById("app")!;
  render(Context(ctx, PixelImage()), container);

  function tick() {
    startProfile("data update");
    updateData(data, mutations);
    endProfile("data update");

    startProfile("view update");
    withNextFrame(() => { render(Context(ctx, PixelImage()), container); })();
    endProfile("view update");

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
