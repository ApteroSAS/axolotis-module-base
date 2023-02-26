import {AxModule} from "./AxModule";
import {ContainerModule, interfaces} from "inversify";
import {IdService} from "./services/IdService";
import {FrameLoop} from "./services/loop/FrameLoop";
import {InputService} from "./services/input/InputService";
import {SerializerEngine} from "./services/serializer/SerializerEngine";
import {SaveManager} from "./services/save/SaveManager";

export * from "./services/loop/FrameLoop";
export * from "./services/input/InputService";
export * from "./services/serializer/SerializerEngine";
export * from "./services/serializer/Serializer";
export * from "./services/save/SaveManager";
export {IdService} from "./services/IdService";

export * from "./Identifier";

export class AxBasicModule implements AxModule{
    getModule(): ContainerModule {
        console.log("AxBasicModule installed 2");
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(IdService.name).toDynamicValue(() => {
                return new IdService()
            }).inSingletonScope();
            bind(FrameLoop.name).toDynamicValue(() => {
                return new FrameLoop()
            }).inSingletonScope();
            bind(InputService.name).toDynamicValue(() => {
                return new InputService()
            }).inSingletonScope();
            bind(SerializerEngine.name).toDynamicValue(() => {
                return new SerializerEngine();
            }).inSingletonScope();
            bind(SaveManager.name).to(SaveManager).inSingletonScope();

        });
    }

}
