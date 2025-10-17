//array

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr);
console.log(myArr[2]);

// const newArr = new Array(10,20,30,40)
// console.log(newArr);

// Array Method

// myArr.push(6)
// myArr.pop()

// myArr.unshift(1)
// myArr.shift()
console.log(myArr);
console.log(myArr.includes(10)); //find number in array as true and false
console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(newArr); //give string type

//slice, splice 

const myn1 = myArr.slice(1,3) //last range number not include and not any change in original array
console.log("A", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) //last range number include but change original array 
console.log("B", myArr);
console.log(myn2)






