/*
5. Write a typescript program which contains one function named as ChkString. That function accept 
one string and check whether that string contains “Mumbai” word or not. 
Input : 
“Pune Mumbai Nashik Nagpur " 
Output :  
String contains Mumbai in it.
*/

function isPresent(str : string,word: string ) : boolean {
   
    if(str.split(" ").includes(word)){
        return true
    }
    return false
}

var word : string = "Mumbai"
var str : string = "Pune Mumbai Nashik Nagpur"
if(isPresent(str,word)){
    console.log(`String contain'${word}' in it`)
}else{
    console.log(`String contain'${word}' in it`)
}

