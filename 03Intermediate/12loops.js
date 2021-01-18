// for(let i=0; i<10; i++){
//     console.log(i);
// }

const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
]

// for(let i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] === "string") continue; //If the element of array is equal to string, do not print
//     console.log(myStates[i]);

// for(let i = 0; i < myStates.length; i++) {
//    if(typeof myStates[i] !== "string") continue; //If the element of array is not equal to string, do not print
//    console.log(myStates[i]);

// for(let i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] !== "string") break; //Whenever the element of array is not equal to string, it stops continue the loop further
//     console.log(myStates[i]);
//}
// Note: We use the 'let' keyword to declare the variable 'i' in inside the for loop. Because as soon as the loop completes, JS Engine
// free up the memory and we cannot acces the variable 'i' outside the for loop

// let i = 0;
// while( i < myStates.length) {
//     console.log(myStates[i]);
//     i++
// }
// Added a do-while loop
// Added for loop condition

let i = 0;

 do {
    console.log(myStates[i]); // do-while loop executes the condition atleast once
    i++
} while( i < myStates.length)
