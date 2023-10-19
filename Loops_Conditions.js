//loops and conditions
const booleanvariable = true

if (booleanvariable) {
    console.log("Condition satisfied")
}
else {
    console.log("Condition not satisfied")
}

if (!booleanvariable) {
    console.log("Condition satisfied")
}
else {
    console.log("Value is still true, we just changed it in the condition: " + booleanvariable)
    console.log("Condition not satisfied")
}

//loops
/*
while(booleanvariable==true)
{
console.log(" INFINITE LOOP ")
//booleanvariable=false //cant do this because const
}
*/

//WHILE
let i = 0
while (i < 10) {

    console.log(i)
    i++
}

//DO WHILE
//do while executes 1 time must before checking the condition

let j = 0
while (j > 10) {
    j++
    console.log(i)
}
//loop will not execute because the condition is false
//BUT
do {
    j++
} while (j > 10)
console.log("j: " + j)  //i will be 1 because it executed one time before checking the condition


//FOR LOOP
//use for loop when you know how many times you have to run the loop
//while can be used for any statement even when you don't know the end limit, like you can use like while(booleanstatement) which will execute until the statement is true
let booleanstatement = true
while (booleanstatement) {
    console.log("boolean statement: " + booleanstatement)
    booleanstatement = false
}
let n = 0
//get numbers which are common multiples of 2 and 5 from 1 to 20 ,, iknow i have to execute the loop 20 times so i use for loop
console.log("** COMMON MULTIPLES OF 2 AND 5 FROM 1 TO 20**")
for (let k = 1; k <= 20; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log("common multiple " + n + ": " + k);
        if(n==3){
            break;  //come out of the loop
        }
    }
}