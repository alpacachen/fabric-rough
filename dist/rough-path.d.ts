import { Options } from "roughjs/bin/core";
import { fabric } from "fabric";
import { IPathOptions } from "fabric/fabric-impl";
export declare const RoughPath: {
    new (path: string, config: Options & IPathOptions): fabric.Path;
};
