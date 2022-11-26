const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
const checkboxesArray = [...checkboxes]

let lastChecked;

function handleCheck(e) {
    //We need to check if shift key is down
    //and check if they checked it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
        
    }


    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))


// const checked = () => {
//     let start = 0;
//     let end = 0;
//     checkboxes.forEach(check => {
//         if(check.checked) {
//             start = check[i]
//         }
//     })
// }

