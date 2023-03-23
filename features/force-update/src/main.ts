import { component } from "ivi";
import { createRoot, updateRoot, forceUpdateRoot } from "ivi/root";
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
    forceUpdateRoot(root);
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

updateRoot(root, App());
