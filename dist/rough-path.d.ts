import { IPathOptions } from "fabric/fabric-impl";
import { Options } from "roughjs/bin/core";
import { fabric } from "fabric";
export declare const RoughPath: {
    new (path: IPathOptions['path'], config: Options): fabric.Path;
};
