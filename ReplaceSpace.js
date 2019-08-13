//Replace each space with %20
//in a given string

const replace = str => {
    var newstring = "";

    for(var i = 0; i < str.length; i++){
        if(str[i] == " ")
            newstring +=  "%20";
        else
            newstring +=  str[i];
        }
    return newstring;
}

console.log(replace("a d f"));

