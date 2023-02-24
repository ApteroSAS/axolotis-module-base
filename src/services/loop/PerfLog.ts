import {PerfLogKPI} from "./LoopInterface";

export class PerfLog {
    protected monitoringStart: (name) => void = () => {
    };
    protected monitoringEnd: (name) => void = () => {
    };
    private perfLog: { [p: string]: PerfLogKPI } = {};

    enablePerfLog(activated: boolean) {
        if (activated) {
            let start = performance.now();
            let sampleNumber = 0;
            this.monitoringStart = (loopName) => {
                start = performance.now();
            }
            this.monitoringEnd = (loopName) => {
                let time = performance.now() - start;
                if (!this.perfLog[loopName]) {
                    this.perfLog[loopName] = {totalTimeMs: 0, sampleNumber: 0, meanTimeMs: 0};
                }
                if (this.perfLog[loopName].sampleNumber > 1000) {
                    //refresh measurement
                    this.perfLog[loopName] = {totalTimeMs: 0, sampleNumber: 0, meanTimeMs: 0};
                }
                this.perfLog[loopName].totalTimeMs += time;
                this.perfLog[loopName].sampleNumber++;
                this.perfLog[loopName].meanTimeMs = this.perfLog[loopName].totalTimeMs / this.perfLog[loopName].sampleNumber;
            }
        } else {
            this.monitoringStart = () => {
            }
            this.monitoringEnd = () => {
            }
        }
    }

    getPerfLog(): { [id: string]: PerfLogKPI } {
        return this.perfLog;
    }
}
