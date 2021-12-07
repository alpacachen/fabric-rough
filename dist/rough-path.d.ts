import { Options } from "roughjs/bin/core";
import { fabric } from "fabric";
import { IPathOptions, Point } from "fabric/fabric-impl";
export declare const RoughPath: {
    new (path: string | Point[], config: IPathOptions, roughOption?: Options): fabric.Path;
};
