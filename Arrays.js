//ARRAYS
//array is basically a container
//ways to initialize/declare arrays

var marks = Array(6)
var marks2 = new Array(20, 40, 35, 100, 89, 10)
var marks3 = [20, 40, 35, 100, 89, 10]
var marks4 = []
//assigning values in array
marks4 = [20, 10, 34, 50]
marks4[3] = 40    //50 will be replaced with 40
let i = 0
console.log("***MARKS 4 ARRAY***")
while (i < 5) {
    console.log(marks4[i])
    i++
}

//length of array
console.log("***MARKS 2 ARRAY***")
console.log("length: " + marks2.length);
for (let i = 0; i < marks2.length; i++) {
    console.log("marks2[" + i + "] : " + marks2[i])
}

//Append new elemtns to the end of array : push
marks2.push(65, 78, 93)
console.log("***MARKS 2 ARRAY AFTER PUSHING ELEMENTS***")
console.log("New length: " + marks2.length);
for (let i = 0; i < marks2.length; i++) {
    console.log("marks2[" + i + "] : " + marks2[i])
}

//Remove elements from array : pop
marks2.pop()    //pops the last element from the array
marks2.pop()
console.log("***MARKS 2 ARRAY AFTER POPPING elements***")
console.log("New length: " + marks2.length);
for (let i = 0; i < marks2.length; i++) {
    console.log("marks2[" + i + "] : " + marks2[i])
}

//max index of array=length -1 (beacuse of 0 index)

//Append new elemtns to the beginning of array : push
marks2.unshift(1, 2, 3)
console.log("***MARKS 2 ARRAY AFTER PUSHING ELEMENTS to the beginning***")
console.log("New length: " + marks2.length);
for (let i = 0; i < marks2.length; i++) {
    console.log("marks2[" + i + "] : " + marks2[i])
}

//knowing the index form the value
console.log("index of 100 in marks2 array: " + marks2.indexOf(100))//will tell me the value of index where 100 exists

//validating if a certain value exists in arraY:
console.log(" *** Validating values in marks 2 *** ")
console.log("100: " + marks2.includes(100)) //true
console.log("120: " + marks2.includes(120))//false

//breaking the array to sub arrays
subMarks = marks2.slice(2, 5)   //will return a sub array  :slice from index 2 to 4 , index 5 excluded
console.log("Sliced array: \n", subMarks)

//sum of array
console.log("marks2 array: \n", marks2)
var sum = 0
console.log("***SUM OF ARRAY marks2***")
for (let i = 0; i < marks2.length; i++) {
    sum = sum + marks2[i]
}
console.log("SUM: ", sum)

//ARRAY FUNCTIONS - TO REDUCE CODE COMPLEXITY
//1. reduce
/*The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
FIRST ARGUMENT IS THE FUNCTION, SECOND IS */
//HERE SUM=ACCUMULATOR WITH INITAL VALUE 0, IF WE DON'T WRITE 0 IN THE SECOND ARGUMENT, SUM WILL BE THE FIRST ELEMENT OF ARRAY BY DEFAULT
var totalMarks = marks2.reduce((sum, individual_mark) => sum + individual_mark, 0)
console.log("Total marks by reduction function: " + totalMarks)
//OR
function accumulationFunction(sum, individual_mark) {
    return sum + individual_mark
}
totalMarks = marks2.reduce(accumulationFunction, 0)
console.log("Total marks by reduction function 2: " + totalMarks)
console.log("Marks 2 after reduction: \n" + marks2)   //remains the same because original array not affected

//FILTER METHOD
var scoresArray = [12, 13, 14, 16]
var evenScoresArray = []
//i want to get only even scores
for (let i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] % 2 == 0) {
        evenScoresArray.push(scoresArray[i])
    }
}
//using long logics
console.log("WITHOUT FILTER")
console.log("Scores Array: " + scoresArray)
console.log("EvenScoresArray: ", evenScoresArray)

//using filter method, when we have some conditions we use filter method
/*The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.*/
console.log("WITH FILTER")
evenScoresArray = scoresArray.filter(score => score % 2 == 0)
//or
function filterFunctionForEvenScores(score) {
    return score % 2 == 0
}
evenScoresArray = scoresArray.filter(filterFunctionForEvenScores)

console.log("Scores Array: " + scoresArray)
console.log("EvenScoresArray: ", evenScoresArray)

//MAP METHOD
//modifies every value of array to new value/ map from one value to new value
//maybe you want to multiply all the numbers in evenScoresarray with 3
console.log("\n*** MAP METHOD ***\n")
console.log("even Scores Array Before Mapping: ", evenScoresArray)
//score variable is used so every value of array will be stored in score
let mappedArray = evenScoresArray.map(score => score * 3)
//or
function multiplyBy3(score) {
    return score * 3
}
mappedArray = evenScoresArray.map(multiplyBy3)
console.log("Mapped score Array: ", mappedArray)

//REDUCE AGAIN TO SUM
let totalSumOfMappedArray = mappedArray.reduce(accumulationFunction)
//or
totalSumOfMappedArray = mappedArray.reduce(accumulationFunction, 0)
console.log("SUM OF MAPPED ARRAY BY REDUCE: " + totalSumOfMappedArray)

//in one go
console.log("***CHAINING METHODS***\n***SUM OF MAPPED ARRAY BY COMBINING ALL METHODS FROM ORIGINAL SCORE ARRAY:***")
//scoresarray->evenscoresArray->mapped *3->sum by reduction
let sum2 = scoresArray.filter(filterFunctionForEvenScores).map(multiplyBy3).reduce(accumulationFunction)
console.log("Sum= " + sum2)


//sorting arrays sort method, for strings , we don't use functions .sort works
console.log("\n*** SORTING ARRAYS ***\n")
console.log("**STRING ARRAYS SORT**")
let fruits = ["apple", "mango", "banana", "guava", "peach"]
sortedFruits = fruits.sort()
console.log("before sorting fruits: ",fruits)
console.log("sortedFruits:", sortedFruits)

descendedSortedFruits=fruits.reverse()
console.log("Descending sorted fruit array: ",descendedSortedFruits)

//INTEGER sort
//we need to define function
console.log("**INTEGER ARRAYS SORT**")
let numbers = [20, 50, 30, 50,7, 10]
console.log("before sorting numbers: ",numbers) //will do wron if the number was 007
sortedNumbers=numbers.sort()
console.log("sortedNumhers:", sortedNumbers)    //wrong, 7 comes at the end

sortedNumbers=numbers.sort((a,b)=>a-b)    //minimum differenc ewill be returned first becaus eof the recursive functipn that tests for every value's difference
console.log("Sorted numbers after function logic for minimun difference: ",sortedNumbers)