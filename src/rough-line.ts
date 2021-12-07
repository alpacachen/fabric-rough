import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'
import {Options} from "roughjs/bin/core";
import {ILineOptions} from "fabric/fabric-impl";

export const RoughLine: {new (points?: number[], config?: ILineOptions, roughOptions?: Options): fabric.Line} = fabric.util.createClass(fabric.Line, {
    type: 'roughLine',
    instance: null,
    roughOptions: null,
    initialize: function (points, options, roughOptions){
        this.roughOptions = roughOptions
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
