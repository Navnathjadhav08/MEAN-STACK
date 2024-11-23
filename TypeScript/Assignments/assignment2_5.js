/*
5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Mumbai” word or not.
Input :
“Pune Mumbai Nashik Nagpur "
Output :
String contains Mumbai in it.
*/
function isPresent(str, word) {
    if (str.split(" ").includes(word)) {
        return true;
    }
    return false;
}
var word = "Mumbai";
var str = "Pune Mumbai Nashik Nagpur";
if (isPresent(str, word)) {
    console.log("String contain'".concat(word, "' in it"));
}
else {
    console.log();
}
