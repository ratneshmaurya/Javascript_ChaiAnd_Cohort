
// All main things in react :
// references
// shallow copy
// React re-render
// React.memo
// useMemo

// 👉 React ka pura optimization system shallow copy pe based hai.


// -------------------------------------------------------------------------------
// React actual me kya compare karta hai?
// 👉 React: deep compare nahi karta.
// 👉 React mostly: reference compare ✔ karta hai.

// ⚡ Example
const a = { name: "Ratnesh" }
const b = { name: "Ratnesh" }

console.log(a === b)
// Output: false
// 👉 same values, BUT different references

// For primitives:
setCount(5)
// 👉 React compares values. So re-render ho jaaega easily apne aap on value changes.

// For objects:
setUser(user)
// 👉 React compares references. so shallow copy needed else refernce same rahega and no re-render on object value changes

// ----------------------------------------------------------------------------
// 🔥 2. Why React uses shallow/reference compare?
// Because deep compare expensive 😵

// Imagine: 10000 nested objects
// har render pe deep compare impossible almost.

// 💡 Isliye React bolta:
// “reference badla? => toh maybe data badla”

// ----------------------------------Shallow Copy(SPREAD OPERATOR) In React Need-----------------------------------------
// Use of spread Operator for shallow copy, must use when object/array in useState() used ho.

// creating the object values in useState
const [user, setUser] = useState({
  name: "Ratnesh"
})

// if changing the value of object like this:
user.name = "Aman"
setUser(user)
// SAME reference, becoz we changed the same object value
oldUser === newUser // true
// React bolega: “same object hai” 👉 maybe skip re-render ❌

// 🔥 ---------------- Correct way = shallow copy
// Shallow copy kab use karte?
// jab: state var humara => object/array type ho and usko change karna ho
// using spread operator means creating the new object with new reference, 
// so React can detect the change and re-render the component efficiently.

setUser({
  ...user,   // here doing spread operator, so creating new object
  name: "Aman"
})

// Now
oldUser !== newUser
// ✔ new reference
// React bolega: “new object aaya” ✔ re-render


// ----------------------------Nested Object me How to do Copying of object------------------------------------------------
// 🔥 Why shallow copy important?
// Because:
// it creates NEW top-level reference
// React can detect changes cheaply

const [user, setUser] = useState({
  userDetails: {
    name: "Ratnesh",
    age:10,
  }
})
const newState = { ...user }
newState.userDetails.name = "Aman"

// nested object same 😵
// React may re-render parent ✔
// BUT: memoized children, selectors, Redux optimizations break ho sakte hain.

// 💡 Correct nested update, using spread at each nested object also
const newState = {
  ...state,
  userDetails: {
    ...state.userDetails,
    name: "Aman"
  }
}



// --------------------------------React.Memo---------------------------------------
// “useMemo tb use krna hai jb parent re-render pr dubara function/object na change ho”
// useMemo kisliye? => same value/object reference preserve karne ke liye
// useCallback kisliye? => same function reference preserve karne ke liye

// 🧠 React.memo kaise kaam karta?
// Example
const Child = React.memo(({ user }) => {
  console.log("Child render")
  return <div>{user.name}</div>
})

// Parent
function Parent() {
  const user = { name: "Ratnesh" }

  return <Child user={user} />
}

// 💣 Problem
// 👉 Parent re-render:
// new object created every render 😵
// So: oldUser !== newUser

// 👉 React.memo bolega: props changed, child re-render

// 🔥 Solution = stable reference using useMemo()
const user = useMemo(() => {
  return { name: "Ratnesh" }
}, [])

// now: same reference ✔
// Parent re-render
// oldUser === newUser

// React.memo: “same props”, child skip render

// ------------------------------------------------------------------------------------
// 🎯 Final big picture
// Shallow copy → new reference → React detects change → re-render
// whenever we have to update state that is object/array, we should create 
// a new copy of it using shallow copy techniques (spread operator, Object.assign, array methods) 
// to ensure React detects the change and re-renders the component efficiently.


// ------------------------------------------------------ Use of useMemo and Spread Operator
// Suppose parent have an object defined like this:
const user = {
  name: "Ratnesh"
}
// now on every render of parent this object will be recreated and will have a new reference, 
// so if we pass this object as a prop to child component, then child component will re-render 
// on every render of parent component.
// To avoid this we can use useMemo hook to memoize the object and only create a new reference
// when the dependencies change. (also child is created using React.memo to avoid unnecessary re-rendering)
// This is to ensure same object ho then no re-render please. 

// Now what if the object value changes, then to ensure React will detect the changes
// we use Spread operator so that it create a new object and re-redner happens for child as well. 
// so changes in Object -> Shallow copy with spread operator -> new reference -> React detects change -> re-render child component.
