console.log("Connected with external JavaScript file");

// Regular for loop - used when we know the specified no of times the code has to execute

/*for (var num = 0; num < 5; num++) 
	console.log("Current value of num: " + num);
*/

// forEach loop syntax - used when each element has to be parsed or traversed

/*let fruits = ['banana', 'apple', 'orange', 'peach', 'honey-dew'];
fruits.forEach(item => console.log(item));
*/
//for of loop syntax - used for iterables. ie, arrays and strings

/*let fruits = ['banana', 'apple', 'orange', 'peach', 'honey-dew'];
for (items of fruits) {
	console.log(items);
}*/

//for in loop syntax - used for enumerables. ie, objects; Also used for iterables in which index acts as key
// It prints the index of each element

/*let fruits = ['banana', 'apple', 'orange', 'peach', 'honey-dew'];
for (item in fruits) {
	console.log(item);
}*/

// while loop - Use when we know the specified expression depending on whose value the code should execute

/*var i = 0;
while (i<5) {
	console.log("The current value of i is: " + i);
	i++;
}*/

// do while loop - Use when we know that atleast code must execute once irrespective of the condition

/*var i = 0;
do {
	console.log("The current value of i is: " + i);
	i++;
} while (i < 5);*/

// shift operator (<< or >>)
// left shift -  shift bits in left direction for specified value
// right shift - shift bits in right direction for specified value

/*var n1 = 8, n2= 2;
console.log(" n1 << n2 : " + (n1 << n2));
console.log(" n1 >> n2 : " + (n1 >> n2));*/

// Bit wise operators - It computes by going bit by bit
// Bits of both operand is checked irrespective of what first operand bit is
/*four major bit operators are :
   & - bitwise and, which returns 1 if both bits are 1 else 0.
   | - bitwise or, which returns 1 if either of bits is 1 else 0.
   > - bitwise xor, which returns 1 if both bits are different else 0.
   ? - bitwise not, which changes 1 to 0 and vice-versa.*/

/*var a=8, b=2;
console.log('a&b: ' + (a&b));*/

// Ternary operator(?:) ===> Alternative of if-else

/*var a = 2;
console.log((a==2) ? console.log("Okay") : console.log("Not Okay"));*/

// Hoisting - Javascript engine allocates memory to variable and function during creation phase, before execution.
// function is fully hoisted where as for variable, left part is hoisted.
// Context has two types - Execution context and Global Execution context.
// Every execution context has a creation phase and an execution phase.

/*console.log(a); // undefined - it won't throw any error as variables declaration using var keyword are partially hoisted
var a = 10;
console.log(a); // 10*/

// we can stop hoisting using key words 'let' or 'const'. See examples below

/*console.log(a); // It throws error as variable declaration using let keyword is not hoisted
let a = 10;
console.log(a); */

/*console.log(a); // It throws error as variable declaration using const keyword is not hoisted
const a = 10;
console.log(a); */

/*var favouriteFood = "Paneer Tikka";

var meal = function() {

	console.log("My favourite food is: " + favouriteFood);
	favouriteFood = "Mushrooms Tikka";

	console.log("My new favourite food is: " + favouriteFood);
}

meal();*/

 
// 'let' keyword used as a block level scope in function. see example below.

/*let weather = 'sunny'; // sunny - global level scope}

function changeWeather() {
	 weather = 'rainy'; // rainy - block level scope}
	console.log("Changed weather is: " + weather); 
}

changeWeather();

console.log("Original weather is: " + weather); */


// 'const' keyword is used to declare the variables whose value is not going to change once defined. see example below.

/*const weather = 'sunny'; // sunny - constant variable and its value never changed}

function changeWeather() {
	 weather = 'rainy'; // It throws error. Assignment to constant variable is not possible
	console.log("Changed weather is: " + weather); 
}

changeWeather();

console.log("Original weather is: " + weather); */

// Difference between Global scope (Var) and Block scope (let). See example below.

/*console.log("Global Scope:")

for(var g_scope = 1; g_scope < 5; g_scope ++) {

	console.log(g_scope);
}

console.log(g_scope) // The vaiable can be access outside the for loop - It prints the value as 5

console.log("Block Scope:")

for (let b_scope = 1; b_scope <5; b_scope ++) {

	console.log(b_scope);
}

console.log(b_scope) // The variable can't be access outside the for loop - It throws error "Uncaught reference error - variable b_scope is not defined".
*/

// Const keyword - Const reference and value can be changed through its property. See example below.
// BELOW SYNTAX IS WRONG. WILL LOOK INTO IT LATER.

/*const object = {firstName: "Srinivasa"};

object.age = 43;

object.forEach(item => console.log(item));

object.firstName = "Srini";

object.forEach(item => console.log(item));*/

