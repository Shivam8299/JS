class User {
    constructor (username){
        this.username = username
    }
    logMe (){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        // it refers extends class 
        super(username)
        this.email = email;
        this.password = password
    }

    encryptPassword (){
        return `${this.password}abc`
    }

    addCourse (){
        console.log(`A new course added by ${this.username}`);
    }
}

const shivam = new Teacher("Shivam_Mishra", "shivam@gmail.com", "shivam" )

shivam.addCourse()