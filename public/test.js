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
let path = new fabric.Path('\'M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\\\n' +
    'c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\\\n' +
    '0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\\\n' +
    'c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\\\n' +
    '-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\\\n' +
    '12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\\\n' +
    '-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z')
let roughPath = new RoughPath('\'M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\\\n' +
    'c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\\\n' +
    '0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\\\n' +
    'c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\\\n' +
    '-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\\\n' +
    '12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\\\n' +
    '-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z', { fill: 'purple', left: 50, top: 50, width: 100, height: 100 })

fabric.loadSVGFromURL('./snow.svg',function (objects, options){
    console.log(objects, options)
    const obj = fabric.util.groupSVGElements(objects, options);
    canvas.add(obj);
})
canvas.add(roughCircle)
canvas.add(rect)
canvas.add(roughArc)
canvas.add(roughLine)
canvas.add(line)
canvas.add(path)
canvas.add(roughPath)
