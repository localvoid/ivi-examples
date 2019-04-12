import {
  _, MOUSE_OVER_EVENT, MOUSE_OUT_EVENT, EventHandlerNode, DispatchTarget, OpState, NativeEventSource,
  containsDOMElement, addNativeEventMiddleware,
} from "ivi";

type HoverEventHandler = (hover: boolean, target?: OpState) => void;

const HOVER_EVENT = (() => ({
  s: (src: NativeEventSource<MouseEvent>) => src === MOUSE_OVER_EVENT || src === MOUSE_OUT_EVENT,
  h: (() => {
    let notContains = false;
    const middleware = (event: MouseEvent, next: (event: MouseEvent) => void) => {
      next(event);
      notContains = false;
    };
    addNativeEventMiddleware(MOUSE_OVER_EVENT, middleware);
    addNativeEventMiddleware(MOUSE_OUT_EVENT, middleware);

    const handleMouseEvent = (
      nativeEvent: MouseEvent,
      currentTarget: DispatchTarget,
      src: {},
    ) => {
      const relatedTarget = nativeEvent.relatedTarget as Element;
      const t = currentTarget.t;
      if (notContains || !containsDOMElement(t, relatedTarget)) {
        notContains = true;
        currentTarget.h.h((src === MOUSE_OVER_EVENT) ? true : false, currentTarget.t);
      }
    };

    return handleMouseEvent;
  })(),
  f: 0,
}))();

export const onHover = (h: HoverEventHandler): EventHandlerNode<any> => ({ d: HOVER_EVENT, h });
