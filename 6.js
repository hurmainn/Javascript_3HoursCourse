//STRINGS
let day='MONDAY' //day is a string now
//somewhat like array operations
//each character in the string is treated like an array index

//stringlength
console.log("Length of string/number of characters in the string: ",day.length)
    
//substring
let subDay=day.slice(0,3)   //3 exclusive M O N will be returned
console.log("subday: ",subDay)

//Access a charater in the string
console.log("character 2: ",day[1]) //give o

//split mon and day
let splitDay=day.split("N") //split when n comes
//splitDay is now an array
console.log("splitDay index 1: ",splitDay[0])
console.log("splitDay index 2: ",splitDay[1])

//trim method (to trim left and right wide spaces)
let day2="  TUESDAY    "
console.log("Length of day2 before trimming: ",day2.length)
console.log("day 2 before trimming: ","*",day2,"*")
day2=day2.trim()
console.log("Length of day2 after trimming: ",day2.length)
console.log("day 2 after trimming: ","*",day2,"*")


//Accessing values from browser during automation
let date='23'
let nextDate='27'
//these are strings so 
//CONVERTING STRINGS TO NUMBERS - PARSE INT
let differencee=parseInt(nextDate)-parseInt(date)
