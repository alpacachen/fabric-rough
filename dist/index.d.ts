import { fabric } from "fabric";
import { IRectOptions } from "fabric/fabric-impl";
import { Options } from "roughjs/bin/core";
export declare const RoughRect: {
    new (config: Partial<Pick<IRectOptions, 'left' | 'width' | 'top' | 'height'>> & {
        roughOption?: Options;
    }): fabric.Rect;
};
export default RoughRect;
