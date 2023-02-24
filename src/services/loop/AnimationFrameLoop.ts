import {LoopInterface} from "./LoopInterface";
import {PerfLog} from "./PerfLog";
import {makeid} from "../IdService";

export class AnimationFrameLoop extends PerfLog implements LoopInterface {
    getType(): string {
        return this.type;
    }

    constructor(private type: string = AnimationFrameLoop.name) {
        super();
    }

    loops: { [id: string]: { loopName: string, iterationCallback: (delta: number) => void } } = {};
    private prevTime: number = 0;

    start() {
        let type = this.getType();
        const animate = (t) => {
            try {
                this.monitoringStart(type);
                const delta = t - this.prevTime;
                this.prevTime = t;
                requestAnimationFrame(animate);
                for (const callback in this.loops) {
                    this.monitoringStart(this.loops[callback].loopName);
                    this.loops[callback].iterationCallback(delta);
                    this.monitoringEnd(this.loops[callback].loopName);
                }
                this.monitoringEnd(type);
            } catch (e) {
                console.error(e)
            }
        };
        requestAnimationFrame(animate);
    }

    removeLoop(loopName: string) {
        delete this.loops[loopName];
        this.monitoringStart(loopName); //set this loop to 0 fix
        this.monitoringEnd(loopName);
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void {
        let instanceName = loopName + "-" + makeid(5);//ensure uniqueness of loop
        this.loops[instanceName] = {
            loopName,
            iterationCallback
        };
        return () => {
            this.removeLoop(loopName);
        }
    }
}
