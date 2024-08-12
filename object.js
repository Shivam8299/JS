// console.log(Math.PI)
// const details = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(details)

let user = {
    name : "Shivam",
    age: 20,
    email:"shivam@gmail.com",
    profession:"College_Student"
}

// for(key in user){
//     console.log(`${key}:${user[key]}`)
// }

const userName = Object.getOwnPropertyDescriptor(user,"name")
// console.log(userName)

Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false

})

user.name = "Nikhil"

for(key in user){
    console.log(`${key}:${user[key]}`)
}
