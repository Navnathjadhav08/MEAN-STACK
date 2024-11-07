//Normal Function
function AdditioN1(No1, No2) {
    return No1 + No2;
}
var ans = 0;
ans = AdditioN1(12, 24);
console.log("Addition is : " + ans);
console.log(typeof (AdditioN1));
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
