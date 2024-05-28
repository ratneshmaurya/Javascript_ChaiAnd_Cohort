

// Immediately Invoked Function Expressions (IIFE) --> must be a function inside the () to run

// whenever JS sees a function, it thinks it must be a function declaration, thus requires function name also, but 
// Any code that turns function into expression, then we can call it immediately, so below function are written in (), it makes 
// our function as an expression, thus we can easily call it on next moment.

// Why it is expression? it means we can assign it to varibale like---> let data=()();
// IIFE are written like - (function definiton)(bracket for calling function);
// Why using IIFE? - to isolate global variables so that it don't interfere with any libraries or functions varibales
// we wrap the global variables inside this IIFE.
// most libraries also have codes in IIFE in backSide which we use directly in our code(Jquery etc.)

let a=23; //initially global variables, can be accessed easily on browser console
let b=document.querySelector('p');  //initially global variables, can be accessed easily on browser console

//now wrapping global things in IIFE functions
(function(){
    let a=23;
    let b=document.querySelector('p');
})()


// if writing more than one IIFE, then must end an IIFE with a semicolon(;) else the next IIFE not work, becoz 
//JS won't understand when to stop the previous IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// using arrow function in IIFE, also using parameters and arguments in IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ratnesh');


// *************  Here also an IIFE, as we are storing function into variable, thus making a function as expression, 
// thus we can now call it immediately
const uniqueWay= function(){
    console.log("Another way")
}()