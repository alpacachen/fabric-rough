import {fabric} from "fabric";
import roughjs from 'roughjs/bin/rough'
import {Options} from "roughjs/bin/core";
import {IPolylineOptions} from "fabric/fabric-impl";

export const RoughPolyline: {new (points: Array<{ x: number; y: number }>, options?: IPolylineOptions, roughOptions?: Options): fabric.Polyline} = fabric.util.createClass(fabric.Polyline,{
    type: 'roughPolyline',
    instance: null,
    roughOptions: null,
    initialize: function (points, options, roughOptions){
        this.roughOptions = roughOptions
        this.callSuper('initialize', points, options);
    },
    /**
     * Recalculates line points given width and height
     * @private
     */
    _render: function (ctx){
        const rc = roughjs.canvas(ctx.canvas);
        if(this.instance){
            rc.draw(this.instance)
        }else {
            const l = -this.pathOffset.x;
            const t = -this.pathOffset.y;
            const points = this.points.map(({x,y}) => [x+l,y+t])
            this.instance = rc.linearPath(points,this.roughOptions)
        }
    }
})
