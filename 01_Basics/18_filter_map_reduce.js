

// Topic--> Filter, Map, Reduce  (Map and filter return a new array, while reduce return a calculated value from elements)


//*************** Filter--> return only the true values that matches conditions
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4
} )

// using Filter in database like datas--
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  //remember to use return keyword if using {} brackets in callbacks (property of function)
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
 })
  console.log(userBooks);



// ********************** Map function (better and easier than for-each)
// same we can't break or continue in .map() as well in .forEach()

    const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const newNums2 = myNumers.map( (num) => { return num + 10})


    //chaining the functions
    const newNums3 = myNumers
                    .map((num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

    console.log(newNums3);


// ************** Reduce function in JS
// Reduces an array to a single value
// syntax---> .reduce(function(rec,curr), initial value);

const myNums4 = [1, 2, 3]
const myTotal = myNums4.reduce( (res, curr) => res + curr, 0) //initial value=0, it puts 0 in acc on first run
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);