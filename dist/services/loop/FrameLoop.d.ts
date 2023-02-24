import { LoopInterface } from "./LoopInterface";
export declare const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export declare const INTERVAL_SET_1S = "INTERVAL_SET_1S";
export declare class FrameLoop {
    constructor();
    loopType: {
        [id: string]: LoopInterface;
    };
    start(): void;
    enablePerfLog(activated: boolean): void;
    getPerfLog(): {
        [id: string]: {
            timeMs: number;
        };
    };
    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType?: string): () => void;
    getType(): string;
}
//# sourceMappingURL=FrameLoop.d.ts.map