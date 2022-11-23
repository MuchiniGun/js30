const canvas = document.querySelector('#draw')

//can be 3d (for games) too
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = 'BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 8

let hue = 0

//flag that we set to false. and then when we click down, we set it to true
let isDrawing = false
//where do you start the line from
let lastX = 121
let lastY = 21

//function that takes in an event
function draw(e) {
    //only want the function to work when person has clicked down
    if(!isDrawing) return; //stops function from running when not mousedown
    //everything below this line will only run when isDrawing is still false
    console.log(e)

    //
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    //start from 
    ctx.moveTo(lastX, lastY)

    //move to
    //e.offsetX & Y values are coming from the event
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    //updating the positon to start from 
    lastX = e.offsetX
    lastY = e.offsetY
    //ES6 way to reassing variables --> 'destructuring an array
    //[lastX, lastY] = [e.offsetX, e.offsetY];


    hue++;
    if(hue > 359) hue = 0; //reseting the hue
    
}

//before we do a mouse move, we need to update the lastX & lastY
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mouseup', () => isDrawing = false)
//so that if you live the window whilst clicking, it stops drawing
canvas.addEventListener('mouseout', () => isDrawing = false)

console.log(canvas)