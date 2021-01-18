// TODO: falsy values
//       undefined
//       null
//       0
//       ""
//       Nan

// var user = "";

// if (user) {
//     console.log("Condition is True"); // It won't print any thing as user is a empty string and it is a falsy value
// }

var user = "2";

if (2 == user){
    console.log("Condition is true"); // The condition (true) prints though the data types are mismatch. It is loosely coupled
}

if (2 === user){
    console.log("Condition is true"); // The condition (false) won't print as coerison checks the data types. It is tightly coupled.
}