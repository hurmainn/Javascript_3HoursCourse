//Inheritence in OOP
//the child class = subclass, derived class
//parent class= super class

import { Person } from "./Classes.js";

//child class will have knowledge of all the methods and properties in parent class

//use keyword extends to inherit
class Student extends Person{
    //constructor should be same
    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName)
    }

    //overriding the location method, can access it without overriding too
    get location(){
        return "School"
    }
}


//calling parent class function
let student=new Student("Student","Name")
console.log(student.fullName()) //executed

//calling overriden location mehtod
console.log(student.location)

//if th eporperty defitnition does'nt xist in child class, then it goes to tthe parent class for its definition