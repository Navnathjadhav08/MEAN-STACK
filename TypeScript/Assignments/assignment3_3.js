/*
3. Create one typescript application which contains one class named as CircleXX which sill
inherits above CircleX class.
In CircleXX class we have to write one method (Behaviours) as Circumference which will return
circumference of circleX.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CircleX = /** @class */ (function () {
    function CircleX(no1) {
        this.Radius = no1;
        this.PI = 3.14;
    }
    CircleX.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return CircleX;
}());
var CircleXX = /** @class */ (function (_super) {
    __extends(CircleXX, _super);
    function CircleXX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleXX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleXX;
}(CircleX));
var AreaC = 0;
var Circum = 0;
console.log("Object 1");
var ob_j = new CircleXX(10);
AreaC = ob_j.Area();
Circum = Math.floor(ob_j.Circumference());
console.log("Area of Circle is " + AreaC);
console.log("Area of Circumference is " + Circum);
