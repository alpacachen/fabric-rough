import {IPathOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";
import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'

export const RoughPath: {new (path: IPathOptions['path'], config: Options): fabric.Path} = fabric.util.createClass(fabric.Path, {
    type: 'roughPath',
    instance: null,
    roughOptions: null,
    initialize: function (path, options){
        this.roughOptions = options
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
