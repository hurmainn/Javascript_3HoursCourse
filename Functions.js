//Functions

//declaration
function add(a, b) {
   return a + b
}

//call
let sum=add(2, 3)
console.log("sum: ",sum)

//ANONYMOUS FUNCTIONS
//a
let sumOfIntegers=function(a,b){
    return a+b
}
console.log(sumOfIntegers(2,4))
//b
let sumOfNumbers=(a,b)=>a+b
console.log(sumOfNumbers)   //this is a function
console.log(sumOfNumbers(2,3))