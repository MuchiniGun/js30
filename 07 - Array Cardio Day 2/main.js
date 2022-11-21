// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  ////check that at least one thing in the array meets what you are looking for
//   const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear()
//     if(currentYear - person.year >= 19) {
//         return true
//     }
//   })

//a shorter way
//   const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear()
//     return currentYear - person.year >= 19
//   })

//an even shorter shorter way
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19)

  console.log({isAdult});
  // Array.prototype.every() // is everyone 19 or older?
  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19)
  console.log({allAdults});

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comment = comments.find(comment => comment.id === 823423)

  console.log(comment)

  // Array.prototype.findIndex() --> finding where it is in the array
  // Find the comment with this ID
  ////to delete something you need to know where it actually is in the array
  // delete the comment with the ID of 823423
  const index = comments.findIndex(comment => comment.id === 823423) //returns that it is index 1 (so position 2 in the array)

  //1 way 
  //comments.splice(index, 1)

  //another way is to copy everything else into an array:
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ]
