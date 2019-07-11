// given an array with an array of numbers and number find numbers that add to given number
//[[1,2,3,4,2], 4] output =[[2.2],[3,1]]

const twoSum = arr => {
    var givenArray =arr[0];
    var outputArray = [];
    while (givenArray.length > 0){
        var num = givenArray.pop();
        for(var i=0; i< givenArray.length; i++){
            if(givenArray[i] + num === arr[1])
            {
                outputArray.push([num,givenArray[i]]);
                givenArray.splice(i,1);
            }
        }
    }
    return outputArray;
}


console.log(twoSum([[1,2,3,4,2,3,0,5], 5]));

