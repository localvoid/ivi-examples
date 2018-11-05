import { setupScheduler, BASIC_SCHEDULER, render, component } from "ivi";
import { div } from "ivi-html";

const Hello = component<string>(() => (text) => div().c(`Hello ${text}!`));

setupScheduler(BASIC_SCHEDULER);
render(Hello("World"), document.getElementById("app")!);
