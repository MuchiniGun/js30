//first need to select all three inputs
//so this will select all the inputs on the page
//querySelector returns a node list of all the items you are returning, not an array
const inputs = document.querySelectorAll('.controls input')


function handleUpdate() {

    //dataset is an object that will contain all the data attributes from the specific element
    //in this case we extract "data-sizing" --> a data class that we made up in the html
    const suffix = this.dataset.sizing || ''; // || '' is "or nothing" for the color one which has no suffix
    console.log(suffix)

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    
}

//listening for a change of event on each input
inputs.forEach(input => input.addEventListener('change', handleUpdate))
//to make it as constant as possible, we can listen for the 'mousemove' update
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

