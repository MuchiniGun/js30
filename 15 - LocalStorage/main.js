const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//we will store everything in an array, it will be an array of objects
const items = JSON.parse(localStorage.getItem('items')) || []; //it'll first try and check if there is any items in local storage and if not it will fall back to an empty array
const checkBTN = document.querySelector('.checkBTN')

function addItem(e) {
    e.preventDefault()//stops the page from refreshing (because of the default form setting sending the data to a external source)
    //but here everything is happening client side so we can preventDefault
    
    //now we need to take the text that's submitted and put it into an object.
    const text = (this.querySelector('[name=item]')).value //this is "addItems" --> the form element
    const item = {
        text, // same as --> text : text or (text : `${text}`)
        done: false
    }
    items.push(item)//filling the items array
    populateList(items, itemsList)

    //local storage can only store item keys as strings
    localStorage.setItem('items', JSON.stringify(items))
    this.reset() // to reset the form element after it is submitted
}

//a second function to create the actual html
//set item to an empty array so that if nothing is submitted it'll loop over it with no major problems
function populateList(items = [], itemList) {
    //looping through every item and return an object and turn it into a string
    itemList.innerHTML = items.map((item, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked':''} />
            <label for="item${i}">${item.text}</label>
        </li>
        `;
    }).join('') //.join turns the array returned ,from the map method, into one big string
}

//event delegation taking place here. --> works for if the child class will constantly get updated
//you listen for somethin higher (the parent class) then just have to make sure that you chose what to actually listnen for in a method like the one below
// function toggleDone(e) {
//     //console.log(e.target)
//     if(!e.tartget.mathces('input')) return // skip unless it's an input
//     //go to items array, find the item that is checked and set the done to be true
//     const el = e.tartget
//     console.log(el.dataset.index)
// }

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; //to make it change between true and false
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function toggleAll (e) {
    const labelItems = itemsList.querySelectorAll('input[type=checkbox]')
    labelItems.forEach(item => {
        if(item.done) {
            item.done = !item.done;
        }
    })
}

//listening for the submit event is much more comprehensive than just listening for the click event on the button (given it's a form)
addItems.addEventListener('submit', addItem)

//we will listen for a click event on the unordered list
itemsList.addEventListener('click', toggleDone)

checkBTN.addEventListener('click', toggleAll)

populateList(items, itemsList)



const labelItems = itemsList.querySelector('input[type=checkbox]')
console.log(labelItems)