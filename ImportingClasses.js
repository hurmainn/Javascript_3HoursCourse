//IMPORTING and exporting classes CLASSES

import { Person } from "./Classes.js"

//FIRST EXPORT IT IN THE CLASS FILE by module.exports=class Person
//const Person = require('./Classes.js')

//can create objects in this class now
const person=new Person("Fajar","Nadeem")
const fullNameE=person.fullName()
console.log(fullNameE)