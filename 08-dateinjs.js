// Dates

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toLocaleString());
console.log(typeof myDate)

// let myCreateDate = new Date(2023, 0, 12, 5 , 6)
let myCreateDate = new Date("01-01-2001")


console.log(myCreateDate.toDateString())
console.log(myCreateDate.toLocaleString())
console.log(myCreateDate.getTime())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getMonth())
console.log(newDate.getDay())

console.log(`todays date is ${newDate.toDateString()} and year is ${newDate.getFullYear()} and month is ${newDate.getMonth()} `)


