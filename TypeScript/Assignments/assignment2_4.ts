/*
4. Write a typescript program which contains one arrow function named as ChkArmstrong. That 
function accepts one numbers and check whether number is Armstrong number or not. 
Input :  153
Output : It is Armstrong number 
*/

function isArmstrong(num1 : number ) : boolean {
    var sum = 0
    var temp =num1
    var digit = 0
    var totaldigit = 0

    while(temp > 0){
        temp = Math.floor(temp/10)
        totaldigit++
    }
    temp = num1

   while(temp != 0){
      digit = temp%10
      temp = Math.floor(temp/10)
      let power : number =1
      
      for(let i :number = 0;i<totaldigit;i++){
        power *=digit
      }
      sum += power
   }
   console.log(sum)
   if(sum == num1){
    return true
   }
   return false
}

var num : number = 15
if(isArmstrong(num)){
    console.log("It is Armstrong number")
}else{
    console.log("It is Not Armstrong number")
}

