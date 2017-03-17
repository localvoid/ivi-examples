import { render, Component, VNode, $h, $c, EventDispatcherSubscription } from "ivi";

import {
    EventDispatcher, SyntheticEvent, NativeEventDispatchers, accumulateDispatchTargets, dispatchEvent,
    createEventHandler, EventHandler, SyntheticUIEvent,
} from "ivi";

export class SyntheticGestureTapEvent extends SyntheticEvent<null> {
}

const enum GestureEventDispatcherFlags {
    TouchStart = 1,
    MouseDown = 1 << 1,
    TouchEnd = 1 << 2,
    MouseUp = 1 << 3,
    IgnoreMouseDown = 1 << 4,
    IgnoreClick = 1 << 5,

    Down = TouchStart | MouseDown,
    Up = TouchEnd | MouseUp,
}

export class GestureEventDispatcher extends EventDispatcher {
    private flags: GestureEventDispatcherFlags = 0;
    private onTouchStartSub: EventDispatcherSubscription | null = null;
    private onTouchEndSub: EventDispatcherSubscription | null = null;
    private onMouseDownSub: EventDispatcherSubscription | null = null;
    private onMouseUpSub: EventDispatcherSubscription | null = null;
    private onClickSub: EventDispatcherSubscription | null = null;

    private onTouchStart = (ev: SyntheticUIEvent<any>) => {
        this.flags |= GestureEventDispatcherFlags.TouchStart | GestureEventDispatcherFlags.IgnoreMouseDown;
        this.onTouchEndSub = NativeEventDispatchers.touchend.subscribe(this.onTouchEnd);
    }

    private onMouseDown = (ev: SyntheticUIEvent<any>) => {
        if (this.flags &
            (GestureEventDispatcherFlags.TouchStart | GestureEventDispatcherFlags.IgnoreMouseDown)) {
            this.flags &= ~GestureEventDispatcherFlags.IgnoreMouseDown;
            return;
        }
        this.flags |= GestureEventDispatcherFlags.MouseDown;
        this.onMouseUpSub = NativeEventDispatchers.mouseup.subscribe(this.onMouseUp);
    }

    private onTouchEnd = (ev: SyntheticUIEvent<any>) => {
        this.flags |= GestureEventDispatcherFlags.IgnoreClick;
        this.flags &= ~GestureEventDispatcherFlags.TouchStart;
        this.onTouchEndSub!.cancel();
        this.onTouchEndSub = null;
        this.emit(ev);
    }

    private onMouseUp = (ev: SyntheticUIEvent<any>) => {
        if (!(this.flags & GestureEventDispatcherFlags.MouseDown)) {
            return;
        }
        this.flags |= GestureEventDispatcherFlags.IgnoreClick;
        this.flags &= ~GestureEventDispatcherFlags.MouseUp;
        this.onMouseUpSub!.cancel();
        this.onMouseUpSub = null;
        this.emit(ev);
    }

    private onClick = (ev: SyntheticUIEvent<any>) => {
        if (this.flags & GestureEventDispatcherFlags.IgnoreClick) {
            this.flags &= ~GestureEventDispatcherFlags.IgnoreClick;
            return;
        }
        this.emit(ev);
    }

    emit(ev: SyntheticUIEvent<any>): void {
        const subs = this._nextSubscription;
        const handlers = accumulateDispatchTargets(ev.target as Element, this);

        let s: SyntheticGestureTapEvent | undefined;
        if (handlers || subs) {
            s = new SyntheticGestureTapEvent(this, 0, null, ev.target, Date.now(), 0);
        }

        if (handlers.length > 0) {
            dispatchEvent(handlers, s!, true);
        }

        if (s) {
            this.dispatchEventToSubscribers(s, 0);
        }
    }

    activate() {
        this.onMouseDownSub = NativeEventDispatchers.mousedown.subscribe(this.onMouseDown);
        this.onTouchStartSub = NativeEventDispatchers.touchstart.subscribe(this.onTouchStart);
        this.onClickSub = NativeEventDispatchers.click.subscribe(this.onClick);
    }

    deactivate() {
        this.onMouseDownSub!.cancel();
        this.onTouchStartSub!.cancel();
        this.onClickSub!.cancel();

        this.onMouseDownSub = null;
        this.onTouchStartSub = null;
        this.onClickSub = null;
    }
}

export const GestureEventDispatchers = {
    gesture: new GestureEventDispatcher(),
};

export const GestureEvents = {
    onGesture: function createAbortEventHandler(
        handler: (ev: SyntheticEvent<any>) => void,
        capture = false,
    ): EventHandler<SyntheticEvent<any>> {
        return createEventHandler<SyntheticEvent<any>>(GestureEventDispatchers.gesture, handler, capture);
    },
};

class Box extends Component<{
    depth: number,
}> {
    private clickCounter = 0;

    private onGesture = GestureEvents.onGesture((ev) => {
        this.clickCounter++;
        this.invalidate();
    });

    render(): VNode<any> {
        const { depth } = this.props;
        return $h("div", "Box")
            .events(this.onGesture)
            .children([
                $h("div", "ClickCounter").children(`Clicks: ${this.clickCounter}`),
                (depth > 0) ? $c(Box, {
                    depth: depth - 1,
                }) : null,
            ]);
    }
}

render(
    $h("div").children([
        $c(Box, { depth: 1 }),
    ]),
    document.getElementById("app")!);
