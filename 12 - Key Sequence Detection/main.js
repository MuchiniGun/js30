
const pressed = [];
const secredCode = 'owen'


window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secredCode.length -1, pressed.length - secredCode.length)
    if(pressed.join('').includes(secredCode)) {
        console.log('you found it !!')
        cornify_add()
    }
    console.log(pressed)
})


