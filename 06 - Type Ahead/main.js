//link to an array of json objects
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//an empty array to put the cities into

const cities = []

//fetch returns a promise
//doesn't return the data but a promise --> to say that something will eventually be returned

//then returns a "blob" of data
//the blob has to be converted from the raw data that it is into json
////blobl.json will return another promise use --> another .then
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)) //"(...data)" to spread all the data into the array


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //figure out if the city or state matches what was searched
        //creating a variable for a regular expression. --> normally you'd say:
            //// return place.city.match(/New/i) which will search for a match using regular expression for just one word: "new" and i means insensitive (case)
            //// g --> global, i --> insensitive
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    const html  = matchArray.map( place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="name">${numberWithCommas(place.population)}</span>
        </li>
        
        `
    }).join('') //will turn into one big string (instead of returning an array)

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
