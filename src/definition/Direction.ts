export const UP = "up";
export const DOWN = "down";
export const RIGHT = "right";
export const LEFT = "left";
export type Direction = "up" | "right" | "down" | "left";

export function reverse(inDir: Direction): Direction {
    switch (inDir) {
        case(UP):
            return DOWN;
        case(DOWN):
            return UP;
        case(RIGHT):
            return LEFT;
        case(LEFT):
            return RIGHT;
    }
    throw new Error();
}

export function getAdjacentRightDir(dir): Direction {
    switch (dir) {
        case UP: {
            return RIGHT;
        }
        case DOWN: {
            return LEFT;
        }
        case RIGHT: {
            return DOWN;
        }
        case LEFT: {
            return UP;
        }
    }
    throw new Error();
}