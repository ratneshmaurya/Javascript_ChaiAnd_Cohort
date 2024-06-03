

// Topc- promises, reject() vs resolve(), use of asyn-await with try and catch for promises
// Behind the scenes what we will learnt in this promises section, will be used in fecth
// Fetch does not reject on http errors status, see why(at last, very IMP), use of fetch to return promise,(POST, PUT, DELETE..) with Fetch API



// ***************** Fetch execute earlier than any other asyn task(asyn-await with try-cath, DB call, Network etc.), becoz fetch() 
// working moves into priority queue in WebAPI, thus it execute earlier

// Promises can be handled either by .then().cath() or by asyn-await (important)
// .then.catch() is easy just need .then() chaining if want.
// asyn-await needs try and catch block also to handle promises.




// **************** Promise intro deep.
// Promise means simply that, something that will be done in sometime in future(after netwrok call, reading file etc, any asyn task)
// In JavaScript, a promise is an object representing the eventual completion or failure of an "Asynchronous Operation". 
// Promises provide a cleaner, more manageable way to handle asynchronous operations compared to traditional callback-based approaches.

// A promise can be in one of three states: Pending, Fulfilled, Rejected.
// Handling Promises: You handle promises using .then(), .catch(), and .finally() methods.
// The .then() method is used to handle the resolved (fulfilled) state of the promise.
// The .catch() method is used to handle the rejected state of the promise.
// The .finally() method is executed regardless of the promise's outcome.

// You can chain multiple .then() and .catch() methods to handle sequences of asynchronous operations.
// Methods: Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any() help manage multiple promises.




// ************** Callback hell VS Promises
// Callback hell refers to a situation where multiple nested callbacks are used in an asynchronous code, leading to code that 
// is difficult to read, maintain, and debug. Promises allow you to chain asynchronous operations instead of nesting them.





// *************** Syntax ----->
// We create promises using Promise constructor( that must need a callback with 2 parameters--> resolve, reject)

const myPromise = new Promise((resolve, reject) => {
    // Any Asynchronous operation here like -  DB calls, cryptography, network
    let success = true; // Example condition
  
    if (success) {
      resolve('Operation was successful!'); //this will run .then() function later
    } else {
      reject('Operation failed!'); //this will run .catch() function later
    }
  });




  
// ***************** Ways to write promises----->
// can also use arrow functions instead of regular function anywhere

// Promise having only .then() and resolve()
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// Promise having only.then() and resolve()
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



// Passing arguments in resolve call
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){ // now .then() ka callback must have parameter(i.e user here), to receive the argument value from resolve() call
    console.log(user);
})



// Use of reject(), catch() and Passing arguments in resolve call
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))




// Using async await (must used with try and catch to handle resolve() and reject() phases) in promises----->
// if we don't write try and catch block with asyn-await then it can't handle reject(), it only handles resolve() phase.
// .then() use kro ya fir asyn await, becoz we have to wait till the asyn resolve() phase don't over, we don't have to move frward
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){ //here try handles resolve() phase while catch() handles reject() phase
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




// using fetch to take data from api, fetch returns promise, thus must be handled either by .then()-.cath() or by asyn-await
// here using asyn-await thus try-cath must be used
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()





// using fetch to take data from api, fetch returns promise, thus must be handled either by .then()-.cath() or by asyn-await
// here using .then().cath()----> so simple to use.
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.




// ******************* Fetch does not reject on HTTP errors status, see why??-------->>>

// Fetch Rejection on Network Errors: The fetch() promise will only reject when there is a network error. Network errors are 
// typically issues such as when there is no internet connection, DNS issues, or similar network-related problems.
// (Network errors occur when there is a problem with the connection itself or the browser cannot reach the server.)

// HTTP Errors Handling
// HTTP Errors: HTTP errors are responses from the server indicating that something went wrong with processing the request. The fetch() 
// promise does not reject on HTTP errors such as 404 Not Found, 500 Internal Server Error, etc. This means that even if the server 
// returns an error status code, the fetch() promise will still be considered as resolved, not rejected.

// Response Handling with then(): Since fetch() does not reject on HTTP errors, it is important to handle these errors manually within 
// the .then() method of the promise chain.

// Response.ok: The Response.ok property is a boolean indicating whether the response status code is in the range 200-299. 
// If it is true, it means the request was successful.

// Response.status: The Response.status property provides the HTTP status code returned by the server, such as 200, 404, 500, etc.

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      // Handle HTTP errors (e.g., 404, 500)
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle network errors or the HTTP error thrown above
    console.error('Fetch error:', error);
  });



// ******************** How to send other request like POST, PUT, DELETE etc with Fetch API
// Handling different types of HTTP requests (GET, POST, PUT, DELETE, etc.) with the Fetch API in JavaScript involves 
// specifying the request method and options such as headers and body data.

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // this means we are sending data in JSON format
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
.then(response => {
  if (!response.ok) {  //response.ok means status code is in the range 200-299.
    throw new Error(`HTTP error! status: ${response.status}`); //this moves to .catch() block
  }
  return response.json(); // this moved to next .then()
})
.then(data => {
  console.log('Data:', data);
})
.catch(error => {
  console.error('Fetch error:', error);
});




