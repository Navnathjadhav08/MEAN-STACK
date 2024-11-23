/*
2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
var Circle = /** @class */ (function () {
    function Circle(no1) {
        this.Radius = no1;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var AreaC = 0;
console.log("Object 1");
var obj1 = new Circle(10);
AreaC = obj1.Area();
console.log("Area of Circle is " + AreaC);
console.log("Object 2");
var obj2 = new Circle(20);
AreaC = obj2.Area();
console.log("Area of Circle is " + AreaC);
