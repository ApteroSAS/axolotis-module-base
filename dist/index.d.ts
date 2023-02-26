import { AxModule } from "./AxModule";
import { ContainerModule } from "inversify";
export * from "./services/loop/FrameLoop";
export * from "./services/input/InputService";
export * from "./services/serializer/SerializerEngine";
export * from "./services/serializer/Serializer";
export * from "./services/save/SaveManager";
export { IdService } from "./services/IdService";
export * from "./Identifier";
export declare class AxBasicModule implements AxModule {
    getModule(): ContainerModule;
}
//# sourceMappingURL=index.d.ts.map