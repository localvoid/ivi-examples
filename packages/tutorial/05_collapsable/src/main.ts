import { render, component, invalidate, OpNode, onClick, Events, _ } from "ivi";
import { div } from "ivi-html";

const Collapsable = component<OpNode>((c) => {
  let _collapsed = false;

  const clickEvent = onClick(() => {
    _collapsed = !_collapsed;
    invalidate(c);
  });

  return (child) => (
    Events(clickEvent,
      div(_collapsed ? "Collapsable close" : "Collapsable", _, child),
    )
  );
});

render(
  Collapsable(div(_, _, "Collapsable content")),
  document.getElementById("app")!,
);
