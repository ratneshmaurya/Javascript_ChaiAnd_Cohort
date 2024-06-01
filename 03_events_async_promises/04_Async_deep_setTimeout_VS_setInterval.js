


// *********** We need both case condition (sync and async codes)---->
// To read file during program run, we need async code, so that other execution carry on.
// To display "regiter successfully" message on website require sync code becoz only display when data saves into DB.


// setTimeout(()=>{}, 0); runs immediately?? no becoz it is a part of asyn code and handle under webAPI part, thus it will 
// follow same path and run after main execution over.


// ************* Asyn nature of JS-------------? (Take previous image as reference)

// JavaScript is considered asynchronous in nature due to its ability to handle operations that might take time (like network 
// requests or file reading) without blocking the main thread of execution. This is achieved through the concepts of the JavaScript 
// engine, Web APIs, callback registration, the callback queue, and the event loop.

// While browsers provide these functions through their own APIs, Node.js has its own set of APIs to handle similar functionality.
// Apart from timers(setInterval, setTimeout), Node.js handles other asynchronous operations such as:
// File System I/O: Asynchronous reading and writing to the file system.
// Network I/O: Handling network requests, such as HTTP or WebSocket connections.
// Child Processes: Managing child processes asynchronously.

// NOTE---> As fetch is a promise, and there are process like this that are generally considered more prior to the other async code
// hence these are executed earlier than other async code. (Have other high priority queue for them).

// Register Callback --->
// When you call an asynchronous function like setTimeout or fetch, you pass a callback function. This function doesn't execute 
// immediately. Instead, the call to the asynchronous function is passed off to the browser's Web API.

// Callback Queue ---->
// Once the asynchronous operation completes (like the timer expires, or a network request returns), the Web API moves the callback 
// function to a callback queue (or task queue).





// ********************** SETTIMEOUT vs SETINTERVAL ------------->
// setTimeout and setInterval in JavaScript can accept additional arguments after the delay parameter. These additional 
// arguments are passed to the callback function when it is executed.
// setTimeout: setTimeout(callback, delay, arg1, arg2, ...)
// setInterval: setInterval(callback, delay, arg1, arg2, ...)



//***************** SetTimeout()----->
const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}
const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){ //now to stop, when user press stop button
    clearTimeout(changeMe); //this helps in stopping before timeout happens
    console.log("STOPPED")
})


//************ SetInterval---------->
const sayDate = function(str){
    console.log(str, Date.now());
}
const intervalId = setInterval(sayDate, 1000, "hi")
document.querySelector('#stop').addEventListener('click', function(){ //now to stop, when user press stop button
    clearTimeout(changeMe); //this helps in stopping anytime during setInterval runs
    console.log("STOPPED")
})