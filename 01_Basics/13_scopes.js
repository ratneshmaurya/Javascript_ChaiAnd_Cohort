
// Scopes is a vast topic, it containes closures also.
// Topics Included in Scope:
// Block vs Global scope: Remember the global scopes are different for console in browser(core scope having window object) vs console in our IDE code
// 1-) Var vs. Let and Const: The difference in scope behavior between these keyword options. Using let and const is generally 
// recommended for modern JavaScript practices due to their block-level scoping and prevention of variable hoisting (a behavior specific to var).
// 2-) Nested scoping
// 3-) Closures: How functions can capture variables from their outer scopes, even after the outer scope has gone out of scope. 
// This creates a "closed" environment where the function retains access to specific variables.
// 4-) Scope Chain: When a variable is not found in its immediate scope, JavaScript searches through a chain of outer scopes (parent functions and global scope) to locate it.


//**************** var have function level scope, it is accessible throughout the function(thus avoid to use it)
var c = 300 //global scope as outside every function
let a = 300 //global scope as outside every function
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}
console.log(a);
console.log(b);
console.log(c);


// ******************* Var function vs Normal function
// Normal Function are scanned and made available globally even before the actual definition line
// but var( or variable function) are scanned and made available globally but remains undefined before the actual definition line

a(20); //gives 20 o/p as function are scanned and made available globally even before the actual definition line
function a (data){
    console.log(data);
}
a(10); //gives 10 o/p

// -----
a(20); //gives error becoz variables are available globally but remains undefined value, thus passing something or calling undefined
var /*or const*/ a=function(data){
    console.log(data);
}
a(10) // gives 10 o/p



//************* Nested scoping (basic concept of closures)---------------
//How Closures Work:
//Function Definition: When you create a function within another function, the inner function has 
//access to the outer function's variables and parameters, even after the outer function has returned.
//Variable Reference: The inner function doesn't directly copy the outer function's variables. Instead, 
//it creates a reference to those variables in its own scope.

// Real-World Examples:
// Module Pattern: Closures are used to create modules in JavaScript, which encapsulate variables and 
// functions, promoting code organization.
// Immediately Invoked Function Expressions (IIFEs): Closures can be used to create private variables 
// within IIFEs, often used for initialization or data protection.
// Callbacks in Asynchronous Programming: Closures are commonly used in callback functions to capture 
// and access data from the outer scope when the asynchronous operation completes.

function one(){
    const username = "hitesh"

    function two(){   //similar to closure, but not perfect closure example
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
one()

// the above example is not perfect Closure, we will see it later