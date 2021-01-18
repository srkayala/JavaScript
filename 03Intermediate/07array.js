var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

console.log(states);
console.log(states[1]);

console.log(states.length);

states[0] = "Punjab"; // It replaces the first element (Rajasthan) with Punjab

console.log(states);

var user = ["Srini", "srkayala@gmail.com", 3, 34, true];
console.log(user);

user.pop(); // It removes the LAST element of the user array
console.log(user);

user.unshift("New Value"); // It inserts a value in the beginning of the user array. It is very expensive operation, not recommended
console.log(user);

user.shift(); // It removes the beginning element of the user array. 
console.log(user);

console.log(user.indexOf(3)); //It returns the index position of the element 3. It returns -1 if the element is not found
                              // It is very useful method especially when we have to verify something prior to delete or update

console.log(Array.from("Srini")); // It converts the string "Srini" into array ["S", "r", "i", "n", "i"]


