export interface PerfLogKPI {
    totalTimeMs: number,
    meanTimeMs: number,
    sampleNumber: number
}

export interface LoopInterface {
    getType(): string;

    start(): void;

    enablePerfLog(activated: boolean);

    getPerfLog(): { [id: string]: PerfLogKPI };

    removeLoop(loopName: string);

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
