import { ICircleOptions } from "fabric/fabric-impl";
import { Options } from "roughjs/bin/core";
import { fabric } from "fabric";
export declare const RoughCircle: {
    new (config: Partial<Pick<ICircleOptions, 'left' | 'radius' | 'top'>> & {
        roughOption?: Options;
    }): fabric.Rect;
};
export declare const RoughArc: {
    new (config: Partial<Pick<ICircleOptions, 'left' | 'top' | 'startAngle' | 'endAngle' | 'width' | 'height'>> & {
        roughOption?: Options;
        closed?: boolean;
    }): fabric.Rect;
};
