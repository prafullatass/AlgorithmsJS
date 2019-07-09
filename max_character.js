//Given a string of characters, return the character that
//appears the most often.

var str = "Hello World";

var strChar = str.toLowerCase().split('');
var CountChar = {};
strChar.forEach(char => {
    CountChar[char] = CountChar[char] + 1 || 1;
});
console.log(CountChar);

var maxChar = '';
count = 0;
for (const key in CountChar) {
    if( CountChar[key] >= count)
    {
        count = CountChar[key];
        maxChar = key;
    }
}
console.log(maxChar, count);
