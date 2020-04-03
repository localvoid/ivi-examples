import {
  _, MOUSE_DOWN_EVENT, EventHandlerNode, DispatchTarget, OpState, withSchedulerTick, addNativeEventMiddleware,
} from "ivi";

export const enum PanAction { Down, Move, Up }
export type PanEvent = Readonly<ReturnType<typeof createPanEvent>>;
const createPanEvent = (action: PanAction, x: number, y: number, dx: number, dy: number) => ({ action, x, y, dx, dy });

type PanEventHandler = (event: PanEvent, target?: OpState) => number | void;
const dispatchPanEvent = (event: PanEvent, target: DispatchTarget<PanEventHandler>) => target.h.h(event, target.t);

function dispatch(targets: DispatchTarget[], event: PanEvent) {
  for (let i = 0; i < targets.length; ++i) {
    dispatchPanEvent(event, targets[i]);
  }
}

const PAN_EVENT = (() => ({
  s: MOUSE_DOWN_EVENT,
  h: (() => {
    let activeTargets: DispatchTarget[] = [];
    let downEvent: PanEvent | null = null;
    let x0 = 0;
    let y0 = 0;

    addNativeEventMiddleware(MOUSE_DOWN_EVENT, (event, next) => {
      next(event);
      downEvent = null;
    });

    const handleMouseMove = withSchedulerTick((nativeEvent: MouseEvent) => {
      const { pageX, pageY } = nativeEvent;
      dispatch(activeTargets, createPanEvent(PanAction.Move, pageX, pageY, pageX - x0, pageY - y0));
    });

    const handleMouseUp = withSchedulerTick((nativeEvent: MouseEvent) => {
      const { pageX, pageY } = nativeEvent;
      dispatch(activeTargets, createPanEvent(PanAction.Up, pageX, pageY, pageX - x0, pageY - y0));

      activeTargets = [];
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("mouseup", handleMouseUp, true);
    });

    const handleMouseDown = (nativeEvent: MouseEvent, currentTarget: DispatchTarget<PanEventHandler>) => {
      const { pageX, pageY } = nativeEvent;
      if (downEvent === null) {
        downEvent = createPanEvent(PanAction.Down, pageX, pageY, 0, 0);
      }
      if (activeTargets.length === 0) {
        x0 = pageX;
        y0 = pageY;
        activeTargets.push(currentTarget);
        document.addEventListener("mousemove", handleMouseMove, true);
        document.addEventListener("mouseup", handleMouseUp, true);
      }
      return dispatchPanEvent(downEvent, currentTarget);
    };

    return handleMouseDown;
  })(),
  f: 0,
}))();

export const onPan = (h: PanEventHandler): EventHandlerNode<any> => ({ d: PAN_EVENT, h });
