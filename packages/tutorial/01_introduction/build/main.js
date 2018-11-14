import { render, component } from "ivi";
import { div } from "ivi-html";
const Hello = component(() => (text) => div().c(`Hello ${text}!`));
render(Hello("World"), document.getElementById("app"));
