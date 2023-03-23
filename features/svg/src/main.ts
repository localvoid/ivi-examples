import { component, invalidate } from "ivi";
import { createRoot, updateRoot } from "ivi/root";
import { svg } from "@ivi/tpl";

const App = component((c) => {
  let r = 10;
  const update = () => {
    r = (r + 1) % 50;
    invalidate(c);
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  return () => svg`
    svg :height='100' :width='100'
      circle
        :cx='50'
        :cy='50'
        :stroke='black'
        :stroke-width='3'
        :fill='red'
        :r=${r}
  `;
});

updateRoot(createRoot(document.getElementById("app")!), App());
