let canvas = new fabric.Canvas('c')
let rect = new RoughRect({
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    roughOption: {fill: 'green',}
})
let roughCircle = new RoughCircle({
    left: 30,
    top: 30,
    radius:10,
    startAngle: 0,
    endAngle: Math.PI,
    roughOption: {fill: 'green', stroke: 'blue'}
})
let roughArc = new RoughArc({
    left: 30,
    top: 30,
    width: 50,
    height: 20,
    startAngle: 0,
    endAngle: Math.PI * 1.5,
    closed: true,
    roughOption: {fill: 'green', stroke: 'blue'}
})

let roughLine = new RoughLine([0,0,30,30],{
    stroke: 'pink',
    strokeWidth: 1,
    selectable: false,
    evented: false,
})
let line = new fabric.Line([0,0,30,30],{
    stroke: 'red',
    strokeWidth: 4,
})
canvas.add(roughCircle)
canvas.add(rect)
canvas.add(roughArc)
canvas.add(roughLine)
canvas.add(line)
