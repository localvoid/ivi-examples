import { createRoot, update, dirtyCheck, component } from "ivi";
import { htm } from "@ivi/tpl";

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

const App = component((c) => {
  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  };
  return () => htm`
    div
      div ${theme === Theme.Light ? "Light" : "Dark"}
      button @click=${toggleTheme} 'Toggle Theme'
  `;
});

update(root, App());
