//Normal Function
function AdditioN2(No1, No2) {
    return No1 + No2;
}
var ans = 0;
ans = AdditioN2(12, 24);
console.log("Addition is : " + ans);
console.log(typeof (AdditioN2));
//Unnamed Function
var TEMP = function (No1, No2) {
    return No1 + No2;
};
var Ans;
Ans = TEMP(11, 10);
console.log("Addition is : " + Ans);
console.log(typeof (TEMP));
// Lambda Function
var TEMP1 = function (No1, No2) { return No1 + No2; };
Ans = TEMP1(19, 10);
console.log("Addition is : " + Ans);
console.log(typeof (TEMP1));
// Lambda Statement
var TEMP2 = function (No1, No2) {
    console.log("Inside Addition Lambda Statement");
    var result = 0;
    result = No1 + No2;
    return result;
};
var Ans3 = 0;
Ans3 = TEMP2(10, 30);
console.log("AdditioN is : " + Ans3);
console.log(typeof (TEMP1));
