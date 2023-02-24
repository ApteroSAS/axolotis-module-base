import { SaveAbstractionLevel } from "./SaveAbstractionLevel";
export declare class LocalForageSave implements SaveAbstractionLevel {
    private localforage;
    constructor();
    getItem(key: string): Promise<string>;
    setItem(key: string, value: string): Promise<string>;
    removeItem(key: string): Promise<void>;
    keys(): Promise<string[]>;
}
//# sourceMappingURL=LocalForageSave.d.ts.map