//var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

//console.log(testArray.fill("h")); // It fills the each element of array with "h".
// Output# [ 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h' ]

//console.log(testArray.fill("h", 3)); // Starting from the 3rd position, it fills the each element of array with "h".
// Output# [ 2, 4, 6, 'h', 'h', 'h', 'h', 'h' ]

//console.log(testArray.fill("h", 2, 5)); // Starting from the 2nd position, it fills the each element of array with "h" until 4th (5-1) position.
//Output# [ 2, 4, 'h', 'h', 'h', 5, 9, 8 ]

// const myNumbers = [23, 24, 25, 55, 66, 77, 87, 98];

// var result = myNumbers.filter( (num) => num != 55 ); // It prints all elements of array except number 55
// console.log(result);

// var result2 = myNumbers.filter( (num) => num < 55); // It prints ONLY the elements of array that are less than 55
// console.log(result2);

// Note: Whenever we are passing range, start-value is ALWAYS inclusive (included) and end-value is exclusive (excluded)

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users.slice(1,3)); // ["Tim", "Ton"]
// console.log(users.slice(1)); // [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

// users.splice(1, 3, "Sri"); // starting from 1st position until it counts 3, replace all those elements with "Sri".
// console.log(users); // ['Ted', 'Sri', 'Sor', 'Sod']

users.splice(1, 3, "Sri", "Bye"); // starting from 1st position until it counts 3, replace all those elements with "Sri", "Bye".
console.log(users); // ['Ted', 'Sri', 'Bye', 'Sor', 'Sod']

