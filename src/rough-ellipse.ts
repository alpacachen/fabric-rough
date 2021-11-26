import {fabric} from "fabric";
import {IEllipseOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";
import roughjs from 'roughjs/bin/rough'


export const RoughEllipse: {new (config: Partial<Pick<IEllipseOptions, 'rx' | 'ry' | 'left' | 'top'> & {roughOption?: Options}>): fabric.Ellipse} = fabric.util.createClass(fabric.Ellipse, {
    type: 'roughEllipse',
    instance: null,
    roughOptions: null,
    initialize: function (options){
        this.roughOptions = options
        this.callSuper('initialize', options);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            this.instance = rc.ellipse(0,0, this.rx * 2, this.ry * 2, this.roughOptions)
        }
    }
})
