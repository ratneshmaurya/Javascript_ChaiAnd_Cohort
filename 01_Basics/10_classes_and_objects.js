
//There are different ways to create objects in JS,-> classes, one time object, Constructor Functions (without classes)

//1. Using Classes (ES6 and above): Classes provide a structured way to define objects and their properties and methods. 
//They resemble classes in other object-oriented languages.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice


//2. Using Object Literals (without classes): This is the most fundamental way to create objects in JavaScript. 
//You define key-value pairs enclosed in curly braces {}.

const person2 = {
  name: "Bob",
  age: 25,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
person2.greet(); // Output: Hello, my name is Bob


//3. Using Constructor Functions (without classes): You define a function (blueprint) to create objects. 
//The new keyword is used to create new instances.
//not more preferable, instead use class method type

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const user3 = new User("Charlie", 40);
user3.greet(); // Output: Hello, my name is Charlie