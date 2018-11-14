import { render, component, invalidate, VNode, onClick } from "ivi";
import { div } from "ivi-html";

const Collapsable = component<VNode>((c) => {
  let _collapsed = false;

  const clickEvent = onClick(() => {
    _collapsed = !_collapsed;
    invalidate(c);
  });

  return (child) => div(_collapsed ? "Collapsable close" : "Collapsable").e(clickEvent).c(child);
});

render(
  Collapsable(div().c("Collapsable content")),
  document.getElementById("app")!,
);
