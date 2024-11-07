//Normal Function

function AdditioN(No1 : number, No2 : number) : number{
    return No1+No2
}

var ans : number = 0

ans = AdditioN(12,24)

console.log("Addition is : "+ans)

console.log(typeof(AdditioN)) 

//Unnamed Function

var TEMP = function(No1 : number , No2 : number) : number{
    return No1+No2
}

var Ans : number

Ans = TEMP(11,10)

console.log("Addition is : "+Ans)

console.log(typeof(TEMP))