import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'
import {ILineOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";

export const RoughLine: {new (points: number[], config: Partial<ILineOptions> & {roughOption?: Options}): fabric.Line} = fabric.util.createClass(fabric.Line, {
    type: 'roughLine',
    instance: null,
    roughOptions: null,
    initialize: function (points, options){
        this.roughOptions = options
        this.callSuper('initialize', points, options);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            const p = this.calcLinePoints();
            this.instance = rc.line(p.x1, p.y1, p.x2, p.y2, this.roughOptions);
        }
    }
})
