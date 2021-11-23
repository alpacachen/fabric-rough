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
let path = new fabric.Path('M 0 0 L 200 100 L 170 200 z', {fill: 'green'})
let roughPath = new RoughPath('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' })
canvas.add(roughCircle)
canvas.add(rect)
canvas.add(roughArc)
canvas.add(roughLine)
canvas.add(line)
canvas.add(path)
canvas.add(roughPath)
