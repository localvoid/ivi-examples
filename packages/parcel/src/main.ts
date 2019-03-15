import { _, render } from "ivi";
import { h1 } from "ivi-html";

render(
  h1(_, _, "Hello World!"),
  document.getElementById("app")!,
);
