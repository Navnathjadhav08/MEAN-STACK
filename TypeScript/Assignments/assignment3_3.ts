/*
3. Create one typescript application which contains one class named as CircleXX which sill 
inherits above CircleX class. 
In CircleXX class we have to write one method (Behaviours) as Circumference which will return 
circumference of circleX. 
After designing the class create two objects of that class by providing some hardcoded value. 
Call Circumference and Area methods by using both the objects.
*/

class CircleX{

    Radius : number
    PI : number
    
    constructor(no1 : number ){
        this.Radius = no1
        this.PI = 3.14
    }

    Area() : number {
        return this.PI*this.Radius*this.Radius
    }

    
}

class CircleXX extends CircleX{
    
    Circumference() : number{
        return 2*this.PI*this.Radius
    }
    
}

var AreaC : number = 0
var Circum : number = 0

console.log("Object 1")
var ob_j = new CircleXX(10) 
AreaC = ob_j.Area()
Circum = Math.floor(ob_j.Circumference())
console.log("Area of Circle is "+AreaC)
console.log("Area of Circumference is "+Circum)

