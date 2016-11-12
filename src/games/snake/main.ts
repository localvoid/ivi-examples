import { render, Component, $h, $c, Events } from "ivi";
import { Game, CellFlags, LEFT, RIGHT, UP, DOWN } from "./state";

function cellClasses(flags: CellFlags): string {
    if (flags & CellFlags.Body) {
        if (flags & CellFlags.Head) {
            return "Cell body head";
        }
        return "Cell body";
    } else if (flags & CellFlags.Food) {
        return "Cell food";
    }
    return "Cell";
}

const CELL_SIZE = 30;

class GameView extends Component<Game> {
    onKeyDown = Events.onKeyDown((ev) => {
        switch (ev.keyCode) {
            case 37: // left
                ev.preventDefault();
                this.props.setNewDirection(LEFT);
                break;
            case 38: // up
                ev.preventDefault();
                this.props.setNewDirection(UP);
                break;
            case 39: // right
                ev.preventDefault();
                this.props.setNewDirection(RIGHT);
                break;
            case 40: // down
                ev.preventDefault();
                this.props.setNewDirection(DOWN);
                break;
        }
    });

    render() {
        const { grid } = this.props;

        return $h("div", this.props.gameOver ? "SnakeGame gameOver" : "SnakeGame")
            .children($h("div", "Grid")
                .props({ "tabIndex": 0 })
                .style({
                    width: `${CELL_SIZE * grid.cols}px`,
                    height: `${CELL_SIZE * grid.rows}px`,
                })
                .events({
                    keys: this.onKeyDown,
                })
                .ref((node) => {
                    if (node) {
                        (node as HTMLElement).focus();
                    }
                })
                .children(grid.cells.map((c) => $h("div", cellClasses(c))))
            );
    }
}

const container = document.getElementById("app") !;
const game = new Game();

function tick() {
    game.updateState();
    render($c(GameView, game), container);
    setTimeout(tick, 100);
}
tick();
