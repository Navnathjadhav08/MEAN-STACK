/*
2. Write a typescript program which contains one function named as Summation. That function 
accepts array of numbers and returns the summation of each number from array. 
Input : 23 89 6 29 11 55
Output : Maximum number is 89 
*/

function Maximum(arr : number[] ) : number {
    
    var i = 0
    var Max = 0
    for( i = 0; i<arr.length ; i++){
        if(arr[i] > Max){
            Max = arr[i]
        }
    }
    return Max
}

var nums : number[] = [23,89,6,29,11,55]
var Max : number = Maximum(nums)

console.log("Maximum number is : "+Max)