// for understanding about call property in js


function setUser (username){
    // complex DB calls (assumed)
    this.username = username;
}

function user (username, email, age) {
    setUser.call(this, username)
    this.email = email,
    this.age = age

}

const newUser = new user('shivam',"shivam@gmail.com", 20);

const user2 = new user ("Vishsl_08", "vishal@gmail.com",21);

console.log(newUser)
console.log(user2)