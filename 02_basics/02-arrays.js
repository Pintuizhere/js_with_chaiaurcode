// array part 2

const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "batman", "aquaman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const allheros = marvel_heros.concat(dc_heros) //concat return new array
console.log(allheros);

//++++++ sperate operater ++++++++++//

const ourheros = [...marvel_heros, ...dc_heros] //best uses for practice

console.log(ourheros);

//number of array in array

const another_array = [1,2,[2,4],4,5,[1,3,[4,5],5],7,8]

const realarry = another_array.flat(3) //seperate out all array in one array use flat
console.log(realarry);

console.log(Array.isArray("pintu"));
console.log(Array.isArray([1,2,3]));
console.log(Array.from("pintu")); //convert into array any thing by string 

console.log(Array.from({name:"pintu", age: 18, number: 123994})); //interesting case for interview

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3))

let myname = "pintu"

console.log(Array.of(myname));



//study in array some important method are isArray() , from() and of()
