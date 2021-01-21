const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
];

//forEach() is not technicall considered as a loop as it applies method on elements of the array.
//forEach() is frequently used to loop elements of the array.

// var i = 0; // The below for loop is not recommended
// for(;;) {
//     if (i > 3) break;
//     console.log(i);
//     i++;
// }

myStates.forEach( (s) => (console.log(s))); //forEach() method has a call-back function and it automatically looks for
myStates.forEach( (s) => console.log(s));  // each element of the array.


