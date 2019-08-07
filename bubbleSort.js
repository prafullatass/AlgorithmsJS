// implement bubble sort

function bubbleSort(arr){
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

console.log("-----before sorting-----")
var array = [10,5,3,8,2,6,4,7,9,1];
console.log(array);
console.log("-----after sorting-----")
console.log(bubbleSort(array));