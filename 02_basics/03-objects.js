//singleton - create as Object.create this is constructor


/*
const user = {}  // this object

*/

//object literals
const mySym = Symbol("key1");

const user = {
    name: "pintu",
    "full name": "kumar",
    age: 25,
    location: "ranchi",
    email: "pintu@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "tuesday"],
    [mySym]: "mykey1"
};

// console.log(user);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user.isLoggedIn);
// console.log(typeof user[mySym]); 
// console.log(typeof mySym);


// Object.freeze(user) //not change any value in object
// user.email = "abc@gmail.com"
// console.log(user["email"]);

//function
user.greeting = function() {
    console.log(`hello, i am ${this.name} `);
}
console.log(user.greeting());










