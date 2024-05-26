//Topic--->
//parameter vs arguments??, parameter are variables used with function definition, while arguments are var/values passed in function call
//rest operator in function, Object passing in function, Array passing in function


//************* sending random argument values to the function parameter
function addTwoNumbers(number1, number2){ return number1 + number2 } 
addTwoNumbers(3, 'a')// then 3a output becoz string+number ho rha
addTwoNumbers(3, "ratn")// then 3ratn becoz string+number ho rha, don't say error hoga
const result = addTwoNumbers(3, 5) //arguments


//********** use of default values in function arguments
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))


//*********** using rest operator in function parameter (rest is same as spread, just a rename if using in function parameter)
//used for taking any number of values as an array form
//use case- in shopping cart when user keeps on adding items, don't know the exact number of itemss
//calculateCartPrice( ...num1, val1,val2) -> SyntaxError: Rest parameter must be last formal parameter
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


//****** passing Objects in functions
//remember Objects are refernce type, hence shallow copy bnegi, i.e function parameter variable have same ref to the actual object
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({username: "sam", price: 399}) // can also pass the object directly in arguments


//****** passing Array in functions
//remember Array are refernce type, hence shallow copy bnegi, i.e function parameter variable have same ref to the actual Array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //passing the array name
console.log(returnSecondValue([200, 400, 500, 1000])); //passing directly the values