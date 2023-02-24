import { LoopInterface } from "./LoopInterface";
import { PerfLog } from "./PerfLog";
export declare class SetIntervalLoop extends PerfLog implements LoopInterface {
    private intervalMs;
    private type;
    loops: {
        [id: string]: {
            loopName: string;
            iterationCallback: (delta: number) => void;
        };
    };
    private prevTime;
    constructor(intervalMs: number, type?: string);
    getType(): string;
    start(): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=SetIntervalLoop.d.ts.map