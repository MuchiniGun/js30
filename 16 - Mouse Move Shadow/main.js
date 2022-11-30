const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

function shadow(e) {
    //console.log(e)
    //short form for line 8 & 9:
    //const {offsetWidth: width, offsetHeight: height} = hero;
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    const walk = 100; //100px

    // const (offsetX: x, offsetY: y) = e;
    let x = e.offsetX;
    let y = e.offsetY;

    //normalisation to modify x and y when mouse in a div of a child element. (don't want it to reset)

    //this will always reference "hero" in this case
    //but e.target can reference what's inside the this ('hero'), for example the child element ('text')
    //so if there is a place that is not 'hero'
    if(this != e.target) {
        //so just add the offset within the text element (e.target) to the x and the y
        x = x + e.target.offsetLeft;
        y = y+ e.target.offsetTop;
    }

    
    //offsetting it that we go to +50 and -50 instead of 0 and 100
    const xWalk = Math.round((x/width * walk) - (walk / 2));
    const yWalk = Math.round((y/width * walk) - (walk / 2));

    console.log(xWalk, yWalk)
    
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 5px red
    `
}

hero.addEventListener('mousemove', shadow)