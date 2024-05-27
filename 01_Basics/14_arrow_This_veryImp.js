

// Topic covered- This, This in Normal Function and Variable function and Arrow function (Very IMPORTANT), 
// explicit and implicit return in arrow function


// we will read more about "THIS" keyword later in prototypes
// This keyword refers to the current context(mainly Object, either our object or global object if this defined Outside globally)
// This concept in Browser: In browsers, this retuns to the global object (window), either in function or outside the function. 
// In Node.js, it defaults to the module object within a function and (empty object {})in the global scope (strict mode).

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // here this refer to the current object property, thus it returns all the properties inside of this objects
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


// *************** This in global defination----
console.log(this); // here return empty object{} in node.js(vs code or IDE) while this returns global objects and its properties in Browsers.



// *************** This in Normal Function, Variable function and Arrow function (Very IMPORTANT)
// This keyword refers to the current context(mainly Object, either our object or global object if this defined Outside globally) not meant for functions
// Remeber running all these in node.js, not in browser, as In browsers, this retuns to the global object (window), either in function or outside the function. 

function chai(){
    let username = "hitesh"
    console.log(this); // gives module/function object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz  module/function object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();


const chai = function () {
    let username = "hitesh"
    console.log(this); // gives module/function object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz module/function object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();


const chai =  () => {
    let username = "hitesh"
    console.log(this); //gives {}, becoz in arrow function, this looks for the surrounding, In this case, the arrow 
    //function is defined at the top level (outside any function) this giving {}. Try wrapping arrow function in other function
    //you will see(an Object as Output) becoz "this" pointing to the parent function's object 
    console.log(this.username); // will show undefined, as above "this" returned {}, and it doesn't have username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai()



// ****************** Arrow function writing types-------------->>
// if using curly braces then must need return keyword to return something, 
// if using paranthesis() then no need of return keyword it auto returns all

const addTwo1 = (num1, num2) => { return num1 + num2 } // as curly braces need return to return something (explicit return)

const addTwo2 = (num1, num2) =>  num1 + num2;  //if just one line of execution to return from function, then can remove all brackets (Implicit return)

const addTwo3 = (num1, num2) => ( num1 + num2 ) // same as above, just another way to write the above thing (implicit return)

//() useful when want to return a object, then as object written in {}, so JS needs return keyword, 
//so to avoid return keyword we can use () brakcets
const addTwo4 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo4(3, 4))
