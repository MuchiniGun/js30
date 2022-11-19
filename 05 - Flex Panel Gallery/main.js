const panels = document.querySelectorAll('.panel') // select All to receive a node list of all the panels we have

function toggleOpen() {
    console.log('EHHHHHHHHHHH')
    this.classList.toggle('open')
}

//normally you'd do this
// function toggleActive() {
//     //this.classList.toggle('open-active)
// }

//however we will do this
//since there will be multiple transitionends fired at once
//to check what's being transitioned you can:
//console.log(e.propertyName) --> only if e is parsed through as a parameter of the function
//we will pass through e
function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))  
//we don't add the function like "toggleOpen()" bcs that'd make it run on page load
//we add it w/o parenthesis so it can reference the function
//so when someone does the action('click'), find the function and run it. 