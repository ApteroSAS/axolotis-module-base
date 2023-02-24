export interface Point {
    x: number;
    y: number;
}

export interface Vector2 extends Point {
}

export namespace VectorMath {
    /**
     *  Rotate this Vector by an angle amount.
     * @param angleRad radian
     * @param vec
     * @param center optional center otherwise {0,0}
     */
    export function rotate(vec: Vector2, angleRad, center?: Vector2): Vector2 {
        //https://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
        //https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js#L678
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        let x, y;
        if (center) {
            const cx = center.x;
            const cy = center.y;
            x = (cos * (vec.x - cx) - sin * (vec.y - cy));
            y = (sin * (vec.x - cx) + cos * (vec.y - cy));
        } else {
            x = cos * vec.x - sin * vec.y;
            y = sin * vec.x + cos * vec.y;
        }
        vec.x = x;
        vec.y = y;
        return vec;
    }
}

export namespace PointMath {

    //@deprecated
    export function offsetPoint({x, y}: Point, point: Point): Point {
        return {x: x + point.x, y: y + point.y};
    }

    export function mult(pointA: Point, scalar:number, output?: Point): Point {
        if(output){
            output.x = pointA.x *scalar;
            output.y = pointA.y *scalar;
            return output;
        }else{
            return {x: pointA.x *scalar, y: pointA.y *scalar};
        }
    }

    export function floor(pointA: Point, output?: Point): Point {
        if(output){
            output.x = Math.floor(pointA.x);
            output.y = Math.floor(pointA.y);
            return output;
        }else{
            return {x: Math.floor(pointA.x), y: Math.floor(pointA.y)};
        }
    }

    export function round(pointA: Point, output?: Point): Point {
        if(output){
            output.x = Math.round(pointA.x);
            output.y = Math.round(pointA.y);
            return output;
        }else{
            return {x: Math.round(pointA.x), y: Math.round(pointA.y)};
        }
    }

    export function ceil(pointA: Point, output?: Point): Point {
        if(output){
            output.x = Math.ceil(pointA.x);
            output.y = Math.ceil(pointA.y);
            return output;
        }else{
            return {x: Math.ceil(pointA.x), y: Math.ceil(pointA.y)};
        }
    }

    export function add(pointA: Point, pointB: Point, output?: Point): Point {
        if(output){
            output.x = pointA.x + pointB.x;
            output.y = pointA.y + pointB.y;
            return output;
        }else{
            return {x: pointA.x + pointB.x, y: pointA.y + pointB.y};
        }
    }

    export function distance(pointA: Point, pointB: Point): number {
        let y = pointB.x - pointA.x;
        let x = pointB.y - pointA.y;

        return Math.sqrt(x * x + y * y);
    }

    export function equals(pointA: Point, pointB: Point) {
        return pointA.x == pointB.x && pointA.y == pointB.y;
    }

    export function clone(point: Point): Point {
        return {
            x: point.x,
            y: point.y
        }
    }
}
