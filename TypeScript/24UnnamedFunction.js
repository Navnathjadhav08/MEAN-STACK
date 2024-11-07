//Normal Function
function AdditioN(No1, No2) {
    return No1 + No2;
}
var ans = 0;
ans = AdditioN(12, 24);
console.log("Addition is : " + ans);
console.log(typeof (AdditioN));
//Unnamed Function
var TEMP = function (No1, No2) {
    return No1 + No2;
};
var Ans;
Ans = TEMP(11, 10);
console.log("Addition is : " + Ans);
console.log(typeof (TEMP));
