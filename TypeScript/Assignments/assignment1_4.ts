/*
4. Write a typescript program which contains one function named as ChkPrime. That function should 
accept one number and it should return true if the given number is prime and otherwise return false. 
Input :  11
Output : It is prime number 

*/

function ChkPrime(No1 : number)  {

  
    var i :number = 0
   for( i = 2 ; i <= No1/2 ; i++){
        if(No1 % i == 0){
            console.log("is a not prime Number")
            return
        }
   }

   console.log("is a  prime Number")
    
}

ChkPrime(7)