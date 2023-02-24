export type InputType = "keyboard" | "compound_1d" | "compound_2d" | "mouse_click" | "mouse_wheel" | "mouse_axis";
export interface Input {
    getType(): InputType;
}
export declare class KeyboardKey implements Input {
    keyCode: string;
    type: "keyup" | "keydown" | "any";
    constructor(keyCode: string, type?: "keyup" | "keydown" | "any");
    getType(): InputType;
}
export declare class MouseButton implements Input {
    btn: "Mouse-0" | "Mouse-1" | "Mouse-2" | "Mouse-3" | "Mouse-4";
    type: "mousedown" | "mouseup" | "any";
    constructor(btn?: "Mouse-0" | "Mouse-1" | "Mouse-2" | "Mouse-3" | "Mouse-4", type?: "mousedown" | "mouseup" | "any");
    getType(): InputType;
}
export declare class MouseWheel implements Input {
    type: "up" | "down" | "any";
    constructor(type?: "up" | "down" | "any");
    getType(): InputType;
}
export declare class MouseAxis implements Input {
    type: "x" | "y";
    constructor(type?: "x" | "y");
    getType(): InputType;
}
export declare class Compound1DInput implements Input {
    eventXPositive: string;
    eventXNegative: string;
    constructor(eventXPositive: string, eventXNegative: string);
    getType(): InputType;
}
export declare class Compound2DInput implements Input {
    eventX: string;
    eventY: string;
    constructor(eventX: string, eventY: string);
    getType(): InputType;
}
export interface BooleanEvent {
    actionName: string;
    state: boolean;
    sourceEvt: any;
}
export interface ScalarEvent {
    actionName: string;
    state: number;
    sourceEvt: any;
}
export interface Scalar2DEvent {
    actionName: string;
    state: {
        x: number;
        y: number;
    };
    sourceEvt: any;
}
export declare class InputService {
    inputList: {
        [id: string]: Input[];
    };
    private booleanCallbackList;
    private scalarCallbackList;
    private scalar2DCallbackList;
    private booleanState;
    private scalarState;
    private scalar2DState;
    private compoundManager;
    private keyboardManager;
    private mouseManager;
    constructor();
    initializeCaptureElement(el?: HTMLElement): void;
    notifyScalar(id: string, event: ScalarEvent): void;
    notify2DScalar(id: string, event: Scalar2DEvent): void;
    notifyBoolean(id: string, event: BooleanEvent): void;
    register(actionName: string, inputObject: Input): void;
    setBooleanValue(actionName: string, state: boolean): void;
    getBooleanValue(actionName: string): boolean;
    getScalarValue(actionName: string): number;
    getScalar2DValue(actionName: string): {
        x: number;
        y: number;
    };
    getBooleanEvent(actionName: string): BooleanEvent;
    getScalarEvent(actionName: string): ScalarEvent;
    getScalar2DEvent(actionName: string): Scalar2DEvent;
    register2DScalarEvent(actionName: string, callback: (event: Scalar2DEvent) => void): () => void;
    registerScalarEvent(actionName: string, callback: (event: ScalarEvent) => void): () => void;
    registerBooleanEvent(actionName: string, callback: (event: BooleanEvent) => void): () => void;
    private registerGeneric;
    getType(): string;
}
//# sourceMappingURL=InputService.d.ts.map