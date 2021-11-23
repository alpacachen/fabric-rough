let canvas = new fabric.Canvas('c')
let rect = new RoughRect({
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    roughOption: {fill: 'green',}
})
canvas.add(rect)
