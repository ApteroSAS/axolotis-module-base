//https://spin.atomicobject.com/2018/11/05/using-an-int-type-in-typescript/
export type Int = number & { __int__: void };
export const roundToInt = (num: number): Int => Math.round(num) as Int;