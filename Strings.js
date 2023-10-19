//STRINGS
let day = 'MONDAY' //day is a string now
//somewhat like array operations
//each character in the string is treated like an array index

//stringlength
console.log("Length of string/number of characters in the string: ", day.length)

//substring
let subDay = day.slice(0, 3)   //3 exclusive M O N will be returned
console.log("subday: ", subDay)

//Access a charater in the string
console.log("character 2: ", day[1]) //give o

//split mon and day
let splitDay = day.split("N") //split when n comes
//splitDay is now an array
console.log("splitDay index 1: ", splitDay[0])
console.log("splitDay index 2: ", splitDay[1])

//trim method (to trim left and right wide spaces)
let day2 = "  TUESDAY    "
console.log("Length of day2 before trimming: ", day2.length)
console.log("day 2 before trimming: ", "*", day2, "*")
day2 = day2.trim()
console.log("Length of day2 after trimming: ", day2.length)
console.log("day 2 after trimming: ", "*", day2, "*")


//Accessing values from browser during automation
let date = '23'
let nextDate = '27'
//these are strings so 
//CONVERTING STRINGS TO NUMBERS - PARSE INT
let differencee = parseInt(nextDate) - parseInt(date)
console.log("Difference: ", differencee)
console.log("Type of difference: ", typeof (differencee))
//Converting numbers to string
differencee = differencee.toString()
console.log("Difference: ", differencee)
console.log("Type of difference after converting to string: ", typeof (differencee))


//Concatenation of strings
day3 = day2.trim() + " is Funday"
console.log("Concatenated string: ", day3)

//index Of method //where a chaarcter is present //starts counting from 0
let indexinDay3 = day3.indexOf("day")
console.log("Index of day in day3 string: ", indexinDay3)

//to check the number of times a specifc text iccurs in a string
let days = "mondaytuesdaywednesday"
let indexOfdayIndays = days.indexOf("day")
let count = 0
while (indexOfdayIndays !== -1) {    //index will be minus 1 when string ends, thn the loop ends
    count++
    indexOfdayIndays = days.indexOf("day", indexOfdayIndays + 1)
    /*The second argument, indexOfdayIndays + 1,
     is the starting index for the search. 
     It means that the search for "day" will start after 
     the index specified by the variable indexOfdayIndays plus 1. 
     This allows you to continue searching 
     for the next occurrence of "day" in the array, 
    effectively skipping the previously found occurrence.*/
}
console.log("Occurrence of day in the string: ",count," times.")


