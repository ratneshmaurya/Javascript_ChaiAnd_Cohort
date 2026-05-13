// 🔥 ye JavaScript ka bahut IMPORTANT concept hai — especially:
// React
// Redux
// memoization
// optimization
// object comparison
// interview tricky questions

// sab isi pe based hote hain.

// A shallow copy duplicates only the first level, while nested objects still share references. 
// A deep copy recursively duplicates all nested structures.

// 🧠 Simple yaad trick
// Shallow → upar upar copy
// Deep → andar tak copy


// 🧠-------------------------  Sabse pehle: Primitive vs Non-Primitive
// 🟢 Primitive
// let a = 10
// let b = a

// 👉 yaha:
// actual value copy hoti hai


// ------------------------------  Non-Primitive (Object/Array/Function)
//  Normal assignement me refernce assignment hota, I mean refernce to same address pointer.
// it is not shallow copy, it is not deep copy, it is just reference copy

// let obj1 = { name: "Ratnesh" }
// let obj2 = obj1

// 👉 yaha:
// ❌ object copy nahi hua
// 👉 sirf:
// reference copy hua

// 🧠 Memory samajh
// obj1 ──► { name: "Ratnesh" }
// obj2 ──┘

// 👉 dono same object point kar rahe

// 💣 Proof
// obj2.name = "Aman"
// console.log(obj1.name)
// 👉 output: Aman

// 👉 yaha kya hua?
// ❌ NO COPY happened
// ❌ shallow copy bhi nahi
// 👉 sirf:
// same reference assign hua
// 👉 ek hi object hai.


// 🔥----------------------------------------- SHallow vs Deep Copy ?
// Ab agar actual new object chahiye: independent copy
// 👉 tab shallow/deep copy concepts aate hain.

// Shallow copy :new object + nested refs shared
// Deep copy : new object + independent nested objects

// 🟡--------------------------------------------- Shallow Copy
// Top level properties copy hoti hain
// nested references SAME rehte hain
// Use of spread operator, Object.assign, array methods

// ⚡ Example
const user = {
  name: "Ratnesh",
  address: {
    city: "Delhi"
  }
}
const copy = { ...user }

// 🧠 Memory
// copy ---> new object ✔
// BUT:
// copy.address ──► SAME nested object ❌

// 💣 Proof
// copy.address.city = "Mumbai"
// console.log(user.address.city)
// Output: Mumbai 😵

// 🔥 Why?
// Because:
// nested object reference copy hua


// ⚡ ---------------------------------- Common shallow copy methods
// Spread operator
const copy = { ...obj }

// Object.assign
const copy = Object.assign({}, obj)

// Array shallow copy
const arr2 = [...arr1]

// ------------------------------------------------ 💣 4. Deep Copy
// Sab levels pe NEW copy
// Nested objects bhi independent
// Use of structuredClone, JSON methods

// ⚡ Example
const user = {
  name: "Ratnesh",
  address: {
    city: "Delhi"
  }
}

const deepCopy = structuredClone(user)

// 🧠 Now memory
user.address !== deepCopy.address
// ✔ independent nested object

// 💣 Proof
deepCopy.address.city = "Mumbai"

console.log(user.address.city)
// Output: Delhi ✔

// ------------------------------------------- 🔥 Deep copy methods
// ✅ structuredClone (BEST modern)
const copy = structuredClone(obj)

// ⚠️ JSON trick (old)
const copy = JSON.parse(JSON.stringify(obj))

// 💣 JSON method edge cases
// ❌ functions remove
// ❌ undefined remove
// ❌ Date breaks
// ❌ Map/Set breaks
// ❌ circular refs fail

// ⚡ Example
const obj = {
  date: new Date(),
  fn: () => {}
}
const copy = JSON.parse(JSON.stringify(obj))
// Result
// date -> string 😵
// fn -> gone 😵

// 🔥 Hence structuredClone better
// ✔ handles:
// nested objects
// arrays
// dates
// maps
// sets



// ⚠️ BUT structuredClone limitations
// ❌ functions clone nahi hoti

const obj = {
  fn: () => {}
}
structuredClone(obj)
// 👉 error ❌