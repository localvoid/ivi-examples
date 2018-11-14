import { render, component, invalidate, onClick, _ } from "ivi";
import { div } from "ivi-html";

const STYLE = {
  "display": "inline-block",
  "border": "1px solid #333",
  "padding": "20px",
  "cursor": "pointer",
  "user-select": "none",
};

const ClickMe = component((c) => {
  let counter = 0;

  const clickEvents = onClick(() => {
    counter++;
    invalidate(c);
  });

  return () => div(_, _, STYLE).e(clickEvents).c(`Click me: ${counter}`);
});

render(ClickMe(), document.getElementById("app")!);
