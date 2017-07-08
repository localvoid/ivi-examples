import { Context, SelectorData, componentFactory, VNode, render, context, connect } from "ivi";
import * as h from "ivi-html";
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

function Pixel(color: string) {
    return h.span("pixel").style({ "background": color });
}

function selectPixel(
    prev: SelectorData<string, string> | null,
    props: number,
    context: Context<{ data: string[] }>,
): SelectorData<string, string> {
    const color = context.data[props];
    if (prev && prev.in === color) {
        return prev;
    }

    return {
        in: color,
        out: color,
    };
}

const pixel = connect(selectPixel, Pixel);

function PixelImage(colors: string[]) {
    const children = new Array<VNode<any>>(100);
    for (let i = 0; i < 100; i++) {
        const offset = i * 100;
        const rowChildren = new Array<VNode<any>>(100);
        for (let j = 0; j < 100; j++) {
            rowChildren[j] = pixel(offset + j);
            // rowChildren[j] = $c(Pixel, colors[offset + j]);
        }
        children[i] = h.div("row").children(rowChildren);
    }

    return h.div("image").children(children);
}
const image = componentFactory(PixelImage);

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
    render(context(ctx, image(data)), container);

    function tick() {
        startProfile("data update");
        updateData(data, mutations);
        endProfile("data update");

        startProfile("view update");
        render(context(ctx, image(data)), container);
        endProfile("view update");

        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
});
