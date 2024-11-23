/*
3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 11 55
Output : Second maximum is 55
*/
function Maximum2(arr) {
    var i = 0;
    var Max1 = 0;
    var Max2 = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > Max1) {
            Max2 = Max1;
            Max1 = arr[i];
        }
        else if (arr[i] > Max2 && arr[i] != Max1) {
            Max2 = arr[i];
        }
    }
    return Max2;
}
var nums = [23, 89, 6, 29, 11, 55];
var Max = Maximum2(nums);
console.log("Second Maximum number is : " + Max);
