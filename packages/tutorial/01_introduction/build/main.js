import { render, component, _ } from "ivi";
import { div } from "ivi-html";
const Hello = component(() => (text) => div(_, _, `Hello ${text}!`));
render(Hello("World"), document.getElementById("app"));
