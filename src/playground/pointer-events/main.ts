import { render, Component, Events, VNode, $h, $c, getDOMInstanceFromVNode } from "ivi";

class NativeBox extends Component<{
    depth: number,
    touch: boolean,
    stopPropagation: boolean,
    capture: boolean,
}> {
    private clickCounter = 0;
    private isEntered = false;
    private isTouched = false;
    private root: VNode<any> | null = null;

    private onClick = (ev: MouseEvent) => {
        this.clickCounter++;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }

    private onMouseEnter = (ev: MouseEvent) => {
        this.isEntered = true;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }

    private onMouseLeave = (ev: MouseEvent) => {
        this.isEntered = false;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }

    private onTouchStart = (ev: TouchEvent) => {
        this.isTouched = true;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }

    private onTouchEnd = (ev: TouchEvent) => {
        this.isTouched = false;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }

    private events = this.props.touch ?
        {
            "click": this.onClick,
            "mouseenter": this.onMouseEnter,
            "mouseleave": this.onMouseLeave,
            "touchstart": this.onTouchStart,
            "touchend": this.onTouchEnd,
        } :
        {
            "click": this.onClick,
            "mouseenter": this.onMouseEnter,
            "mouseleave": this.onMouseLeave,
        };

    render(): VNode<any> {
        const { depth } = this.props;
        return this.root = $h("div", "Box" + (this.isEntered ? " entered" : "") + (this.isTouched ? " touched" : ""))
            .children([
                $h("div", "ClickCounter").children(`Clicks: ${this.clickCounter}`),
                (depth > 0) ? $c(NativeBox, {
                    depth: depth - 1,
                    touch: this.props.touch,
                    stopPropagation: this.props.stopPropagation,
                    capture: this.props.capture,
                }) : null,
            ]);
    }

    attached() {
        const n = getDOMInstanceFromVNode(this.root!);
        const keys = Object.keys(this.events);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            n!.addEventListener(key, (this.events as any)[key], this.props.capture);
        }
    }
}

class Box extends Component<{
    depth: number,
    touch: boolean,
    stopPropagation: boolean,
    capture: boolean,
}> {
    private clickCounter = 0;
    private isEntered = false;
    private isTouched = false;

    private onClick = Events.onClick((ev) => {
        this.clickCounter++;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }, this.props.capture);

    private onMouseEnter = Events.onMouseEnter((ev) => {
        this.isEntered = true;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }, this.props.capture);

    private onMouseLeave = Events.onMouseLeave((ev) => {
        this.isEntered = false;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }, this.props.capture);

    private onTouchStart = Events.onTouchStart((ev) => {
        this.isTouched = true;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }, this.props.capture);

    private onTouchEnd = Events.onTouchEnd((ev) => {
        this.isTouched = false;
        this.invalidate();
        if (this.props.stopPropagation) {
            ev.stopPropagation();
        }
    }, this.props.capture);

    private events = this.props.touch ?
        {
            click: this.onClick,
            enter: this.onMouseEnter,
            leave: this.onMouseLeave,
            touchStart: this.onTouchStart,
            touchEnd: this.onTouchEnd,
        } :
        {
            click: this.onClick,
            enter: this.onMouseEnter,
            leave: this.onMouseLeave,
        };

    render(): VNode<any> {
        const { depth } = this.props;
        return $h("div", "Box" + (this.isEntered ? " entered" : "") + (this.isTouched ? " touched" : ""))
            .events(this.events)
            .children([
                $h("div", "ClickCounter").children(`Clicks: ${this.clickCounter}`),
                (depth > 0) ? $c(Box, {
                    depth: depth - 1,
                    touch: this.props.touch,
                    stopPropagation: this.props.stopPropagation,
                    capture: this.props.capture,
                }) : null,
            ]);
    }
}

render(
    $h("div").children([
        $h("h1").children("Native Events:"),
        $h("h2").children("Touch disabled:"),
        $c(NativeBox, { depth: 3, touch: false, stopPropagation: false, capture: false }),
        $h("h2").children("Touch enabled:"),
        $c(NativeBox, { depth: 3, touch: true, stopPropagation: false, capture: false }),
        $h("h2").children("Touch enabled / Capture:"),
        $c(NativeBox, { depth: 3, touch: true, stopPropagation: false, capture: true }),
        $h("h2").children("Touch enabled / Stop propagation:"),
        $c(NativeBox, { depth: 3, touch: true, stopPropagation: true, capture: false }),
        $h("h2").children("Touch enabled / Stop propagation / Capture:"),
        $c(NativeBox, { depth: 3, touch: true, stopPropagation: true, capture: true }),
        $h("h1").children("Synthetic Events:"),
        $h("h2").children("Touch disabled:"),
        $c(Box, { depth: 3, touch: false, stopPropagation: false, capture: false }),
        $h("h2").children("Touch enabled:"),
        $c(Box, { depth: 3, touch: true, stopPropagation: false, capture: false }),
        $h("h2").children("Touch enabled / Capture:"),
        $c(Box, { depth: 3, touch: true, stopPropagation: false, capture: true }),
        $h("h2").children("Touch enabled / Stop propagation:"),
        $c(Box, { depth: 3, touch: true, stopPropagation: true, capture: false }),
        $h("h2").children("Touch enabled / Stop propagation / Capture:"),
        $c(Box, { depth: 3, touch: true, stopPropagation: true, capture: true }),
    ]),
    document.getElementById("app")!);
