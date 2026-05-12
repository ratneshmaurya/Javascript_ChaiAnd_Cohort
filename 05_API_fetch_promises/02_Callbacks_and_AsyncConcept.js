// -------------- Callback---------------------------
// bas ek function jo dusre function ko diya jata hai
// Bas. Itna hi meaning hai originally.

function greet(name) {
  console.log("Hello", name)
}
function processUser(callback) {
  callback("Ratnesh")
}
processUser(greet)

// 👉 Yaha async kuch bhi nahi hai
// processUser
// ↓
// immediately callback call
// ↓
// done



// -------------------------  So why callback is important ?
// Actually callback is not async, but async system callbacks ko use karta hai. (see setTimeout example below)
// Actually JS is single threaded right, so if we have to do some heavy work, 
// then it will block the main thread and user will not be able to interact with the page. 
// So we use callback to do that heavy work in background and when it's done, 
// it will call the callback function to update the UI or do something else.

// Callback async me kaise use hua?
// Example:

setTimeout(() => {
  console.log("Hello")
}, 2000)

// Yaha kya ho raha?
// 👉 humne setTimeout ko ye function diya:
// () => {
//   console.log("Hello")
// }

// 👉 ye callback hai: i.e extra function given to setTimeout function
// setTimeout bolta hai:
// “2 sec baad is function ko call kar dena”



// --------------------PROMISES-------------------
// Promise bhi async ke liye hi bana
// 👉 callback hell solve karne ke liye

// Async without promise (callback hell) :
getUser(user => {
  getPosts(user.id, posts => {
    console.log(posts)
  })
})

// Above with promise
getUser()
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))


//   --------------------Callback is Everywhere-------------------------------
// Hooks me bhi callbacks hote hain

useEffect(() => {
  console.log("effect")
}, [])

// Yaha callback kya hai? ----
// () => {
//   console.log("effect")
// }

// 👉 React bolta:
// “render ke baad ye callback chalana”

// useMemo / useCallback bhi uses callbacks :-
useMemo(() => expensiveCalc(), [])




// 👉 JavaScript async ecosystem heavily callback-based hai.

// Even: ye sab callbacks pe built hain.
// promises
// React hooks
// timers
// events (EventListener)





//  -----callback hell ---------------------------------
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


    // So to avoid this callback hell, we can use like nesting the functions.
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


    // PROBLEM OF CALLBACK HELL :
    // Code buggy hota
    // Also hrr function ke actual code me hume callback ko call krne ka line likhna pdega, 
    // eg this line - callback();
    // hence control hum function ko de rhe hai ki tum call kroge (INVERSION OF CONTROL)
    // So issiliye promise aaya, iss callback hell se bachane ke liye
    // and using this hum control bhi function ko nahi dete hai, hum hi define krte hai using .then().

