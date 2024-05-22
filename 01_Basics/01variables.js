// var--------------------------------------------------- 
// has function level scope(i.e accessible anywhere in function it is defined)
// can be redclared again with other datatype values ( var a=23; then again we can write var a= "ratnesh")
// Are hoisted at the top of function thus can be used before actual declaration line, but have undefined values.

// let----------------------------------------------------
// has block level scope(i.e accessible only in blocks)
// cannot be redclared again with other datatype values
// Are not hoisted at the top of function


const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //not recommended
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // gives output in table format (key:values)