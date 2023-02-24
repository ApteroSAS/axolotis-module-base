export interface SaveAbstractionLevel {
    getItem(key: string): Promise<string>;
    setItem(key: string, value: string): Promise<string>;
    removeItem(key: string): Promise<void>;
    keys(): Promise<string[]>;
}
//# sourceMappingURL=SaveAbstractionLevel.d.ts.map