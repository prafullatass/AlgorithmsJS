//reverse the statement
var str = "this is a test program"

str = str.split('').reverse().join('');
console.log(str);

//reverse the line by keeping words same
var str = "this is a test program";

str = str.split(' ').reverse().join(" ");
console.log(str);


//reverse numbers by keeping sign same

var num = -12332;
var reverseNum =
(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num);

console.log(reverseNum);