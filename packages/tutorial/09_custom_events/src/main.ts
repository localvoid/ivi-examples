import { _, Events, component, render, invalidate, Op } from "ivi";
import { div } from "ivi-html";
import { PanAction, onPan } from "./pan_event";
import { onHover } from "./hover_event";

const Container = component<Op>((c) => {
  let hover = false;
  const events = onHover((v) => {
    hover = v;
    invalidate(c);
  });

  return (children) => (
    Events(events,
      div(hover ? "container hover" : "container", _, children),
    )
  );
});

const Draggable = component((c) => {
  let hover = false;
  let x0 = 0;
  let y0 = 0;
  let x = 0;
  let y = 0;

  const events = [
    onHover((v) => {
      hover = v;
      invalidate(c);
    }),
    onPan((ev) => {
      switch (ev.action) {
        case PanAction.Down:
          x0 = x;
          y0 = y;
          break;
        case PanAction.Move:
        case PanAction.Up:
          x = x0 + ev.dx;
          y = y0 + ev.dy;
          invalidate(c);
          break;
      }
    }),
  ];

  return () => (
    Events(events,
      div(hover ? "box hover" : "box", { style: { transform: `translate(${x}px,${y}px)` } }, "Drag Me"),
    )
  );
});

render(Container(Draggable()), document.getElementById("app")!);
