// this singleton by constructor

const tiderUser = new Object()

tiderUser.id = "123abc"
tiderUser.email = "abc@gmail.com"
tiderUser.isLoggedIn = true

console.log(tiderUser.id)
console.log(Object.keys(tiderUser)); //all keys of object
console.log(Object.values(tiderUser)); //all values of object
console.log(Object.entries(tiderUser));



//object ke andaar object this is possible and also accessible
const regularUser = {
        email: "random@gmail.com",
        fullname: {
            userfullname: {
                firstname: "pintu",
                lastname: "kumar"
            }

        }
}
console.log(regularUser.fullname.userfullname.firstname);

//two object combined

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1 , obj2) //traget {} and source obj1 and obj2

console.log(obj4);

//2 method to combined 

const obj5 = {...obj1, ...obj2} //new and best method
console.log(obj5);


//array of object - database data or api 
const users = [
    {
        id: 1,
        email: "ram@gmailcom"
    },
    {
        id: 2,
        email: "abhishek@gmail.com"
    },
    {
        id: 3,
        email: "rohit@gmail.com"
    },
   
]

console.log(users[1].email)

//destructoring of object - give long name into short name

const course = {
    coursename: "javascript",
    price: "1000",
    courseInstructor: "chaiaurcode"
}

const {courseInstructor: instructor} = course
console.log(instructor);

/* destructuring in react.js
const navbar = ({company})=> {

}
navbar(company = "techio")
*/
