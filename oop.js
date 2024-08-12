// object literal 

// const user = {
//     username:"shivam_Mishra",
//     password: "shivam123",
//     signedIn:true,
//     getUserDetails: function(){
//         // console.log(this.username)
//         console.log(this)
//     }
// }
// console.log(user.getUserDetails())

//constructor function 

function userDetails(username, loginCount, isLogined){
    this.username = username,
    this.loginCount = loginCount,
    this.isLogined = isLogined

    // return this;
    // no need to write (return this) it's implicitly return
}


let userOne = new userDetails("shivam",12,true);
let usertwo = new userDetails("saap",3,false)
console.log(userOne)
console.log(usertwo)

// new keyword 
// Creates a new object: new creates a new, empty object.
// Sets the constructor: The constructor function is called with the specified parameters.
// Sets the prototype: The new object's prototype is set to the constructor's prototype.
// Returns the object: The newly created object is returned.