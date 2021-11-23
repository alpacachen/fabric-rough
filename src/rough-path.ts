import {IPathOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";
import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'

export const RoughPath: {new (path: IPathOptions['path'], config: Options): fabric.Path} = fabric.util.createClass(fabric.Path, {
    type: 'roughPath',
    instance: null,
    roughOptions: null,
    initialize: function (path, options){
        this.roughOptions = options.roughOption
        this.callSuper('initialize', path, options);
    },
    _render: function (ctx){
        console.log('render')
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            console.log(this.pathOffset)
            const path = this.path.map((o) => o.map(i => Number.isFinite(i) ? i - this.pathOffset.x : i)).join(' ')
            console.log(path)
            this.instance = rc.path(path, this.roughOptions)
        }
    }
})
