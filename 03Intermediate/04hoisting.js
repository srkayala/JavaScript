var num = 2; // Global context kicking in. The purpose of the Global context is to collect the information.

function sayHello(){
    console.log("Hey Srini");
}

sayHello(); // Execution context kicking in. The Execution context is responsible for running the function.

// window object is majoryly for browser side.

// Execution Context ---> 1) Variable Object
//                        2) Scope Chain
//                        3) this

// Execution Context has two rules:-
// 1. Function declarations are scanned and made available.
// 2. Variable declarations are scanned and made undefined.

tipper(7);
tipper("12"); // As function declarations are scanned and made available. so we can call function prior to declaration

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200"); //As variable declarations are scanned and made undefined. so we can call funciton ONLY after declaration

// console.log(name);//It prints undefined as global context knows that you are collecting the information.
// var name = "Srini"; // If we comment this line, above console message throws error as global context cannot find the variable name

console.log(name);
var name = "Srini";

function sayName(){
    var name = "Mr. Srini";
    console.log(name);
}

sayName();
console.log(name);

