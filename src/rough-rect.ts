import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'
import {IRectOptions} from "fabric/fabric-impl";
import {Options} from "roughjs/bin/core";

export const RoughRect: {new (config: Partial<Pick<IRectOptions, 'left' | 'width' | 'top' | 'height'>> & {roughOption?: Options}): fabric.Rect} = fabric.util.createClass(fabric.Rect, {
    type: 'roughRect',
    instance: null,
    roughOptions: null,
    initialize: function (options){
        this.roughOptions = options.roughOption
        this.callSuper('initialize', options);
    },
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            this.instance = rc.rectangle(
                -this.width/2,
                -this.height/2,
                this.width,
                this.height,
                this.roughOptions
                )
        }
    }
})
