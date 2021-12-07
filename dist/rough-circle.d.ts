import { ICircleOptions } from "fabric/fabric-impl";
import { Options } from "roughjs/bin/core";
import { fabric } from "fabric";
export declare const RoughCircle: {
    new (config: ICircleOptions, roughOption?: Options): fabric.Rect;
};
export declare const RoughArc: {
    new (config: ICircleOptions, roughOption?: Options, closed?: boolean): fabric.Rect;
};
