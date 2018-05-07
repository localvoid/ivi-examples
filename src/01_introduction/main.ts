import { render, statelessComponent } from "ivi";
import * as h from "ivi-html";

const Hello = statelessComponent((text: string) => (
  h.div().c(`Hello ${text}!`)
));

render(Hello("World"), document.getElementById("app")!);
