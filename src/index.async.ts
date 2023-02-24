import {AxModule} from "./AxModule";
import {AsyncContainerModule, interfaces} from "inversify";
import {FrameLoop} from "./services/loop/FrameLoop";
import {InputService} from "./services/input/InputService";
import {SerializerEngine} from "./services/serializer/SerializerEngine";
import {SaveManager} from "./services/save/SaveManager";
import {IdService} from "./Identifier";

export * from "./Identifier";

export class AxBasicModule implements AxModule{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(IdService).toDynamicValue(async () => {
                const {IdService} = await import("./services/IdService");
                return new IdService()
            }).inSingletonScope();
            bind(FrameLoop.name).toDynamicValue(async () => {
                return new FrameLoop()
            }).inSingletonScope();
            bind(InputService.name).toDynamicValue(async () => {
                return new InputService()
            }).inSingletonScope();
            bind(SerializerEngine.name).toDynamicValue(async () => {
                return new SerializerEngine();
            }).inSingletonScope();
            bind(SaveManager.name).to(SaveManager).inSingletonScope();

        });
    }

}
