//CLASSES IN JAVASCRIPT , INTRODUCED FROM ES6 ENGINE
export class Person {
    firstName = "Hurmain"
    lastName = "Javaid"
    age = 22

    //methods/function
    fullName() {
        return (this.firstName + " " + this.lastName)
    }
    //Getter methods:   //another way of defining properties:
    get location() {
        //using get makes it a property not a function, so no need to use () while calling location
        return "Lahore, Pakistan"
    }

    //constructor
    //executes by default when object of class is created.
    constructor(firstName, lastName) {
        this.firstName = firstName  //this has the access over the whole class
        this.lastName = lastName
    }
}

// //accessing prperties of classes require objects
// let person = new Person()
// console.log("First Name: ", person.firstName)
// console.log("Location: ", person.location)    //location is a getter 

// //using constructor
// let person2=new Person("Abdullah","Javaid")
// let fullNameE=person2.fullName()
// console.log(fullNameE)