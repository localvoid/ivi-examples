import { render, componentFactory } from "ivi";
import * as h from "ivi-html";

function HelloComponent(text: string) {
    return h.div().children(`Hello ${text}!`);
}
const helloComponent = componentFactory(HelloComponent);

render(helloComponent("World"), document.getElementById("app")!);
