import { render, $h, $c } from "ivi";

function HelloComponent(text: string) {
    return $h("div").children(`Hello ${text}!`);
}

render($c(HelloComponent, "World"), document.getElementById("app") !);
