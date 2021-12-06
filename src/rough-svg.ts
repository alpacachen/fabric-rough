import {Object} from "fabric/fabric-impl";
import {RoughPath} from "./rough-path";
import {fabric} from "fabric";
import {RoughEllipse} from "./rough-ellipse";

export const RoughSvg = (objects: Object[], options: any) => {
    const {height, width} = options
    const group = new fabric.Group([], {...options, left: 30, top: 30})
    for (const object of objects) {
        const {fill, stroke, strokeWidth, left, top, opacity} = object
        const roughOption = {fill, opacity, stroke: stroke || 'none', strokeWidth, hachureGap: 2}
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
        }
    }
    return group
}