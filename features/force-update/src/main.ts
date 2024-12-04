import { createRoot, update, dirtyCheck, component, html } from "ivi";

const root = createRoot(document.getElementById("app")!);

const enum Theme {
  Light,
  Dark,
}

let theme = Theme.Light;
function setTheme(t: Theme) {
  if (theme !== t) {
    theme = t;
    dirtyCheck(root, true);
  }
}

const App = component(() => () => html`
  <div>
    <div>${theme === Theme.Light ? "Light" : "Dark"}</div>
    <button @click=${() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}>Toggle Theme</button>
  </div>
`);

update(root, App());
