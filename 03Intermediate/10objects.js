var user = {
    firstName : "Srinivasa", 
    lastName : "Kayala",
    role : "Developer",
    countIn : 32,
    facebookSignedIn : true
};

console.log(user.role);// Recommended way to access the object
console.log(user["lastName"]); // Not recommended as a best practice

console.log(user.countIn);
user.countIn = 45;
console.log(user.countIn);

console.log(user);
console.table(user);

