import { scheduleMicrotask, NOOP } from "ivi";

let pending = false;
let update = NOOP;

function _update() {
    update();
    pending = false;
}

function invalidate() {
    if (!pending) {
        pending = true;
        scheduleMicrotask(_update);
    }
}

export function setUpdateFunction(fn: () => void) {
    update = fn;
}

export function createAction<P>(fn: () => void): () => void;
export function createAction<P>(fn: (payload: P) => void): (payload: P) => void;
export function createAction<P>(fn: (payload?: P) => void): (payload?: P) => void {
    return function (payload?: P) {
        fn(payload);
        invalidate();
    };
}
