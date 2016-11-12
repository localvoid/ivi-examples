import { render, $c } from "ivi";
import { AppLocation, AppState } from "./state";
import { App } from "./ui/app";

export type RouteHandler = (params?: string[]) => void;

export class Route {
    path: RegExp | string;
    handler: RouteHandler;

    constructor(path: RegExp | string, handler: RouteHandler) {
        this.path = path;
        this.handler = handler;
    }
}

function routeDispatch(routes: Route[], path: string): boolean {
    if (path !== "" && path[0] === "#") {
        if (path[1] === "!") {
            path = path.substr(2);
        } else {
            return false;
        }
    }

    for (let i = 0; i < routes.length; i++) {
        const r = routes[i];
        const p = r.path;
        if (typeof p === "string") {
            if (path === p) {
                r.handler();
                return true;
            }
        } else {
            const match = path.match(p);
            if (match) {
                if (match.length > 1) {
                    r.handler(match.slice(1));
                } else {
                    r.handler();
                }
                return true;
            }
        }
    }
    return false;
}

export function initRouter(routes: Route[], defaultPath = "", notFound?: () => void): void {
    const l = location;
    let prevHash = decodeURIComponent(l.hash);
    if (prevHash === "") {
        l.hash = prevHash = "#!" + defaultPath;
    }

    window.addEventListener("hashchange", () => {
        const newHash = decodeURIComponent(l.hash);
        if (newHash === "") {
            l.hash = prevHash = "#!" + defaultPath;
        }
        if (prevHash !== newHash) {
            prevHash = newHash;
            if (!routeDispatch(routes, newHash)) {
                if (notFound !== undefined) {
                    notFound();
                }
            }
        }
    });

    if (!routeDispatch(routes, prevHash)) {
        if (notFound !== undefined) {
            notFound();
        }
    }
}

const container = document.getElementById("todoapp") !;
const state = new AppState(update);

initRouter([
    new Route("/completed", () => {
        state.setLocation(AppLocation.ShowCompleted);
    }),
    new Route("/active", () => {
        state.setLocation(AppLocation.ShowActive);
    }),
    new Route("/", () => {
        state.setLocation(AppLocation.ShowAll);
    }),
]);

function update() {
    render($c(App, state), container!);
}
update();
