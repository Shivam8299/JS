class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    get password(){
        return `${this._password}@123`
    }

    set password (password){
        this._password =password;
    }

    get username (){
        return `${this._username}_Software_Developer`
    }

    set username (userName){
        // it will help to store username in database as it is
        this._username = `${userName}_Software_Developer`
    }
}

const shivam = new User ("shivam16", "shivam@gmail.com", "Shivam")
console.log(shivam.username)

let details = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(shivam),"password")

// console.log(details)