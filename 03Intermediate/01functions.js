function sayHello(name) {
    console.log("Hello there, Srini");
    console.log("Hello there, ", name);
    console.log(`Hello there, ${name}. How are you doing?`);
}

sayHello("Vani");
sayHello("Himasri");

function namaste(){
    return "Hello in India";
}

var greetings = namaste();
console.log(greetings);

console.log(namaste());