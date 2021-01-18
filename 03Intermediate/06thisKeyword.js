//TODO: Part 1 for this keyword
// this keyword gives access to the Global context and Global context differs with the situation.
// In case of node, it gives empty scope and in the case of console, it gives windo object.
// this keyword is used to verify what's your Global Context holds

console.log(this); // it prints empty {} when we use node. The same statement prints window object in console

var game = "basket ball";
function sayName(){
    var name = "Srini";
    console.log(this);
}
sayName();
