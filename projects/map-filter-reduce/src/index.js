

import emojipedia from './emojipedia';

let newMeaningArray = []

newMeaningArray = emojipedia.map(term => {
    return term.meaning.substring(0,100)
})

console.log(newMeaningArray);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const double = (x) => {
//     return x*2;
// };

// const newNumbers = numbers.map(double)
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const byTwo = (n) => {
//     return n%2===0?capture.push(n):null;
// };

// const capture = [];

// numbers.filter(byTwo)
// console.log(capture);

//Reduce - Accumulate a value by doing something to each item in an array.

// const total = numbers.reduce( (accumulator, currentNumber) => {
//     return accumulator + currentNumber;
// } )

// console.log(`Filter: ${total}`);

//Find - find the first item that matches from an array.
// const fixTarget = (n) => {
//     targetLoc.push(n)
//     targetLoc.push(numbers.indexOf(n))
// }
// const targetLoc = [];
// numbers.find(n => n>50&&n%2===0?fixTarget(n):null
//     )

// console.log(`Target_Number: ${targetLoc[0]}, Location: ${targetLoc[1]}`);

//FindIndex - find the index of the first item that matches.

// let friend = null;

// friend = numbers.findIndex((n) => {
//     return n === targetLoc[0]
// })

// console.log(`Friend: ${numbers[friend]}, Location: ${friend}`);
