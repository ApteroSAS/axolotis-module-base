import {saveAs} from 'file-saver';
import {SerializerEngine} from "../serializer/SerializerEngine";
import {SerializableType} from "../serializer/Serializer";
import {SaveAbstractionLevel} from "./SaveAbstractionLevel";
import {LocalForageSave} from "./LocalForageSave";
import {inject, injectable} from "inversify";
import {makeid} from "../IdService";

export interface SaveMeta {
    name: string,
    date: Date,
    id: string
}

export interface Savable<T> {
    save(): T,

    load(json: T): void,
}

export interface SaveStructure extends SerializableType {
    id: string;
    version: string,
    name: string,
    date: string,
    zgame: { [id: string]: string }
}

const SAVE_PREFIX = "SAVE-";
const LAST_SAVE = "1-LAST-SAVE";
const LATEST_VERSION = "1.0.0";

@injectable()
export class SaveManager {
    dataToSave: { key: string, data: Savable<any> }[] = [];
    saveApi: SaveAbstractionLevel = new LocalForageSave();

    getType(): string {
        return SaveManager.name;
    }

    constructor(@inject(SerializerEngine.name) private serializeEngine: SerializerEngine) {
    }

    registerSerializable(key: string, data: Savable<any>) {
        if (!data) throw new Error();
        this.dataToSave.push({key, data});
    }

    async isCreateNew(): Promise<boolean> {
        return !await this.saveApi.getItem(LAST_SAVE);
    }

    async saveAsFile(id: string) {
        const item = await this.saveApi.getItem(SAVE_PREFIX + id);
        //Only simple deserialization with JSON parse since we only needs the meta data.
        const json = JSON.parse(item);
        const blob = new Blob([item], {type: "application/json"});
        //https://www.npmjs.com/package/file-saver
        saveAs(blob, json.name + ".json");
    }

    loadAsFile() {
        //TODO
        throw new Error("unimplemented")
    }

    async load(id: string) {
        await this.setLastSave(id);
        let item: SaveStructure = this.serializeEngine.deserializeFromString<SaveStructure>(await this.saveApi.getItem(SAVE_PREFIX + id));
        if (item.version !== LATEST_VERSION) {
            throw new Error("Incompatibility between save version: " + item.version + "/" + LATEST_VERSION);
            //TODO implement version migrator
        }
        console.log("loading save : " + item.name + " / " + item.id);
        for (const data of this.dataToSave) {
            let storedData = item.zgame[data.key];
            data.data.load(storedData);
        }
    }

    async save(id: string = null, name: string = "New Save"): Promise<string> {
        await this.setLastSave(id);
        let save: SaveStructure;
        if (!id) {
            //create new save overwrite otherwise
            id = makeid(10);
            save = {
                version: LATEST_VERSION,
                serializeID: null,
                name,
                id,
                date: new Date().toISOString(),
                zgame: {}
            }
        } else {
            //Only simple deserialization with JSON parse since we only needs the meta data.
            const previous = JSON.parse(await this.saveApi.getItem(SAVE_PREFIX + id));
            save = {
                version: LATEST_VERSION,
                serializeID: null,
                name: previous.name,
                id,
                date: new Date().toISOString(),
                zgame: {}
            }
        }
        for (const data of this.dataToSave) {
            save.zgame[data.key] = data.data.save();
        }
        await this.saveApi.setItem(SAVE_PREFIX + id, this.serializeEngine.serializeToString(save));
        return id;
    }

    async listSaves(): Promise<SaveMeta[]> {
        let ret = [];
        for (const key of await this.saveApi.keys()) {
            if (key.startsWith(SAVE_PREFIX)) {
                //Only simple deserialization with JSON parse since we only needs the meta data.
                let save: SaveStructure = JSON.parse(await this.saveApi.getItem(key)) as any;
                ret.push({
                    id: save.id,
                    name: save.name,
                    date: new Date(save.date)
                })
            }
        }
        ret.sort(function (a, b) {
            return b.date - a.date;
        });
        return ret;
    }

    async fetchLastSave() {
        if (!await this.saveApi.getItem(LAST_SAVE)) {
            const saveMetas = await this.listSaves();
            if (saveMetas.length > 0) {
                //load the latest save in memory
                await this.setLastSave(saveMetas[0].id);
            } else {
                //create a new game on load it
                await this.setLastSave(await this.save(null));
            }
        }
    }

    async saveLast() {
        await this.fetchLastSave();
        await this.save(await this.saveApi.getItem(LAST_SAVE));
    }

    async loadLast() {
        await this.fetchLastSave();
        const saveId = await this.saveApi.getItem(LAST_SAVE);
        await this.load(saveId);
    }

    async setLastSave(id: string): Promise<void> {
        await this.saveApi.setItem(LAST_SAVE, id);
    }

    async delete(id: string) {
        console.log("delete : " + SAVE_PREFIX + id);
        await this.saveApi.removeItem(SAVE_PREFIX + id);
    }
}
