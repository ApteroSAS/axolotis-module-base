import {AnimationFrameLoop} from "./AnimationFrameLoop";
import {LoopInterface} from "./LoopInterface";
import {SetIntervalLoop} from "./SetIntervalLoop";

export const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export const INTERVAL_SET_1S = "INTERVAL_SET_1S";

export class FrameLoop {
    //TODO frame loop
    // setInterval Frameloop
    // animationFrame
    // Physic update
    // low workload adaptative loop? Like when FPS is green we execute code once evry Frame when it is not we execute once every seconde.
    // worker loop?
    // stats for all those loop (stats.js)
    // API to add task consumer?
    //callbacks:((delta:number)=>void)[] = [];


    constructor() {
        this.loopType[ANIMATION_FRAME_LOOP] = new AnimationFrameLoop(ANIMATION_FRAME_LOOP);
        this.loopType[INTERVAL_SET_1S] = new SetIntervalLoop(1000, INTERVAL_SET_1S);
    }

    loopType: { [id: string]: LoopInterface } = {};


    start() {
        for (const loopTypeKey in this.loopType) {
            this.loopType[loopTypeKey].start();
        }
    }


    enablePerfLog(activated: boolean) {
        for (const loopTypeKey in this.loopType) {
            this.loopType[loopTypeKey].enablePerfLog(activated);
        }
    }

    getPerfLog(): { [id: string]: { timeMs: number } } {
        let ret = {};
        for (const loopTypeKey in this.loopType) {
            ret = {...ret, ...this.loopType[loopTypeKey].getPerfLog()};
        }
        return ret;
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType: string = ANIMATION_FRAME_LOOP): () => void {
        return this.loopType[loopType].addLoop(loopName, iterationCallback);
    }

    getType(): string {
        return FrameLoop.name;
    }
}
