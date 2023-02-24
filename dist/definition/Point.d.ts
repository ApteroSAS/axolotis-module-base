export interface Point {
    x: number;
    y: number;
}
export interface Vector2 extends Point {
}
export declare namespace VectorMath {
    function rotate(vec: Vector2, angleRad: any, center?: Vector2): Vector2;
}
export declare namespace PointMath {
    function offsetPoint({ x, y }: Point, point: Point): Point;
    function mult(pointA: Point, scalar: number, output?: Point): Point;
    function floor(pointA: Point, output?: Point): Point;
    function round(pointA: Point, output?: Point): Point;
    function ceil(pointA: Point, output?: Point): Point;
    function add(pointA: Point, pointB: Point, output?: Point): Point;
    function distance(pointA: Point, pointB: Point): number;
    function equals(pointA: Point, pointB: Point): boolean;
    function clone(point: Point): Point;
}
//# sourceMappingURL=Point.d.ts.map