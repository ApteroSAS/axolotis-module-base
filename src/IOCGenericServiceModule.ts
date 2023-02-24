import {SaveManager} from "@root/game/main/modules/services/generic/save/SaveManager";
import {SerializerEngine} from "@root/game/main/modules/services/generic/serializer/SerializerEngine";
import {IdService} from "@root/game/main/modules/services/generic/IdService";
import {InputService} from "@root/game/main/modules/services/generic/input/InputService";
import {FrameLoop} from "@root/game/main/modules/services/generic/loop/FrameLoop";
import {
    SimpleCollisionDetection
} from "@root/game/main/modules/services/generic/simple-collision/SimpleCollisionDetection";

import {ContainerModule, interfaces} from "inversify";

/* service that are generic logic (So exportable or libificable or madularizable) */
export const iocUtilsModule = new ContainerModule((bind: interfaces.Bind) => {
    bind(IdService.name).toDynamicValue(() => {
        return new IdService()
    }).inSingletonScope();
    bind(FrameLoop.name).toDynamicValue(() => {
        return new FrameLoop()
    }).inSingletonScope();
    bind(SimpleCollisionDetection.name).toDynamicValue(() => {
        return new SimpleCollisionDetection()
    }).inSingletonScope();
    bind(InputService.name).toDynamicValue(() => {
        return new InputService()
    }).inSingletonScope();
    bind(SerializerEngine.name).toDynamicValue(() => {
        return new SerializerEngine();
    }).inSingletonScope();
    bind(SaveManager.name).to(SaveManager).inSingletonScope();

});
