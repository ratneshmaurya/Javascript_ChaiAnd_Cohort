
// All main things in react :
// references
// shallow copy
// React re-render
// React.memo
// useMemo

// 👉 React ka pura optimization system shallow copy pe based hai.


// -------------------------------------------------------------------------------
// 🧠 1. React actual me kya compare karta hai?

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

// ---------------------------------------------------------------------------
// 🧠 3. React state update flow
const [user, setUser] = useState({
  name: "Ratnesh"
})

// Wrongly doing mutation
user.name = "Aman"
setUser(user)
// Kya hua?
// 👉 SAME reference 😵
oldUser === newUser // true
// 👉 React bolega: “same object hai” 👉 maybe skip re-render ❌

// 🔥 ---------------- Correct way = shallow copy
// Shallow copy kab use karte?
// 👉 jab: state var humara => object/array type ho and usko change karna ho

setUser({
  ...user,   // here doing spread operator, so creating new object
  name: "Aman"
})

// 🧠 Now
oldUser !== newUser
// ✔ new reference

// 👉 React bolega: “new object aaya” ✔ re-render

// --------------------------------------------------------------------------
// 💣 4. Why shallow copy enough?

// Because React usually only checks top-level reference.
// ⚡ Example
oldState !== newState
// 👉 enough for React.

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

// 👉 now: same reference ✔
// ⚡ Parent re-render
// oldUser === newUser

// 👉 React.memo: “same props”, child skip render

// ----------------------------Nested Object me How to do Copying of object------------------------------------------------

// 🔥 Why shallow copy important?
// Because:
// it creates NEW top-level reference
// React can detect changes cheaply
// ⚠️ BUT nested mutation dangerous

const newState = { ...state }
newState.user.name = "Aman"

// 👉 nested object same 😵
// React may re-render parent ✔
// BUT: memoized children, selectors, Redux optimizations break ho sakte hain.

// 💡 Correct nested update, using spread at each nested object also
const newState = {
  ...state,
  user: {
    ...state.user,
    name: "Aman"
  }
}

// ------------------------------------------------------------------------------------
// 🎯 Final big picture
// Shallow copy → new reference → React detects change → re-render
//  whenever we have to update state that is object/array, we should create 
// a new copy of it using shallow copy techniques (spread operator, Object.assign, array methods) 
// to ensure React detects the change and re-renders the component efficiently.

//  and useMemo and useCallback just for memoization.

// 💥 Killer line
// React relies on shallow reference comparison because it is fast. 
// Creating shallow copies allows React to efficiently detect state and prop changes 
// without expensive deep comparisons.

// 🧠 Simple yaad trick
// new reference = React notices
// same reference = React thinks same data