import {
  _, render, component, useMutationEffect, getDOMNode, invalidate, Op, Key, key, TrackByKey, memoArray,
  EVENT_PASSIVE_OPTIONS,
} from "ivi";
import { div } from "ivi-html";

interface VirtualListProps<T> {
  data: T[];
}

const ROW_HEIGHT = 50;
const ROW_DISPLAY = 20;

const VirtualList = component<VirtualListProps<any>, (data: any) => Key<number, Op>>((c) => {
  let start = 0;

  const addScrollEvent = useMutationEffect(c, () => {
    const root = getDOMNode(c) as HTMLDivElement;
    root.addEventListener("scroll", () => {
      const next = Math.max(0, (Math.floor(root.scrollTop / ROW_HEIGHT) & ~0b11) - 5);
      if (start !== next) {
        start = next;
        invalidate(c);
      }
    }, EVENT_PASSIVE_OPTIONS);
  });

  const children = memoArray(([data, first, child]) => {
    const count = Math.min(data.length - first, ROW_DISPLAY);
    const rows = [];
    for (let i = 0; i < count; i++) {
      const j = first + i;
      rows[i] = child(data[j]);
    }
    const paddingTop = first * ROW_HEIGHT;
    const paddingBottom = (data.length - (first + count)) * ROW_HEIGHT;
    return div("virtual-list", _,
      div(_, { style: { padding: `${paddingTop}px 0 ${paddingBottom}px 0` } },
        TrackByKey(rows),
      ),
    );
  });

  return ({ data }, child) => (
    addScrollEvent(),
    children([data, start, child])
  );
});

const DATA = Array(10000);
for (let id = 0; id < DATA.length; id++) {
  DATA[id] = { id, text: Math.random().toString() };
}

render(
  VirtualList({ data: DATA },
    (item) => key(item.id, div("virtual-list-item", _, item.text)),
  ),
  document.getElementById("app")!,
);
