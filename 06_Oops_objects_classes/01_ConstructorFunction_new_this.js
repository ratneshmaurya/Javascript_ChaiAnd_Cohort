

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




// ****************** NEW keyword and prototype concept.

function multipleBy5(num){

    return num*5
}
multipleBy5.powerVar = 2
console.log(multipleBy5(5));
console.log(multipleBy5.powerVar);// gievs 2, but how?? becoz of prototype(as every thing in JS have linked to Object)
// here the prototype is of {}object for the above function, and in that space it is created the variable powerVar.

console.log(multipleBy5.prototype); // gives {} in node.js.





// *************** Create and add function in the Prototype of anything(below adding function in prototype of createUser function)
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

const chai = new createUser("chai", 25); // new keyword is responsible for accessing and making prototype, else the prototype for regular function not word.
const tea = createUser("tea", 250); // here not using new keyword, now tea won't have any prototype functions that we made

chai.printMe(); // gives price is 25
tea.printMe(); //will give error, becoz new keywrod not used, hence can't access the man-made functions in prototype 

/*
Here's what happens behind the scenes when the new keyword is used:

1-) A new object is created: The new keyword initiates the creation of a new JavaScript object.

2-) A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means
that it has access to properties and methods defined on the constructor's prototype.

3-) The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4-) The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object is returned.

*/












// ...............