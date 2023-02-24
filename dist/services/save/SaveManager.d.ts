import { SerializerEngine } from "../serializer/SerializerEngine";
import { SerializableType } from "../serializer/Serializer";
import { SaveAbstractionLevel } from "./SaveAbstractionLevel";
export interface SaveMeta {
    name: string;
    date: Date;
    id: string;
}
export interface Savable<T> {
    save(): T;
    load(json: T): void;
}
export interface SaveStructure extends SerializableType {
    id: string;
    version: string;
    name: string;
    date: string;
    zgame: {
        [id: string]: string;
    };
}
export declare class SaveManager {
    private serializeEngine;
    dataToSave: {
        key: string;
        data: Savable<any>;
    }[];
    saveApi: SaveAbstractionLevel;
    getType(): string;
    constructor(serializeEngine: SerializerEngine);
    registerSerializable(key: string, data: Savable<any>): void;
    isCreateNew(): Promise<boolean>;
    saveAsFile(id: string): Promise<void>;
    loadAsFile(): void;
    load(id: string): Promise<void>;
    save(id?: string, name?: string): Promise<string>;
    listSaves(): Promise<SaveMeta[]>;
    fetchLastSave(): Promise<void>;
    saveLast(): Promise<void>;
    loadLast(): Promise<void>;
    setLastSave(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=SaveManager.d.ts.map