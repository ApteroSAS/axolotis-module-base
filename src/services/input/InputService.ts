export type InputType = "keyboard" | "compound_1d" | "compound_2d" | "mouse_click" | "mouse_wheel" | "mouse_axis";

export interface Input {
    getType(): InputType;
}

export class KeyboardKey implements Input {
    /**
     *
     * @param keyCode https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
     * @param type
     */
    constructor(public keyCode: string, public type: "keyup" | "keydown" | "any" = "any") {

    }

    getType(): InputType {
        return "keyboard";
    }
}

export class MouseButton implements Input {
    constructor(
        public btn: "Mouse-0" | "Mouse-1" | "Mouse-2" | "Mouse-3" | "Mouse-4" = "Mouse-0",
        public type: "mousedown" | "mouseup" | "any" = "any") {
    }

    getType(): InputType {
        return "mouse_click";
    }
}

export class MouseWheel implements Input {
    constructor(public type: "up" | "down" | "any" = "any") {
    }

    getType(): InputType {
        return "mouse_wheel";
    }
}

export class MouseAxis implements Input {
    constructor(public type: "x" | "y" = "x") {
    }

    getType(): InputType {
        return "mouse_axis";
    }
}

export class Compound1DInput implements Input {
    constructor(public eventXPositive: string, public eventXNegative: string) {
    }

    getType(): InputType {
        return "compound_1d";
    }

}

export class Compound2DInput implements Input {
    constructor(public eventX: string, public eventY: string) {
    }

    getType(): InputType {
        return "compound_2d";
    }

}

/*
Event kind
 */

export interface BooleanEvent {
    actionName: string,
    state: boolean,
    sourceEvt: any
}

export interface ScalarEvent {
    actionName: string,
    state: number,
    sourceEvt: any
}

export interface Scalar2DEvent {
    actionName: string,
    state: { x: number, y: number },
    sourceEvt: any
}


class MouseManager {
    setupListeners(el: HTMLElement) {

        el.addEventListener('mousedown', (evt) => {
            this.checkMouseEvent(evt, "mousedown");
        });
        el.addEventListener('mouseup', (evt) => {
            this.checkMouseEvent(evt, "mouseup");
        });
        el.addEventListener("mousemove", (evt) => {
            for (const action in this.parent.inputList) {
                for (const keyListElementElement of this.parent.inputList[action]) {
                    if (keyListElementElement.getType() === "mouse_axis") {
                        let input = keyListElementElement as MouseAxis;
                        if (input.type === "x") {
                            this.parent.notifyScalar(action, {
                                sourceEvt: evt,
                                actionName: action,
                                state: evt.offsetX,
                            });
                        }
                        if (input.type === "y") {
                            this.parent.notifyScalar(action, {
                                sourceEvt: evt,
                                actionName: action,
                                state: evt.offsetY,
                            });
                        }
                    }
                }
            }
        });
        el.addEventListener("wheel", (evt: any) => {
            for (const action in this.parent.inputList) {
                for (const keyListElementElement of this.parent.inputList[action]) {
                    if (keyListElementElement.getType() === "mouse_wheel") {
                        let input = keyListElementElement as MouseWheel;
                        if (input.type === "up") {
                            throw new Error("not yet implemented");
                        }
                        if (input.type === "down") {
                            throw new Error("not yet implemented");
                        }
                        this.parent.notifyScalar(action, {
                            sourceEvt: evt,
                            actionName: action,
                            state: evt.deltaY,
                        });
                    }
                }
            }
        });
    }

    // CONSTRUCTOR
    public constructor(private parent: InputService) {

    }

