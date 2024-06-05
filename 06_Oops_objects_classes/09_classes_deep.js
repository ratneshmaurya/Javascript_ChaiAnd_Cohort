

// In JavaScript, instance variables (also known as instance properties) can be defined within classes, and they are specific to each 
// instance of the class. Prior to ES6, JavaScript didn't have a formal class syntax, but with the introduction of ES6, the class 
// syntax provides a more straightforward way to define classes and their instance variables.

// Here’s how you can define and use instance variables in a class:

// ************* 1-) Using the Constructor: The most common way to define instance variables is within the constructor method of the class.
class Person {
    constructor(name, age) {
      this.name = name; // Instance variable
      this.age = age;   // Instance variable
    }
  
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  const person1 = new Person('Alice', 30);
  console.log(person1.describe()); // Output: Alice is 30 years old.
  


// ************ Public Instance Fields (ES2022): With ES2022, JavaScript introduced public instance fields, allowing you to define 
// instance variables directly within the class body.
class Person {
    name = 'default name'; // Public instance field
    age = 0;               // Public instance field
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  const person2 = new Person('Alice', 30);
  console.log(person2.describe()); // Output: Alice is 30 years old.

  
// ************* Private fields: JavaScript also supports private instance fields, which are declared using a # prefix. These fields are 
// truly private and cannot be accessed outside of the class.
class Person {
    #name; // Private instance field
    #age;  // Private instance field
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    describe() {
      return `${this.#name} is ${this.#age} years old.`;
    }
  }
  
  const person3 = new Person('Alice', 30);
  console.log(person3.describe()); // Output: Alice is 30 years old.
  console.log(person3.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

  
// ****************** Passing no-arguments in constructor
// When new Person() is called without any arguments:
// The name and age instance fields are initially set to their default values ('default name' and 0, respectively).
// The constructor is then called with undefined for both name and age because no arguments are provided.
// Inside the constructor, this.name and this.age are set to undefined because name and age parameters are undefined.

// If you want to maintain the default values when no arguments are passed, you can modify the constructor to check for 
// undefined and only assign if the arguments are provided:
// Or we can use defualt paramters to constructor---->
// class Person {
//     constructor(name = 'default name', age = 0) {
//       this.name = name;
//       this.age = age;
//     }
// }  
class Person {
    name = 'default name'; // Public instance field
    age = 0;               // Public instance field
  
    constructor(name, age) {
      if (name !== undefined) {
        this.name = name;
      }
      if (age !== undefined) {
        this.age = age;
      }
    }
  
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  const person4 = new Person();
  console.log(person4.describe()); // Output: default name is 0 years old.
 
  





  // ................................