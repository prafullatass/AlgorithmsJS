//reverse the statement
var str = "this is a test program"

str = str.split('').reverse().join('');
console.log(str);

//reverse the line by keeping words same
var str = "this is a test program";

str = str.split(' ').reverse().join(" ");
console.log(str);