import {Direction, DOWN, LEFT, RIGHT, UP} from "./Direction";
import {Point} from "./Point";

export function addInDirection(dir: Direction, value: number, {x, y} = {x:0,y:0}): Point {
    switch (dir) {
        case(UP as string):
            return {x: x, y: y - value};
        case(DOWN as string):
            return {x: x, y: y + value};
        case(RIGHT as string):
            return {x: x + value, y: y};
        case(LEFT as string):
            return {x: x - value, y};
    }
    throw new Error();
}

export function get4AdjacentDirectionPoint({x, y}, value: number = 1): { point: Point; direction: Direction }[] {
    let ret = [];
    ret.push({
        direction: UP,
        point: addInDirection(UP, value, {x, y})
    });
    ret.push({
        direction: RIGHT,
        point: addInDirection(RIGHT, value, {x, y})
    });
    ret.push({
        direction: DOWN,
        point: addInDirection(DOWN, value, {x, y})
    });
    ret.push({
        direction: LEFT,
        point: addInDirection(LEFT, value, {x, y})
    });
    return ret;
}

/* reference is UP so if UP is passed as parameters nothing will be rotated*/
export function rotatePoint({x, y}:Point,dir: Direction):Point{
    //Note clockwize and counter clock wize are inverted since the y axis goes to bottom
    switch (dir) {
        case(UP as string):
            return {x: x, y: y};
        case(DOWN as string)://180 deg
            return {x: -x, y: -y};
        case(RIGHT as string):
            //replace (x,y) with (−y,x). That will rotate 90 degrees counterclockwise about the origin.
            return {x: -y, y:x};
        case(LEFT as string):
            //To rotate clockwise, replace (x,y) with (y,−x).
            return {x: y, y: -x};
    }
    throw new Error();
}