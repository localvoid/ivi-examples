import {
  _, Component, component, Events, onMouseOut, onMouseOver, containsRelatedTarget, invalidate, render,
} from "ivi";
import { div } from "ivi-html";

function useHover(c: Component) {
  let v = false;
  return {
    state: () => v,
    events: [
      onMouseOver((ev) => {
        if (!containsRelatedTarget(ev)) {
          v = true;
          invalidate(c);
        }
      }),
      onMouseOut((ev) => {
        if (!containsRelatedTarget(ev)) {
          v = false;
          invalidate(c);
        }
      }),
    ],
  };
}

const Row = component((c) => {
  const hover = useHover(c);
  return () => (
    div("row", _,
      Events(hover.events, [
        div(hover.state() ? "row row-hover" : "row"),
        div(hover.state() ? "row row-hover" : "row"),
      ]),
    )
  );
});

const Collection = component((c) => {
  const hover = useHover(c);
  return () => (
    div(hover.state() ? "collection collection-hover" : "collection", _,
      // hover events will be triggered only when mouse goes over internal rows
      Events(hover.events, [
        Row(),
        Row(),
        Row(),
      ]),
    )
  );
});

render(Collection(), document.getElementById("app")!);
