function Addition(Value1 : number, Value2 : number) : number
{
    console.log("Inside Addition function")
    var Ans : number = 0 //local variable
    Ans = Value1 + Value2
    //console.log("Addition is : "+Ans)
    return Ans
}

console.log("Start of application")
var Result = 0
Result = Addition(10,11)
console.log("Addition is "+Result)
console.log("End of Application")