// function isEven(element) {
//     if(element % 2 === 0) {
//          return true;
//      }
//      return false;
// }

// function isEven(element){
//     return element % 2 === 0;
// }

// var isEven = (element) => {
//     return element % 2 === 0;
// };

//console.log(isEven(3));

// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

// var result = [2, 5, 6, 8].every(isEven);
// console.log(result);

// var result = [2, 4, 6, 8].every((e) => {
//         return e % 2 === 0;
// });

var result = [2, 4, 6, 8].every( (e) => e % 2 === 0 ); // curly braces {} is not required, if we don't want to specify return.

var result2 = [2, 5, 6, 8].every( (e) => ( e % 2 === 0)); // More recommended format to remember the syntax

console.log(result);
console.log(result2);