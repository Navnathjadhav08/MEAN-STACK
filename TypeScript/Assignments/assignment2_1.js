/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 11 55
Output : Maximum number is 89
*/
function Maximum(arr) {
    var i = 0;
    var Max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > Max) {
            Max = arr[i];
        }
    }
    return Max;
}
var nums = [23, 89, 6, 29, 11, 55];
var Max = Maximum(nums);
console.log(Max);
