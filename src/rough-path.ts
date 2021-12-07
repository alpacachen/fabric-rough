import {Options} from "roughjs/bin/core";
import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'
import {IPathOptions, Point} from "fabric/fabric-impl";

export const RoughPath: {new (path: string | Point[], config: IPathOptions, roughOption?: Options): fabric.Path} = fabric.util.createClass(fabric.Path, {
    type: 'roughPath',
    instance: null,
    roughOptions: null,
    initialize: function (path, options, roughOptions){
        this.roughOptions = roughOptions
        this.callSuper('initialize', path, options);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            const l = -this.pathOffset.x;
            const t = -this.pathOffset.y;
            const path = this.path
                .map((o) => o
                    .map((i, index) => {
                        if(Number.isFinite(i)){
                            if(index % 2){ // x
                                return i + l
                            }else { // y
                                return i + t
                            }
                        }else {
                            return i
                        }
                    }))
                .join(' ')
            this.instance = rc.path(path, this.roughOptions)
        }
    }
})
