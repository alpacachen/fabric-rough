import {ICircleOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";
import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'

export const RoughCircle: {new (config: ICircleOptions, roughOption?: Options): fabric.Rect} = fabric.util.createClass(fabric.Circle, {
    type: 'roughCircle',
    instance: null,
    roughOptions: null,
    initialize: function (options, roughOption){
        this.roughOptions = roughOption
        this.callSuper('initialize', options);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            this.instance = rc.circle(0,0, this.radius * 2, this.roughOptions)
        }
    }
})

export const RoughArc: {new (config: ICircleOptions, roughOption?: Options, closed?: boolean): fabric.Rect} = fabric.util.createClass(fabric.Circle, {
    type: 'roughArc',
    instance: null,
    roughOptions: null,
    closed: null,
    initialize: function (config, roughOption, closed){
        this.roughOptions = roughOption
        this.closed = closed
        this.callSuper('initialize', config);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            this.instance = rc.arc(
                0,
                0,
                this.width,
                this.height,
                this.startAngle,
                this.endAngle,
                this.closed,
                this.roughOptions)
        }
    }
})
