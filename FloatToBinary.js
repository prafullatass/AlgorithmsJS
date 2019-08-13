//Convert float to binary

const convert = num => {
    var binary=[];
    wholeNum = Math.floor(num);
    while(wholeNum > 0)
    {
        binary.push(wholeNum%2);
        wholeNum = Math.floor(wholeNum / 2);

    }
    var frac = num - Math.floor(num);
    var bin = [];
    for (let i = 0; i < 10 || frac ===  0; i++) {
        frac = frac*2;
        bin.push(Math.floor(frac));
        frac = frac - Math.floor(frac);
    }
    console.log(bin);

    return binary.reverse().join("") +"."+ bin.join("");
}


console.log(convert(28.12));

