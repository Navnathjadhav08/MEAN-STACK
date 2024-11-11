/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input :  23 89 6
Output :
Maximum number is 89

*/
function Maximum(No1, No2, No3) {
    var max = No1;
    if (No2 > max) {
        max = No2;
    }
    else if (No3 > max) {
        max = No3;
    }
    return max;
}
var max = Maximum(23, 89, 6);
console.log("Maximum number is : ", max);
