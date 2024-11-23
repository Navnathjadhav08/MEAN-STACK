/*
2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 89 6 29 11 55
Output : Addition is 213
*/
function Addition2(arr) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var nums = [23, 89, 6, 29, 11, 55];
var Sum = Addition2(nums);
console.log("Addition is : " + Sum);
