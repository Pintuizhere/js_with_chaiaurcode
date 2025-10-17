let score = "123"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// "abc" => NaN 
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false
// "" => false , "abc" => true
// null => false
// undefined => false
// NaN => false

let someNumber = undefined
let stringNumber = String(someNumber)

console.log(stringNumber)