    private checkMouseEvent(evt: MouseEvent, state: string) {
        //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
        let key = "Mouse-" + evt.button;
        for (const action in this.parent.inputList) {
            for (const keyListElementElement of this.parent.inputList[action]) {
                if (keyListElementElement.getType() === "mouse_click") {
                    let input = keyListElementElement as MouseButton;
                    if (input.btn == key && (state === input.type || input.type === "any")) {
                        this.parent.notifyBoolean(action, {
                            sourceEvt: evt,
                            actionName: action,
                            state: state === "mousedown",//mousedown = true, mouseup = false
                        });
                        this.parent.notifyScalar(action, {
                            sourceEvt: evt,
                            actionName: action,
                            state: state === "mousedown" ? 1.0 : 0.0,//mousedown = 1.0, mouseup = 0.0
                        });
                    }
                }
            }
        }
    }
}

class KeyboardManager {
    setupListeners() {
        // KEY UP LISTENER
        window.addEventListener('keyup', (evt) => {
            this.checkKeyBoardEvent(evt);
        });
        // KEY DOWN LISTENER
        window.addEventListener('keydown', (evt) => {
            this.checkKeyBoardEvent(evt);
        });
    }

    // CONSTRUCTOR
    public constructor(private parent: InputService) {
    }

    private checkKeyBoardEvent(evt: KeyboardEvent) {
        // check this is not a repeat
        if (evt.repeat == false) {
            // look for event in the key list
            for (const action in this.parent.inputList) {
                for (const keyListElementElement of this.parent.inputList[action]) {
                    if (keyListElementElement.getType() === "keyboard") {
                        let input = keyListElementElement as KeyboardKey;
                        if (input.keyCode == evt.code && (evt.type === input.type || input.type === "any")) {
                            this.parent.notifyBoolean(action, {
                                sourceEvt: evt,
                                actionName: action,
                                state: evt.type === "keydown",//keydown = true, keyup = false
                            });
                            this.parent.notifyScalar(action, {
                                sourceEvt: evt,
                                actionName: action,
                                state: evt.type === "keydown" ? 1.0 : 0.0,//keydown = 1.0, keyup = 0.0
                            });
                        }
                    }
                }
            }
        }
    }

}

class CompoundManager {
    // CONSTRUCTOR
    public constructor(private parent: InputService) {

    }

