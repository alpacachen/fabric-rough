let canvas = new fabric.Canvas('c')

// const rect = new fabric.Rect({
//     left: 10,
//     top: 10,
//     width: 40,
//     height: 40,
//     fill: 'pink',
//     stroke: 'blue',
// });
// const roughRect = new RoughRect({
//     left: 60,
//     top: 10,
//     width: 40,
//     height: 40,
// },{ fill: 'pink', stroke: 'green' });
// canvas.add(rect);
// canvas.add(roughRect);

// const circle = new fabric.Circle({
//     left: 10,
//     top: 60,
//     radius: 20,
//     fill: 'white',
//     stroke: 'black',
// });
// const roughCircle = new RoughCircle({
//     left: 60,
//     top: 60,
//     radius: 20,
//     roughOption: { fill: 'white', stroke: 'black' },
// });
// canvas.add(circle);
// canvas.add(roughCircle);
// const arc = new fabric.Circle({
//     left: 10,
//     top: 110,
//     radius: 20,
//     startAngle: 0,
//     endAngle: Math.PI,
//     fill: 'lightgreen',
// });
// const roughArc = new RoughArc({
//     left: 60,
//     top: 110,
//     width: 40,
//     height: 40,
//     startAngle: 0,
//     endAngle: Math.PI,
//     closed: true,
//     roughOption: {
//         stroke: 'none',
//         fill: 'lightgreen',
//     },
// });
// canvas.add(arc);
// canvas.add(roughArc);
// const line = new fabric.Line([10, 170, 40, 200], {
//     strokeWidth: 3,
//     stroke: 'black',
// });
// const roughLine = new RoughLine([60, 170, 90, 200], { strokeWidth: 3 });
// canvas.add(line);
// canvas.add(roughLine);
// const pathStr =
//     'M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z';
// const path = new fabric.Path(pathStr, {
//     left: 10,
//     top: 220,
//     scaleX: 0.5,
//     scaleY: 0.5,
//     fill: 'purple',
//     stroke: 'green',
//     strokeWidth: 3,
// });
// const roughPath = new RoughPath(pathStr, {
//     left: 100,
//     top: 220,
//     scaleX: 0.5,
//     scaleY: 0.5,
//     fill: 'purple',
//     stroke: 'green',
//     strokeWidth: 3,
// });
// canvas.add(path, roughPath);
//
// const ellipse = new fabric.Ellipse({
//     rx: 10,
//     ry: 20,
//     left: 250,
//     top: 100,
//     fill: 'green'
// })
// const roughEllipse = new RoughEllipse({
//     rx: 10,
//     ry: 20,
//     left: 250,
//     top: 100,
//     fill: 'green'
// })
// canvas.add(ellipse, roughEllipse)

fabric.loadSVGFromURL('./light.svg',function (objects, options){
    console.log(objects.map(o => o.type), 33)
    const list = objects/*.filter(o => o.type === 'polyline')*/
    canvas.add(RoughSvg(list, {...options, left: 10, top: 300   }))
    // console.log(objects, options, elements,d,c)
    // for (let i = 0; i < elements.length; i++) {
    //     const element = elements[i]
    //     const object = objects[i]
    //     const top = object.top + 300
    //     const left = object.left + 200
    //     // console.log(object)
    //     switch (element.nodeName){
    //         case 'path':
    //             canvas.add(new RoughPath(object.d, {...object, hachureGap: 2, top, left}))
    //             break;
    //         case 'ellipse':
    //             canvas.add(new RoughEllipse({...object, top, left, hachureGap: 2}))
    //     }
    // }
    //

    const obj = fabric.util.groupSVGElements(list, {...options, left: 10, top: 300})
    canvas.add(obj)
})
