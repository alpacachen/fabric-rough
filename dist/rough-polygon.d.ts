import { fabric } from "fabric";
import { Options } from "roughjs/bin/core";
import { IPolylineOptions } from "fabric/fabric-impl";
export declare const RoughPolygon: {
    new (points: Array<{
        x: number;
        y: number;
    }>, options?: IPolylineOptions, roughOptions?: Options): fabric.Polyline;
};
