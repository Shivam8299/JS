// ES 6

// class User {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return`${this.password}shivam`
//     }

//     changeUser(){
//         return `${this.username.toUpperCase()}`
//     }
    
// }

// const newUser = new User('shivam', 'shivam@gmail.com','123');

// console.log(newUser.changeUser())
// console.log(newUser.encryptPassword())

// BEHIND THE SCENE

function newUser (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return`${this.password}shivam` 
}

newUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`

}

const user2 = new newUser("nilesh", "nilesh@gmail.com", "nil123")
console.log(user2.encryptPassword())
console.log(user2.changeUserName())