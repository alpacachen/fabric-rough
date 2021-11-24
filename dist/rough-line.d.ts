import { fabric } from "fabric";
import { ILineOptions } from "fabric/fabric-impl";
import { Options } from "roughjs/bin/core";
export declare const RoughLine: {
    new (points: number[], config: Partial<ILineOptions> & {
        roughOption?: Options;
    }): fabric.Line;
};
