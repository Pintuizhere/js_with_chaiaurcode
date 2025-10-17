const score = 500
console.log(score)


const balance = new Number(100) //define number by using new object
console.log(balance)

console.log(balance.toString()) //convert into string

console.log(balance.toString().length) //number converted into string type use any string method

console.log(balance.toFixed(2)) // number 0f digits after decimal

const otherNumber = 123.834534

console.log(otherNumber.toPrecision(6)) //round off number

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN')) //standard value by comma


//++++++++++++++++++++++++++++++++ MATHS Library ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math)
console.log(Math.abs(-5)) //nagative into postive always by use abs
console.log(Math.round(12.6))
console.log(Math.ceil(15.234))
console.log(Math.floor(5.2))

console.log(Math.min(4,6,7,8,9));
console.log(Math.max(9, 12, 13, 50, 20));

console.log(Math.random()); //0 and 1 
console.log(Math.floor(Math.random()*10)+1); //to avoid 1

//++++++++++++++++++ by range find random number +++++++++++++++++++++++++++++++++++//

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))+min); //formula

