    public notifyActionOn(id: string) {
        // look for event in the key list
        for (const action in this.parent.inputList) {
            for (const keyListElementElement of this.parent.inputList[action]) {
                if (keyListElementElement.getType() === "compound_1d") {
                    let input = keyListElementElement as Compound1DInput;
                    if (input.eventXPositive === id || input.eventXNegative === id) {
                        let eventXPos = this.parent.getScalarEvent(input.eventXPositive);
                        let eventXNeg = this.parent.getScalarEvent(input.eventXNegative);
                        if (eventXPos && eventXNeg) {
                            this.parent.notifyScalar(action, {
                                sourceEvt: {eventXPos, eventXNeg},
                                actionName: action,
                                state: eventXPos.state - eventXNeg.state
                            });
                        }
                    }
                }
                if (keyListElementElement.getType() === "compound_2d") {
                    let input = keyListElementElement as Compound2DInput;
                    if (input.eventX === id || input.eventY === id) {
                        let eventX = this.parent.getScalarEvent(input.eventX);
                        let eventY = this.parent.getScalarEvent(input.eventY);
                        if (eventX && eventY) {
                            this.parent.notify2DScalar(action, {
                                sourceEvt: {eventX, eventY},
                                actionName: action,
                                state: {
                                    x: eventX.state,
                                    y: eventY.state,
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}

export class InputService {
    public inputList: { [id: string]: Input[] } = {};

    private booleanCallbackList: { [id: string]: ((event: BooleanEvent) => void)[] } = {};
    private scalarCallbackList: { [id: string]: ((event: ScalarEvent) => void)[] } = {};
    private scalar2DCallbackList: { [id: string]: ((event: Scalar2DEvent) => void)[] } = {};

    private booleanState: { [id: string]: BooleanEvent } = {};
    private scalarState: { [id: string]: ScalarEvent } = {};
    private scalar2DState: { [id: string]: Scalar2DEvent } = {};

    private compoundManager: CompoundManager;
    private keyboardManager: KeyboardManager;
    private mouseManager: MouseManager;

    constructor() {
        this.keyboardManager = new KeyboardManager(this);
        this.mouseManager = new MouseManager(this);
        this.compoundManager = new CompoundManager(this);
    }

    public initializeCaptureElement(el: HTMLElement = null) {
        if (!el) {
            el = window.document.body;
        }
        this.keyboardManager.setupListeners();
        this.mouseManager.setupListeners(el);
    }

    notifyScalar(id: string, event: ScalarEvent) {
        // We have found the action : find it in the callback list
        this.scalarState[id] = event;
        if (this.scalarCallbackList[id]) {
            for (const scalarCallback of this.scalarCallbackList[id]) {
                scalarCallback(event);
            }
        }
        this.compoundManager.notifyActionOn(id);
    }

    notify2DScalar(id: string, event: Scalar2DEvent) {
        // We have found the action : find it in the callback list
        this.scalar2DState[id] = event;
        if (this.scalarCallbackList[id]) {
            for (const scalarCallback of this.scalar2DCallbackList[id]) {
                scalarCallback(event);
            }
        }
    }

    notifyBoolean(id: string, event: BooleanEvent) {
        // We have found the action : find it in the callback list
        this.booleanState[id] = event;
        if (this.booleanCallbackList[id]) {
            for (const boolCallBack of this.booleanCallbackList[id]) {
                boolCallBack(event);
            }
        }
    }

    public register(actionName: string, inputObject: Input) {
        if (!this.inputList[actionName]) {
            this.inputList[actionName] = []
        }
        this.inputList[actionName].push(inputObject);
    }

    public setBooleanValue(actionName: string, state: boolean) {
        this.booleanState[actionName].state;
        this.notifyBoolean(actionName, {
            state,
            actionName,
            sourceEvt: null,
        })
    }

    public getBooleanValue(actionName: string): boolean {
        if (this.booleanState[actionName]) {
            return this.booleanState[actionName].state;
        } else {
            return false;
        }
    }

    public getScalarValue(actionName: string): number {
        if (this.scalarState[actionName]) {
            return this.scalarState[actionName].state;
        } else {
            return 0;
        }
    }

    public getScalar2DValue(actionName: string): { x: number, y: number } {
        if (this.scalar2DState[actionName]) {
            return this.scalar2DState[actionName].state;
        } else {
            return {x: 0, y: 0};
        }
    }

    public getBooleanEvent(actionName: string): BooleanEvent {
        return this.booleanState[actionName];
    }

    public getScalarEvent(actionName: string): ScalarEvent {
        return this.scalarState[actionName];
    }

    public getScalar2DEvent(actionName: string): Scalar2DEvent {
        return this.scalar2DState[actionName];
    }

    public register2DScalarEvent(actionName: string, callback: (event: Scalar2DEvent) => void) {
        return this.registerGeneric<Scalar2DEvent>(this.scalar2DCallbackList,actionName,callback);
    }

    public registerScalarEvent(actionName: string, callback: (event: ScalarEvent) => void) {
        return this.registerGeneric<ScalarEvent>(this.scalarCallbackList,actionName,callback);
    }

    public registerBooleanEvent(actionName: string, callback: (event: BooleanEvent) => void): () => void {
        return this.registerGeneric<BooleanEvent>(this.booleanCallbackList,actionName,callback);
    }

    private registerGeneric<T>(list: { [id: string]: ((event: T) => void)[] }, actionName: string, callback: (event: T) => void): () => void {
        // Check the action name callback is already registered
        if (!list[actionName]) {
            list[actionName] = [];
        }
        list[actionName].push(callback);
        return () => {
            list[actionName].filter(value => {
                return value != callback;
            })
        }
    }

    getType(): string {
        return InputService.name;
    }

}
