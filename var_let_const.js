//VAR , LET , CONST SCOPE

//var scope is either on global level or function level

//VAR -GLOBAL
//the scope of var is global if it is declared in the global level
//scope of var is within the function if it is declared inside th eufnction
var greetGlobal="Good Morning"
function add(c,d){
    var greet="Morning"
   
    console.log("greet inside the function: ",greet)  //accessible because within the function
    console.log("greet global inside the function: ",greetGlobal)    //accessible

    return c+d
}
add(2,3)
//console.log(greet)  //inaccessible because was declared inside the function
console.log("greet global outside the function: ",greetGlobal)   //accessible becase declared globally outside the function




if(1==1)
{
    var greet="Afternoon"   //the mrorning greet is within the function so it is functional
    //now var  is afternoon and it is global becaus eit is not in function, it is in if
    var greetGlobal="Good Afternoon"    //rewritten, is Good afternnon on global level
}
console.log(greetGlobal)    //overwritten
console.log(greet)  //now accessible, but only afternooon waala

//let
//but if we use let it will be not overwritten, it will be good afternoon only inside the if blick
let greetGlobalLet="GOOD MORNING LET"
console.log("greet global let outside if block - before overwriting: ",greetGlobalLet)
if(1==1){
  //  console.log("greet global let inside if block - before overwriting: ",greetGlobalLet)   //can access it here but not after declaring it with let again in this block
    greetGlobalLet="GOOD AFTERNOON LET"
    console.log("greet global let inside if block - after overwriting: ",greetGlobalLet)
}
console.log("greet global let outside if block - after overwriting: ",greetGlobalLet)

//let can't be redeclared, var can be

