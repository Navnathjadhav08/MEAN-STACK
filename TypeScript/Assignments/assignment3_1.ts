/*
1. Create one typescript application which contains one class named as Arithmetic. 
Arithmetic class contains three characteristics (Class data members) as Number1, Number2. 
Create one parametrised constructor which accept two values and assign it to Number1 and 
Number2.  
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction , 
Multiplication and Division.  
Addition method will add Number1 , Number2 & return result. 
Subtraction method will subtract Number1 , Number2 & return result. 
Multiplication method will multiply Number1 , Number2 & return result. 
Division method will divide Number1 , Number2 & return result. 
After designing the class create two objects of that class by providing some hardcoded value. 
Call all the methods by using both the objects. 
*/

class Arithmetic{

    Number1 : number
    Number2 : number
    
    constructor(no1 : number ,no2 : number){
        this.Number1 = no1
        this.Number2 = no2
    }

    Addition() : number {
        return this.Number1 + this.Number2
    }

    Substraction() : number{
        return this.Number1 - this.Number2
    }

    Multiplication() : number{
        return this.Number1*this.Number2
    }

    Division() : number{
        return this.Number1/this.Number2
    }
}

var Result : number = 0

console.log("Object 1")
var obj1 = new Arithmetic(10,2) 
Result = obj1.Addition()
console.log("addition is "+Result)

Result = obj1.Substraction()
console.log("Substraction is "+Result)

Result = obj1.Multiplication()
console.log("Multiplication is "+Result)

Result = obj1.Division()
console.log("Division is "+Result)

console.log("Object 2")

var obj2 = new Arithmetic(100,4) 
Result = obj2.Addition()
console.log("addition is "+Result)

Result = obj2.Substraction()
console.log("Substraction is "+Result)

Result = obj2.Multiplication()
console.log("Multiplication is "+Result)

Result = obj2.Division()
console.log("Division is "+Result)



