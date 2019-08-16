//Select First Non repeat char from string

//eg  'asdad' s is the first non repeat char

const nonRepeatChar = str => {
    var hash = {};
    var FirstChar = [];
    for (let i = 0; i < str.length; i++) {
        hash[str[i]] = hash[str[i]] + 1 || 1;
        if(hash[str[i]] === 1)
            FirstChar.push(str[i]);
        else
        if(hash[str[i]] === 2)
        {
            var ind = FirstChar.indexOf(str[i]);
            FirstChar.splice(ind,1);
        }
        console.log(FirstChar)
    }
    return(FirstChar[0]);
}


console.log("ans", nonRepeatChar("asdadadpp"));