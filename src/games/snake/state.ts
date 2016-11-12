export interface Point {
    x: number;
    y: number;
}

export const LEFT = { x: -1, y: 0 };
export const RIGHT = { x: 1, y: 0 };
export const UP = { x: 0, y: -1 };
export const DOWN = { x: 0, y: 1 };

export class Snake {
    body: Point[] = [];
    grow = 4;

    constructor(startPosition: Point = { x: 0, y: 0 }) {
        this.body.push(startPosition);
    }

    get head(): Point {
        return this.body[this.body.length - 1];
    }

    move(p: Point): Point | null {
        this.body.push(p);
        if (this.grow) {
            this.grow--;
            return null;
        } else {
            const r = this.body[0];
            this.body = this.body.splice(1);
            return r;
        }
    }
}

export const enum CellFlags {
    Body = 1 << 0,
    Head = 1 << 1,
    Food = 1 << 2,
}

export class Grid {
    rows: number;
    cols: number;
    cells: CellFlags[];

    constructor(rows = 20, cols = 20) {
        this.rows = rows;
        this.cols = cols;
        this.cells = new Array(rows * cols).fill(0);
    }

    pointToIndex(p: Point): number {
        return this.cols * p.y + p.x;
    }

    mark(p: Point, flag: CellFlags): void {
        this.cells[this.pointToIndex(p)] |= flag;
    }

    unmark(p: Point, flag: CellFlags): void {
        this.cells[this.pointToIndex(p)] &= ~flag;
    }

    createRandomFood(): void {
        let i = 0;
        do {
            i = (Math.random() * this.cells.length) | 0;
        } while (this.cells[i] !== 0);
        this.cells[i] |= CellFlags.Food;
    }

    isBodyAt(p: Point): boolean {
        return !!(this.cells[this.pointToIndex(p)] & CellFlags.Body);
    }

    isHeadAt(p: Point): boolean {
        return !!(this.cells[this.pointToIndex(p)] & CellFlags.Head);
    }

    isFoodAt(p: Point): boolean {
        return !!(this.cells[this.pointToIndex(p)] & CellFlags.Food);
    }
}

function addPoints(a: Point, b: Point): Point {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
}

function eqPoints(a: Point, b: Point): boolean {
    return a.x === b.x && a.y === b.y;
}

function mod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

export class Game {
    gameOver = false;
    startTime = 0;
    currentTime = 0;

    grid: Grid;
    snake: Snake;
    direction: Point = { x: 1, y: 0 };
    newDirection: Point | null;

    constructor() {
        this.grid = new Grid();
        this.snake = new Snake();
        this.newDirection = null;

        this.snake.body.forEach((p) => {
            this.grid.mark(p, CellFlags.Body);
        });
        this.grid.mark(this.snake.head, CellFlags.Head);

        this.grid.createRandomFood();
    }

    setNewDirection(dir: Point): void {
        this.newDirection = dir;
    }

    updateState(): void {
        if (!this.gameOver) {
            if (this.newDirection) {
                if (!eqPoints(addPoints(this.direction, this.newDirection), { x: 0, y: 0 })) {
                    this.direction = this.newDirection;
                }
                this.newDirection = null;
            }

            let nextPosition = addPoints(this.snake.head, this.direction);
            nextPosition = {
                x: mod(nextPosition.x, this.grid.cols),
                y: mod(nextPosition.y, this.grid.rows),
            };

            this.grid.unmark(this.snake.head, CellFlags.Head);
            const tail = this.snake.move(nextPosition);
            if (tail) {
                this.grid.unmark(tail, CellFlags.Body);
            }
            this.grid.mark(nextPosition, CellFlags.Head);

            if (this.grid.isBodyAt(nextPosition)) {
                this.gameOver = true;
            } else if (this.grid.isFoodAt(nextPosition)) {
                this.snake.grow = 3;
                this.grid.unmark(nextPosition, CellFlags.Food);
                this.grid.createRandomFood();
            }

            this.grid.mark(nextPosition, CellFlags.Body);
        }
    }
}
