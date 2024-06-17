
// All these callbacks, promises and Async-await are used mostly for running more than one Asyn functions Synchronously in webAPI(callback queue)
// If want to execute only one async task, then can direclty write setTimeout, File-Read, or other async tasks. 
// If not using any Asyn work, then donot use these, becoz no use-case


// Topics---> Callbacks, Callbacks hell, Promises, Promises Chain, Asyn-await


// we need Async function when these cases arises-->
// Network call
// DB call
// File reading/writing
// Sleep/wait for a while



// *********** CALLBACKS
// A callback is a function passed as an argument to another function.
// Callback hell happens when we want more than one async operations to perform one after another(Sequential)
// Syntax-> refers to a situation where callbacks are nested within other callbacks several levels deep, making the code 
// hard to read and maintain.
// In traditional nested callbacks, without using promises, the callback functions typically do not return any values.
// Why callbacks poor??->> writing more nested function calls, unnecessary identations.
// Initially, when we want that if 2 async function and want they run after one-other, then we make them in nested foem

//This is callback, becoz using other function in the parameter of function.
    function firstFunction(callback) {
        console.log('Executing first function');
        setTimeout(() => {
        callback('First function executed successfully');
        }, 1000);
    }

    function secondFunction(value) {
        console.log(value);
        setTimeout(() => {
            console.log("Second function executed fully")
        }, 1000);
    }
    firstFunction(secondFunction); //callback hell, as calling function is also typical.



    // This is nested async function (but also runs sequentially like above)--->
    // But not a callback hell.(But writing nested function is also a overhead)
    function run(){
        setTimeout(()=>{
            console.log("in outer loop")

            setTimeout(()=>{
                console.log("in inner loop");
            }, 3000);

        }, 2000)
    }
    run(); // here just calling the outer function, but it also runs inner function, after 2sec, when the outer finished





// **************** Promises ->
// It returns values(i.e a Promise to .then() or .catch() function.)
// Thus .then() and .catch() must have the callbacks in their arguments to receive either resolve or reject function from promise.
// Promises created using the Promise constructor using --> new Promise((resolve,reject)=>{}), i.e it also takes callback as paramter
// Promise constructor takes a function, which also takes a resolve function as 1st parameter, and reject function as 2nd
// .then(()=>{}) will only run when the resolve() function inside the Promise run, and if resolve("hey") have argument, then .then((data)=>{}) recieves like this.
// The resolve() and reject() returns mostly "string" or"number", becoz it says I am returning the data of async function you have run

// We can give any name to resolve and reject paramtere, but just remebr 1st parameter will be for .then()
// But remember if not doing any async task in Promise, then donot use promise, becoz of no use, it will be like simple function that runs immediately.

// How to make more than 1 async functions call sequenctially using Promises?
// step-1) First of all both asyn function must have Promises returned in their functions
// step-2) Inside the .then() of first function, we can return second function call, this will move to next chained .then()
// Here both asyn are not dependent on each like in callbacks, here we are just calling them one-by-one by order we want.
// **** Here we are doing promises chain, as running one async function only after other.

    function firstFunction() {
        return new Promise((resolve, reject) => {
        console.log('Executing first function'); 
        // doing an async task and then calling resolve() in that
        setTimeout(() => {
            resolve();
        }, 1000);
        });
    }
  
    function secondFunction() {
        return new Promise((resolve, reject) => {
        console.log('Executing second function' );
        // doing an async task and then calling resolve() in that
        setTimeout(() => {
            resolve();
        }, 1000);
        });
    }
  
    firstFunction()
        .then(() => {
            return secondFunction(result1); //must be written in return, so that it's resolve will execute in next chained .then()
        })
        .then(()=> {
            console.log("all executed")
    })



// *********** But here remember it runs resolve in setTimeout, i.e after 1 sec, the resolve function must execute.
// But how to stop executing the resolve() function till we want i.e till suppose we want the data must be fetched from API.
// i.e If suppose fetching data from api, using promises, then how to be sure that the resolve function must run only after fetching the data from api, not before that??
// For API, we must use fetch, and uske .then() me we will write resolve() function.
// Remember below code is just for understanding, what if we handle API inside promise. Remember to handle API data we can directly use fetch and .then() simply.

function fetchDataFromApi(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // assuming the API returns JSON
        })
        .then(data => {
          resolve(data); // resolve the promise with the fetched data, now it calls the .then() function
        })
        .catch(error => {
          reject(error); // reject the promise if an error occurs
        });
    });
  }
  
  // Using the fetchDataFromApi function
  const apiURL = 'https://api.example.com/data';
  
  fetchDataFromApi(apiURL)
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  



// We can define Promises like this also, but here we can't pass any value to the promise function
// Thus its better to use a function wrapper and define the promise inside it, becoz most of the API designed like this only.
    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "Chai", email: "chai@example.com"})
        }, 1000)
    })
    
    promiseThree.then(function(user){ // now .then() ka callback must have parameter(i.e user here), to receive the argument value from resolve() call
        console.log(user);
    })


// ************ Returning array of Promises
function run(){
    let p1=new Promise();
    let p2=new Promise();
    return [p1,p2];
}
run()[0].then(()=>{});
run()[1].then(()=>{});



//  We just actualy handles the result from promises or API (i.e using .then() or try+catch), donot worry about how to create, but we 
// have already seen how the promises or API's are beign created, i.e by using Promises only.




// ***************** Async + Await ---->>>> 

// Retrieving the Promise vs. Resolved Value:
// Without await: You get the promise object itself. or You can get resolved value in the callback of .then(()=>{}) function.(if using promises with .then())
// With await: You get the resolved value of the promise.(i.e value of res("value"));
// await means it stops at that line till it not gets executed all. Hence must be wrapped in async function so that it must be handled in separate execution from main thread.

async function getData() {
    const promise = fetch('https://api.example.com/data');
    console.log(promise); // Logs the promise object, not the resolved value
    return promise;
}
getData().then(response => {
    console.log(response); // Logs the resolved Response object (becoz using .then() thus resolved ho gya)
});


// When you use await, it pauses the execution of the async function until the promise resolves, and then it returns the resolved value:
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json(); // Also awaiting the parsing of JSON
  console.log(data); // Logs the resolved value (parsed JSON data)
  return data;
}
getData().then(data => {
  console.log(data); // Logs the data returned by getData()
});