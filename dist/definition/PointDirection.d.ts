import { Direction } from "./Direction";
import { Point } from "./Point";
export declare function addInDirection(dir: Direction, value: number, { x, y }?: {
    x: number;
    y: number;
}): Point;
export declare function get4AdjacentDirectionPoint({ x, y }: {
    x: any;
    y: any;
}, value?: number): {
    point: Point;
    direction: Direction;
}[];
export declare function rotatePoint({ x, y }: Point, dir: Direction): Point;
//# sourceMappingURL=PointDirection.d.ts.map