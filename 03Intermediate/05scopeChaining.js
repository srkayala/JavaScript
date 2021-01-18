var name = "Srini";
console.log("Line Number 2: ", name);

function sayName(){
    var name = "Vani";
    console.log("Line Number 6: ", name);

    sayNameTwo();
    
    function sayNameTwo(){
        console.log("Line Number 9: ", name);
    }
}
sayName();
