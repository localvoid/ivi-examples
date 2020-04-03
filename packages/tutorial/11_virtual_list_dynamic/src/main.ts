import {
  _, render, component, useMutationEffect, getDOMNode, invalidate, key, TrackByKey,
  shallowEqualArray,
  EVENT_PASSIVE_OPTIONS,
  memoArray,
} from "ivi";
import { div } from "ivi-html";

interface VirtualListProps<T> {
  data: T[];
}

const ROW_HEIGHT = 50;
const ROW_DISPLAY = 25;

const VirtualListItem = component<any, any>((c) => {
  let height = -1;
  const getHeight = () => {
    if (height === -1) {
      height = (getDOMNode(c) as HTMLDivElement).offsetHeight;
    }
    return height;
  };

  return ({ index, updateChildrenMethods, data }) => (
    updateChildrenMethods(index, getHeight),

    div("virtual-list-item", { style: { height: `${data.size}px` } }, data.text)
  )
});

const VirtualList = component<VirtualListProps<any>>((c) => {
  let root: HTMLDivElement;
  let childrenSize: Array<() => number>;
  let childrenStartIndex = 0;
  let prevScrollTop = 0;
  let anchorIndex = 0;
  let anchorOffset = 0;

  const updateChildrenMethods = (index: number, size: () => number) => {
    childrenSize[index] = size;
  };

  const init = useMutationEffect(c, () => {
    root = getDOMNode(c) as HTMLDivElement;
    root.addEventListener("scroll", () => {
      const scrollTop = root.scrollTop;
      const delta = scrollTop - prevScrollTop;
      if (delta !== 0) {
        prevScrollTop = scrollTop;
        if (scrollTop === 0) {
          anchorIndex = 0;
          anchorOffset = 0;
        } else {
          let offset = anchorOffset + delta;
          let i = anchorIndex - childrenStartIndex;
          let unknownSizeItems = 0;
          if (offset < 0) {
            while (offset < 0 && i > 0) {
              offset += childrenSize[--i]();
            }
            unknownSizeItems = Math.max(-anchorIndex, Math.ceil(Math.min(offset, 0) / ROW_HEIGHT));
          } else {
            while (offset > 0 && i < childrenSize.length) {
              const size = childrenSize[i]();
              if (size >= offset) {
                break;
              }
              offset -= size;
              i++;
            }
            if (i >= childrenSize.length) {
              unknownSizeItems = Math.floor(Math.max(offset, 0) / ROW_HEIGHT);
            }
          }
          anchorIndex = i + childrenStartIndex + unknownSizeItems;
          anchorOffset = offset - unknownSizeItems * ROW_HEIGHT;
        }
        if (Math.abs(anchorIndex - (childrenStartIndex + 10)) > 8) {
          childrenStartIndex = Math.max(0, anchorIndex - 10);
          invalidate(c);
        }
      }
    }, EVENT_PASSIVE_OPTIONS);
  });

  const updateSize = useMutationEffect<any[]>(c, ([startIndex, data]) => {
    const paddingTop = startIndex * ROW_HEIGHT;
    let offset = paddingTop;
    let i = startIndex;
    while (i < anchorIndex) {
      offset += childrenSize[i - startIndex]();
      i++;
    }
    offset += anchorOffset;
    prevScrollTop = offset;

    const style = (root.firstChild as HTMLDivElement).style;
    style.paddingTop = `${paddingTop}px`;
    style.paddingBottom = `${(data.length - (startIndex + childrenSize.length)) * ROW_HEIGHT}px`;

    root.scrollTop = offset;
  }, shallowEqualArray);

  const renderNodes = memoArray(([startIndex, data]) => {
    childrenSize = [];
    const count = Math.min(data.length - startIndex, ROW_DISPLAY);
    const rows = [];
    for (let i = 0; i < count; i++) {
      const j = startIndex + i;
      rows[i] = key(data[j].id,
        VirtualListItem({
          index: i,
          updateChildrenMethods,
          data: data[j],
        })
      );
    }
    return div("virtual-list", _, div(_, _, TrackByKey(rows)));
  });

  return ({ data }) => {
    const v = [childrenStartIndex, data];
    init();
    updateSize(v);
    return renderNodes(v);
  };
});

const DATA = Array(10000);
for (let i = 0; i < DATA.length; i++) {
  DATA[i] = {
    id: i,
    size: 50 + Math.floor((Math.random() * 100)),
    text: i.toString(),
  };
}

render(
  VirtualList({ data: DATA }),
  document.getElementById("app")!,
);
