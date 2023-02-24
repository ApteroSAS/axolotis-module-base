import {LoopInterface} from "./LoopInterface";
import {PerfLog} from "./PerfLog";
import {makeid} from "../IdService";

export class SetIntervalLoop extends PerfLog implements LoopInterface {
    loops: { [id: string]: { loopName: string, iterationCallback: (delta: number) => void } } = {};
    private prevTime: number = 0;

    constructor( private intervalMs: number, private type: string = SetIntervalLoop.name) {
        super();
    }

    getType() {
        return this.type;
    }

    start() {
        let loopName = this.getType();
        const animate = (t) => {
            this.monitoringStart(loopName);
            const delta = t - this.prevTime;
            this.prevTime = t;
            for (const callbackKey in this.loops) {
                this.monitoringStart(this.loops[callbackKey].loopName);
                this.loops[callbackKey].iterationCallback(delta);
                this.monitoringEnd(this.loops[callbackKey].loopName);
            }
            this.monitoringEnd(loopName);
        };
        setInterval(animate, this.intervalMs);
    }

    removeLoop(loopName: string) {
        delete this.loops[loopName];
        this.monitoringStart(loopName); //set this loop to 0 fix
        this.monitoringEnd(loopName);
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void {
        let instanceName = loopName;
        if (this.loops[instanceName]) {
            instanceName = loopName + "-" + makeid(5);
        }
        this.loops[instanceName] = {
            loopName,
            iterationCallback
        };
        return () => {
            this.removeLoop(loopName);
        }
    }


}
