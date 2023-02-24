import { SaveAbstractionLevel } from "./SaveAbstractionLevel";
export declare class LocalStorageSave implements SaveAbstractionLevel {
    getItem(key: string): Promise<string>;
    setItem(key: string, value: string): Promise<string>;
    removeItem(key: string): Promise<void>;
    keys(): Promise<string[]>;
}
//# sourceMappingURL=LocalStorageSave.d.ts.map