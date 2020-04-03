import { _, Events, component, render, Op, Component, getDOMNode, debounceMutationEffect } from "ivi";
import { div } from "ivi-html";
import { PanAction, onPan } from "./pan_event";

const Draggable = component<Op>((c: Component) => {
  let x0 = 0;
  let y0 = 0;
  let x = 0;
  let y = 0;
  const updatePosition = debounceMutationEffect<{ x: number, y: number }>((p) => {
    getDOMNode<HTMLElement>(c)!.style.transform = `translate(${p.x}px,${p.y}px)`;
  });

  const pan = onPan((ev) => {
    switch (ev.action) {
      case PanAction.Down:
        x0 = x;
        y0 = y;
        break;
      case PanAction.Move:
      case PanAction.Up:
        x = x0 + ev.dx;
        y = y0 + ev.dy;
        updatePosition({ x, y });
        break;
    }
  });

  return () => (
    Events(pan,
      div("box", _, "Drag Me"),
    )
  );
});

render(Draggable(), document.getElementById("app")!);
