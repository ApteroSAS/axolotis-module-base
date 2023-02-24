import { PerfLogKPI } from "./LoopInterface";
export declare class PerfLog {
    protected monitoringStart: (name: any) => void;
    protected monitoringEnd: (name: any) => void;
    private perfLog;
    enablePerfLog(activated: boolean): void;
    getPerfLog(): {
        [id: string]: PerfLogKPI;
    };
}
//# sourceMappingURL=PerfLog.d.ts.map