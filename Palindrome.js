//A palindrome is a word or phrase that reads the same backward as forward.
// eg "anna"

const palindrome = (str1) => {
    str ="";
    str1 = str1.toLowerCase();
    // check only characters exclude all white spaces, numbers or characters
   for (let i = 0; i < str1.length; i++) {
      if(str1[i]>="a" && str1[i]<="z")
        str += str1[i];
   }
    console.log(str);
str1 = str1.toLowerCase().split(' ').join('');
console.log(str1.toLowerCase().split(' ').join('').split('').reverse().join(''));
return str1 === str1.toLowerCase().split('').reverse().join('');
}

console.log(palindrome("Cigar Toss it in a can It is so tragic"));
console.log(palindrome("Friend is best!"));