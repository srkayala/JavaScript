// For all regular function calls, this points to window object (or Global object).
// In case of node, the below console.log() statement gives empty {} object where as the same statement when we run 
// in the browser, it gives global object which is nothing but a 'window' object.

console.log(this);

var user = {
    firstName : "Srinivasa",
    lastName : "Kayala",
    courseCount : 4,
    getCourseCount : function () {
        console.log("Line 12", this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 15", this); // Here 'this belongs to a regular function so it gives global object.
        }
        sayHello();
    },
}

user.getCourseCount();