
// must read the previous topic - constructor functions

// Importance of .call------>>
// .call: It allows you to call a function with a specific "this" value, making it possible to borrow methods from other objects or 
// functions and ensure they operate in the correct context.
// thus using .call() we can change the value of "this" in any inner fucntion

function SetUsername(username){ //inner function to createUser function
    //complex DB calls
    this.username = username
    console.log(this);
}

function createUser(username, email, password){
    // SetUsername(username)---> this will not paas this function context
    // SetUsername.call(username);---> this will not pass this function context
    SetUsername.call(this, username) // this will pass current context also, and now the above function setUsername's this will act like
    // it is the this of this current function createUser(), thus on completing the SetUsername(), the property's value still remained
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // now we will get all 3 arguments values easily (as we know bydefault if nothing returnedfrom cnstructor 
// function then "this" returned)


// Keypoints--->
// If SetUsername(username) is called without .call, this inside SetUsername would refer to the global object (in non-strict mode) 
// or undefined (in strict mode). This would not set the username property on the createUser function's context (this).

// By using SetUsername.call(this, username), you are calling SetUsername and explicitly setting this inside SetUsername to the this 
// of createUser. This ensures that this.username = username sets the username property on the object being created by createUser, thus 
// on completion of setUsername function, the value of username still exists in the this property.




// ..................