// Data types - Primitive ==> number, string, boolean, null, undefined, Symbol

/*var a = 10;
var b = -10;
var c = 99.99;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

var s1 = "Hello Srini";
var s2 = 'Hi Srini';

var age = 43;
var s3 = `Srini is ${age} years old`
console.log(s3);

console.log(typeof(s1));
console.log(typeof(s2));
console.log(typeof(s3));*/


// Data types - Non-Primitive ==> object

/*var fruits = {'apple': 'red',
              'banana': 'yellow',
              'watermelon': 'green',
              'mango': 'yellow'
          };

console.log("The color of watermelon is " + fruits['watermelon']);
console.log("The color of mango is " + fruits.mango);*/

/*let animal = { 'name': 'cat',
               'color': 'white',
               eat() {

               	console.log(`The animal ${this.name} is eating...`);

                     },
                sleep: function() {

                	console.log(`The animal ${this.name} is sleeping....`);
                }
             }

animal.eat();
animal.sleep();
console.log(animal['color']);
console.log(animal.name);
console.log(typeof(animal));*/


/*let animal = new Object();

animal.name = 'dog';
animal['color'] = 'black';
animal.eat = function() {

	console.log(`The animal ${name} is eating now`);
}
animal.eat();*/

// Object Comparison

/*let animal = new Object();

let cat = animal;
let dog = animal;

console.log(cat == dog); // true - same object reference

let horse = new Object(); // new address allocated

console.log(cat == horse); // false - different object references

console.log(cat === horse); // false

console.log(Object.is(cat, horse)); // false

console.log(JSON.stringify(cat) === JSON.stringify(horse)); // true - It converts the object data type to string data type and then compare
*/

// Arrays - we can store both homogeneous and hetrogeneous elements inside array

/*var arr = [1, true, 'Hello', 'Hi'];
console.log(arr[2]);

var arr2 = [1, 'hi', , 'hello'];
console.log(arr2[2]);

let arr3 = new Array(23, 'cat', new Object());
arr3.forEach(item => console.log(item));
console.log(typeof(arr3));
*/

// Array methods:- push() --> to add element at the end; pop() --> to remove element at the end
//                 unshift() --> to insert element at the first index; shift() --> to remove element at the first index

/*let arr1 = [1,2,3,5,7];
arr1.push(8);
for(i=0; i<arr1.length; i++){
	console.log(arr1[i]);
}

arr1.pop();
for(i=0; i<arr1.length; i++){
	console.log(arr1[i]);
}*/

// function definition - 1. Using function keyword - Get its definition at compile time - 
//                          It is fully hoisted so we can call function first and then define.
//
//                       2. Using function expression - Starts with var and assignment operation -
//                          It is not hoisted so we must define the function expression first and then call the expression -
//                          Get its definition at run time.

/*console.log(print(5, 7));

function print(a, b){

	return a + b;
}*/


/*var addTwoNumbers = function(n1, n2) {

	return n1 + n2;
}

console.log(addTwoNumbers(11, 43));*/

// IIFE - Immediately Invoked Function Expression
//        It executes immediately. No need to call explicitly

/*(function(a, b)  
   {
   	 console.log(a+b);
   }
)(67, 56)*/

/*
// function methods - 1. call() 2. apply() 3. bind()

// Create animal object;
let animal = {
	name:'Dog',
	eat(n, x){
		console.log(this.name + " is eating " + n + " " + x);
	}
};

// Create human object;
let human = {
	name: 'Srini'
};

// run animal object of eat() method;
animal.eat(2, 'bones');

// Borrow the animal object of eat() method to human object. - By call()
animal.eat.call(human, 7, 'Chapatis');

// Borrow the animal object of eat() method to human object. - By apply()
//Note: for apply() method, we have to pass the arguments in the form of array.
animal.eat.apply(human, [2, 'Bananas']);

// Borrow the animal object of eat() method to human object. - By bind()
//Note: bind() returns the function definition that can be called later.

let humanEat = animal.eat.bind(human);
humanEat(10, 'Mangoes');
*/

// Example without Arrow (=>) function

/*
let testObject = {

	name: 'Srini',
	print: function() {
		console.log('a', this);

		var duplicatePrint = function() {
			console.log('b', this);
		}
		duplicatePrint(); // refers to window object
	}
}
testObject.print(); // refers to testObject
*/

// Example with Arrow (=>) function

/*
let testObject = {

	name: 'Srini',
	print: function() {
		console.log('a', this);

		var duplicatePrint = () => {
			console.log('b', this);
		}
		duplicatePrint(); // refers to testObject
	}
}
testObject.print(); // refers to testObject
*/

