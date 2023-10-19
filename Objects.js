//JAVASCRIPT OBJECTS:
//Object is a collection of properties
//like person is a =n object with properties age, name, height etc
//student is an object with properties name, roll number etc

//property can be defined in key value pairs
let person = {
    //firstname   //key
    // Hurmain     //value
    firstName: 'Hurmain',
    lastName: 'Javaid',
    num: 7,
    //can add strings, numbers and methods to the object properties

    //anonymous function:
    name:function () {
      // console.log(this.firstName + " " + this.lastName)
      return this.firstName + " " + this.lastName
    }

}
let fullName=person.name()      //calling a funtion requires brackets
console.log("FULL NAME: ", fullName)

//access by object.property or object[property]
console.log("First Name: ", person.firstName)
console.log("Last Name: ", person["lastName"])   //array notation
console.log(person['num'])
//changing the values at runtime
person.firstName = "Hurmainn Javaid"
console.log("***Changing value at runtime***")
console.log(person.firstName)

//adding value at runtime

console.log("***Addding values at runtime***")
person.gender = "Female"  //if gender exists, it will overwrite, if doen't it creates a new proeprty
console.log(person.gender)
console.log(person)

//deleting a property
console.log("Before deleting gender: ")
console.log(person.gender)
delete person.gender
console.log("***Deleting values at runtime***")
console.log("After deleting gender: ")
console.log(person.gender)  //doesn't exist now, will give undefined
console.log(person)

//checking if a specific property exists in the object
let genderIsPresent = 'gender' in person  //the statment will return a boolean variable
console.log("genderIsPresent: ", genderIsPresent)
let firstNameIsPresent = 'firstName' in person
console.log("firstNameIsPresent: ", firstNameIsPresent)

//iterating through all the properties in the object
for (let key in person)     //first name is key, gender is key : recall: key value pair in object
{
    console.log(key, ": ", person[key])
}

//calling functions
console.log("***CALLING FUNCTION***")
fullName=person.name()
console.log("FULL NAME: ",fullName)