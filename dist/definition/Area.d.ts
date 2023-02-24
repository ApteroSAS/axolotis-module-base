import { Point } from "./Point";
export interface Area {
    from: Point;
    to: Point;
}
export declare namespace AreaMath {
    function center(area: Area): Point;
    function size(area: Area): Point;
    function containsPoint(area: Area, point: Point): boolean;
    function offsetArea({ x, y }: Point, area: Area, output?: Area): Area;
    function equals(area1: Area, area2: Area): boolean;
    function clone(area: Area): Area;
    function forEach(area: Area, callback: (x: number, y: number) => void, increment?: number): void;
    function mk(): Area;
}
//# sourceMappingURL=Area.d.ts.map