import {SaveAbstractionLevel} from "./SaveAbstractionLevel";
import * as localforage from "localforage";


export class LocalForageSave implements SaveAbstractionLevel {
    //https://localforage.github.io/localForage/#localforage
    private localforage: LocalForage;
    constructor() {
        this.localforage = localforage.createInstance({
            name: "saves"
        });
    }

    async getItem(key: string): Promise<string> {
        return this.localforage.getItem(key);
    }

    async setItem(key: string, value: string): Promise<string> {
        return this.localforage.setItem(key, value);
    }

    async removeItem(key: string): Promise<void> {
        return this.localforage.removeItem(key);
    }

    async keys(): Promise<string[]> {
        return this.localforage.keys();
    }
}
