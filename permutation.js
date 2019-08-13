// if input is xyz output should be
//xyz, yzx,zxy,xzy,yxz,zyx

const permulation = (perm, word) => {
    if(word === ""){
        console.log(perm);
    }
    else
    {
        for(var i = 0; i < word.length ; i++){

            permulation(perm + word[i] ,word.substr(0,i) + word.substr(i+1, word.length-1));

        }
    }
}


permulation("", "ASD");