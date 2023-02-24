import { LoopInterface } from "./LoopInterface";
import { PerfLog } from "./PerfLog";
export declare class AnimationFrameLoop extends PerfLog implements LoopInterface {
    private type;
    getType(): string;
    constructor(type?: string);
    loops: {
        [id: string]: {
            loopName: string;
            iterationCallback: (delta: number) => void;
        };
    };
    private prevTime;
    start(): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=AnimationFrameLoop.d.ts.map