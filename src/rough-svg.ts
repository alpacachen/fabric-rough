import {Object} from "fabric/fabric-impl";
import {RoughPath} from "./rough-path";
import {fabric} from "fabric";
import {RoughEllipse} from "./rough-ellipse";
import {RoughRect} from "./rough-rect";
import {RoughLine} from "./rough-line";
import {RoughPolygon} from "./rough-polygon";
import {Options} from "roughjs/bin/core";
import {RoughCircle} from "./rough-circle";

export const RoughSvg = (objects: Object[], options: any, roughOptions: Options = {}) => {
    const {height, width} = options
    const group = new fabric.Group([], {...options, left: 30, top: 30})
    for (const object of objects) {
        const {fill, stroke, strokeWidth, left, top, opacity} = object
        const roughOption = {
            hachureGap: strokeWidth / 2,
            ...roughOptions,
            fill: fill as string,
            opacity,
            stroke: stroke || 'none',
            strokeWidth
        }
        const newLeft = -width/2 + left
        const newTop = -height/2 + top
        switch (object.type){
            case 'path':
                // @ts-ignore
                group.add(new RoughPath(object.path, {...object, left: newLeft, top: newTop}, roughOption));
                break
            case 'ellipse':
                // @ts-ignore
                group.add(new RoughEllipse({...object, left: newLeft, top: newTop}, roughOption));
                break
            case 'rect':
                group.add(new RoughRect({...object, left: newLeft, top: newTop}, roughOption))
                break
            case 'line':
                // @ts-ignore
                group.add(new RoughLine([object.x1, object.y1, object.x2, object.y2], {...object, left: newLeft, top: newTop}, roughOption))
                break
            case 'polyline':
                // @ts-ignore
                group.add(new RoughPolygon(object.points, {...object, left: newLeft, top: newTop}, roughOption))
                break
            case 'polygon':
                // @ts-ignore
                group.add(new RoughPolygon(object.points, {...object, left: newLeft, top: newTop}, roughOption))
                break
            case 'circle':
                group.add(new RoughCircle({...object, left: newLeft, top: newTop}, roughOption))
                break
        }
    }
    return group
}
