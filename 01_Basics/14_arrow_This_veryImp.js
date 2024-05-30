

// Topic covered- This, This in Normal Function and Variable function and Arrow function (Very IMPORTANT), 
// explicit and implicit return in arrow function


// ************** IMPORTANT POINTS
// In Node.js, the behavior of this inside a function depends on how the function is called(means who called the funciton), not how it's defined.
// **1-) "This" inside a function created in an object (method): this inside the function refers to the object itself. As the function is invoked using object.
// **2-) "This" inside a function created inside another function: this refers to global object, becoz function object does not means anything
// **3-) "This" inside a function created globally(outside any object or function): the behavior of this can be a little tricky in Node.js. 
// By default, this in a global function(for node.js environment) refers to the global object beocz global object calling ths function, But in browser 
// global Object is "Window". The global object in Node.js is not very useful for most purposes.
// **4-) "This" globally (not inside any object or function): gives {},This is because there's no established context for this in this case.
// **5-) "This" inside arrow function: searches for outer context, if found any object then return object else return {}

// we will read more about "THIS" keyword later in prototypes

// **************** "This" used in function which is inside the object
const user = {
    username: "ratnesh",
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
    let username = "ratnesh"
    console.log(this); // gives Global object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz Global object object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();


const chai = function () {
    let username = "ratnesh"
    console.log(this); // gives Global object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz Global object object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();


const chai =  () => {
    let username = "ratnesh"
    console.log(this); //gives {}, becoz in arrow function, this looks for the surrounding, In this case, the arrow 
    //function is defined at the top level (outside any function) this giving {}. Try wrapping arrow function in other function
    //you will see(an Object as Output) becoz "this" pointing to the parent function's object 
    console.log(this.username); // will show undefined, as above "this" returned {}, and it doesn't have username
}
chai()


// normal function make different execution context thus this refer to the calling object
// while arrow function make same execution context thus gives {}
const person = {
    name: "Alice",
    arrowFunction: () => {
      console.log("arrow function, same execution context", this);  // gives {}
    },
    normalFunction: function(){
        console.log("normal function, different execution context",this);  // gives person object values
    }
  };
  person.arrowFunction(); 
  person.normalFunction();


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
