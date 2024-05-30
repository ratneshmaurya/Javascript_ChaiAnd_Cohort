

// Topic covered- This, This in Normal Function and Variable function and Arrow function (Very IMPORTANT), 
// explicit and implicit return in arrow function

// The specific value of this depends on the calling context and environment.
// "This" value tells that who called the current function or scope

// We have 2 things- Global space and Module space
// Global space have Global object. The global object in Node.js is accessible from anywhere in your Node.js application(other files can access it)
// Contains built-in objects and functions like setTimeout, console, process, etc. and also helps in running functions that are not bounded by object
// global.myGlobalVar = "This is a global variable";// Adding a property to the global object, must need global keyword
// The top level(in a file) is not the global scope. Any variables you declare at the top level of a module are not added to the global object.

// Module space have module object. Each file in Node.js is treated as a separate module/file. Variables and functions declared at the top level 
// are scoped to that module and are not automatically available in other modules unless explicitly exported.
// "this" at the Top Level: At the top level of a module, this refers to module.exports. Initially, module.exports is an empty object {}, 
// which is why this at the top level is {}.

// Now the regular function have their own "this" which either point to object calling them or Global object(i.e global object is calling them to execute)
// While arrow function doesnot have their own "this", "this" inside them will refer to its upper parent "this", thus if arrow function
// defined at top level, the "this" in arrow function inherits from module space(i.e module object, which is {})

// ************** IMPORTANT POINTS
// **1-) "This" inside a function created in an object (method): refers to the object itself. As the function is invoked using object.
// **2-) "This" inside a function created inside another function: refers to global object, global object will call it not any other object
// **3-) "This" inside a function created globally(outside any object or function): "this" (for node.js environment) refers to the global object beocz 
// global object calling ths function, But in browser global Object is "Window".
// **4-) "This" globally (not inside any object or function): gives {} becoz top level is module object
// **5-) "This" inside arrow function: searches for outer context "this", if found any object then return object else return top level module object {}



// *************** This in global defination----
console.log(this); // {}, becoz here return empty top level module object{} in node.js(vs code or IDE) while this returns window object in Browsers.


// *************** USECASE - (VERY IMPORTANT)


// ************* example-0 
// this inside the normal regular function defined in object
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



// ************** example-1 
// this inside the normal regular function
function chai(){
    let username = "ratnesh"
    console.log(this); // gives Global object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz Global object object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();



// **************** example-2 
// this inside the variable regular function
const chai = function () {
    let username = "ratnesh"
    console.log(this); // gives Global object and its properties of Node.js(not any function property)
    console.log(this.username); // will show undefined, becoz Global object object of Node.js doesnot have any username
}
console.log(this); // here return empty object{} in node.js(vs code or IDE) becoz not linked to any function/module
chai();


// **************** example-3
// this inside the arrow function
const chai =  () => {
    let username = "ratnesh"
    console.log(this); //gives empty module object {}, becoz in arrow function, this looks for the surrounding, In this case, the arrow 
    //function is defined at the top level (outside any function) this giving {}. Try wrapping arrow function in other function
    //you will see(an Object as Output) becoz "this" pointing to the parent function's object 
    console.log(this.username); // will show undefined, as above "this" returned {}, and it doesn't have username
}
chai()



//  ******************** example -4 
// using function as parent block to arrow function
// as we know "this" of arrow searches for "this" of outer block value, and "this" of outer function is "Global object", thus
// answer is "global object"
 function data(){
    const chai =  () => {
        let username = "ratnesh"
        console.log(this); // <ref *1> Object [global] {-----}
    }
    chai()
    }
    data();
    
    
// ******************** example-5
// using object-function as parent block to arrow function
// as we know "this" of arrow searches for "this" of outer block value, and "this" of outer function is "obj" defined, becoz
// this obj is calling the function greet()
    let obj={
        greet: function(){
            const arrow=()=>{
                console.log(this); // { greet: [Function: greet] }
            }
            arrow();
        }
    }
    obj.greet();


// ******************** example-6
// using arrow funtion and regular function directly in object
    const person = {
    name: "Alice",
    arrowFunction: () => {
      console.log("arrow function", this);  // gives {}, becoz arrow function rely on "this" of outer block,
        // but "this" of person object means nothing (it treated as - "this" of the enclosing scope where the object was defined), since 
        // the object literal is defined in the top level module scope, this refers to the module ({}) in Node.js or window in a browser.
    },
    normalFunction: function(){
        console.log("normal function",this);  // gives person object values, becoz "this" of regular function 
        // will either point to object calling it or "global object" if no object is calling it
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
