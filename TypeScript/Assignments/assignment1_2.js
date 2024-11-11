/*
2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input :
5
Output :
Area of circle is 78.5

*/
function Area(Radius, PI) {
    var area = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = PI * Radius * Radius;
    return area;
}
var area = Area(5);
console.log("Maximum number is : ", area);
