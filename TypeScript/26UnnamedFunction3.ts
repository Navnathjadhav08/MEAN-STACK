//Normal Function

function AdditioN2(No1 : number, No2 : number) : number{
    return No1+No2
}

var ans : number = 0

ans = AdditioN2(12,24)

console.log("Addition is : "+ans)

console.log(typeof(AdditioN2)) 

//Unnamed Function

var TEMP = function(No1 : number , No2 : number) : number{
    return No1+No2
}

var Ans : number

Ans = TEMP(11,10)

console.log("Addition is : "+Ans)

console.log(typeof(TEMP))


// Lambda Function
var TEMP1 = (No1 :number,No2:number) => No1+No2

Ans = TEMP1(19,10)

console.log("Addition is : "+Ans)

console.log(typeof(TEMP1))


// Lambda Statement

var TEMP2 = (No1 : number , No2 : number) =>{
    console.log("Inside Addition Lambda Statement")
    var result : number = 0
    result = No1 + No2
    return result
}

var Ans3 : number = 0

Ans3 = TEMP2(10,30)

console.log("AdditioN is : " +Ans3)

console.log(typeof(TEMP1))


