


// Topic- constructor vs prototype vs regular function, "new" with prototype, "new" with constructor function
// Constructore function -> if regular function is called with "new" then it converted to constructore function
// Prototyep function-> any function that we add in the prototype of constructor function
// Regular function -> a normal function in JS.


// ********** Actually JS is a prototype based language, what does it means?? se below--->
// JavaScript does have classes. While JavaScript has been primarily a prototype-based language, the introduction of the class 
// syntax in ECMAScript 6 (ES6) made it easier and more intuitive to create and work with objects, making it appear more like 
// a traditional class-based language such as Java or C#.
// Prototype-based inheritance is a style of object-oriented programming used in JavaScript where objects inherit properties and 
// methods from other objects, rather than from classes (as in class-based inheritance found in languages like Java or C++). 
// In JavaScript, every object has a prototype, which is another object from which it inherits properties and methods. This 
// prototype object can have its own prototype, forming a chain known as the prototype chain.



// "new" keyword is used for making new context(new constructor function)
// If we are making Constructor function from regular function, then new keyword is used to access and define the extra 
// properties for the prototype of that function. see at last below to clarify.
// Constructor function ?? if we are using "new" keyword to make the new object for the function, then the function will be Constructor function.


// Below code "this" refers to top-level module for node.js, and window object for browser, usme we are adding properties like 
// username and others. Here below is called as constructore function, becoz we are making instance of this function using "new" 
// keyword later, see below. That's why this constructor function internally acting like classes. 
// class User{ 
//    constructor(username, loginCount, isLoggedIn) {---} 
//    return this; 
// }
// We can write either by functions or by classes (if using new keyword for making instances, then its the same thing for both cases)

// Remember we are not writing instance varibale separately here(as we do in c++ or java) here this.username already make a username
// variable that is only attached to a specific instance of object
// Although we can create instance variable same as in java or c++ --> class user{ let name="ratn"; constructore(name){this.name=name}}
// See more in class.js file

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){ console.log(`Welcome ${this.username}`);}
    return this; //if not returning anything from this constructor function then it will by-default return this object refernce
}
const userOne = new User("hitesh", 12, true) ; //making first instance of top-level module object in Node.js
const userTwo = new User("ChaiAurCode", 11, false) //making second instance of top-level module object in Node.js
console.log(userOne); // prints values of 1st object context
console.log(userOne.constructor); // gives only the refernce of above constructor function
// ************ if in above code we don't use "new" keyword then it will override the values when using userTwo, becoz it will use
// the same object reference(new creates a new object)





// ***************** Concept of "this" with new and without "new" keyword with function
function testing(myname){
    this.myname=myname
}
// here above "this" refers to newly instance of new object if "new" keyword is used while calling the function
// if calling the function normally, then "this" will refers to "Global Object" in Node.js or "Window" in browsers.





// *********************Example of --> "this" concept with "new" and without "new" keyword
function createUser(username, score){
    this.username = username
    this.score = score
    console.log(this);
}
const chai = new createUser("chai", 25); // here "this" will access this instance of object

const tea = createUser("tea", 250); // here "this" will access Global object, becoz not using "new" keyword





// ************ Concept of adding prototypes for Regular and Constructor function.
// For regular function, if we add prototype, it will not added anywhere
// now we are adding a "prototype function" into the space of function context object, but it will show error, becoz we can't add 
// any ptotype to function like that, either we have to add any prototype to "Object" or we have to use "new" keyword for creating
// a new instance for function so that the prototype gets add up in the "new instance object" space. 
function createUser(username, score){
    this.username = username
    this.score = score;  //here "this" referring to global Object, becoz not using "new" keyword
}
createUser.prototype.printMe = function(){ 
    console.log(`price is ${this.score}`);
}
const tea2 = createUser("tea", 250);
tea2.printMe(); //will give error, can't print property of undefined, becoz printMe() function doesnot addup anywhere


// ***************** Remember, To add the prototype in function, we must need a object instance for that function, that only comes by 
// "new" keyword, else whatever you add in the prototype of function, it is not adding anywhere, it lost. See below example also.
//                                        | |
//                                        | |
//                                        | |
//                                         *


// *************** Create and add function in the Prototype of anything(below adding a prototype function in createUser function)
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++; // using this, becoz it will increase the score value for the current context objects created, not for every object
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25); // new keyword is responsible for accessing and making prototype, else the prototype for regular function will not work.
const tea = createUser("tea", 250); // here not using new keyword, now tea won't have any prototype functions that we made

chai.printMe(); // gives price is 25
tea.printMe(); //will give error, becoz new keywrod not used, hence can't access the man-made functions in prototype




/*
Here's what happens behind the scenes when the new keyword is used:
1-) A new object is created: The new keyword initiates the creation of a new JavaScript object.

2-) A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means
that it has access to properties and methods defined on the constructor's prototype. (i.e ek new instance bana and)

3-) The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4-) The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object is returned.

*/





// ...............