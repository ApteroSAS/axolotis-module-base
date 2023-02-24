import {SaveAbstractionLevel} from "./SaveAbstractionLevel";

export class LocalStorageSave implements SaveAbstractionLevel {

    //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    async getItem(key: string): Promise<string> {
        return localStorage.getItem(key);
    }

    async setItem(key: string, value: string): Promise<string> {
        localStorage.setItem(key, value);
        return value;
    }

    async removeItem(key: string): Promise<void> {
        return localStorage.removeItem(key);
    }

    async keys(): Promise<string[]> {
        //return localStorage as any as string[];
        throw new Error();
    }
}
