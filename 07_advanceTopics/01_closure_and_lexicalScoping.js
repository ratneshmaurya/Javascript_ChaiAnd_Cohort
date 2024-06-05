

// Topic- Lexical scoping, closures, practical example of closure.
// *************************************************************************************
// *************** Lexical Scoping--->

// As we know, functions have there separate execution context, so it must not access the variable or properties from its surrounding.
// But lexical scoping says---> When a function is defined, it captures (or "closes over") its surrounding lexical environment, 
// including all variables declared in its parent scopes.

    function init() {
        let name = "Mozilla"; 
        function displayName() {
            console.log(name);  // can access name due to lexical scoping. (else inner function have their different execution context)
        }
        displayName();
    }
    init();


    // Example-2
    function outer(){
        let username = "hitesh"
        console.log("OUTER", secret); //can't access inner function properties
        function inner(){
            let secret = "my123"
            console.log("inner", username); //can access its surrounding/parent properties due to lexical scoping
        }
        function innerTwo(){
            console.log("innerTwo", username);
            console.log(secret); //can't access the sibling property
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username);




// *************************************************************************************
// **************** CLOSURES ----------->
// As we have seen the due to lexical scoping the inner function can access outer function properties even its execution contex is
// different. SO with that property, when we return the inner function, it return by taking the value/property/varibales of the
// outer function also.

    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName; // here returning the inner function, it returns but also take "name" with it. that's why on calling it
        // later, it still prints the "name" value.
    }

    const myFunc = makeFunc();
    myFunc(); // here it stil prints the "name" value, even the outer function execution overs




// *************************************************************************************
// ********************* Practical use of CLosures-------------->
// Backhodi due to .onclick handler function.(else sb shi rhta, better not to use it)

    // creating a div, having 2 buttons---->

    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Closure aur chai</title>
    // </head>
    // <body style="background-color: #313131;">
    //     <button id="orange">Orange</button>
    //     <button id="green">Green</button>
    // </body>


    // now instead of writing hardcode, we will use function so that it will be generic if more than one buttons are there.
    // document.getElementById("orange").onclick = function(){
    //     document.body.style.backgroundColor = `orange`
    // }
    // document.getElementById("green").onclick = function(){
    //     document.body.style.backgroundColor = `green`
    // }


    // below code is wrong, it execute the function directly on page load without the event handler trigerring.
    function clickHandler(color){
        document.body.style.backgroundColor = `${color}`
    }
    document.getElementById('orange').onclick = clickHandler("orange"); // it calls the clickHandler() function directly.


    // so now we have to return a refernce of inner function, so that onclick recerives a refernce of function, not directly the execution
    function clickHandler(color){
        return function(){
            document.body.style.backgroundColor = `${color}`
        }
    }
    document.getElementById('orange').onclick = clickHandler("orange")
    document.getElementById('green').onclick = clickHandler("green")

  

// But if we are using .addEventListerner() function, we can pass argument directly
element.addEventListener('click', clickHandler(arg1));




// Key Points--->
// Lexical scoping determines variable visibility based on the code structure.
// Closures allow inner functions to access variables from their outer scope even after the outer function has finished executing.
// Closures are commonly used in JavaScript for data encapsulation, event handlers, callbacks, and maintaining state in functional programming.


// ***************** Use of closure-------->>>

// In Event Handlers --->>
// Closures are commonly used in event handlers to access variables from the outer scope within the handler function.
function handleClick() {
  let count = 0;
  return function() {
    console.log('Button clicked!', ++count);
  };
}
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick());






// Maintaining State in Functional Programming --->>
// Closures are used to maintain state in functional programming paradigms, where functions are treated as first-class citizens.
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    getCount: function() {
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount()); // Output: 2






// ............................................