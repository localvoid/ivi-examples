import { renderNextFrame, $c } from "ivi";
import { AppLocation, setLocation } from "./state";
import { App } from "./ui/app";
import { setUpdateFunction } from "./xs";

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

initRouter([
    new Route("/completed", () => {
        setLocation(AppLocation.ShowCompleted);
    }),
    new Route("/active", () => {
        setLocation(AppLocation.ShowActive);
    }),
    new Route("/", () => {
        setLocation(AppLocation.ShowAll);
    }),
]);

setUpdateFunction(update);
function update() {
    renderNextFrame($c(App), container!);
}
update();
