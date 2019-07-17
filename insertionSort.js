

// sort an array using insertion sort
//{4,2,1} => {2,4,1} => {1,2,4}

const insertionSort =(arr) => {
    for (let i = 1; i < arr.length; i++) {
        const value = array[i];
        var j = i;

        while (j > 0 && arr[j-1] > value){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = value;
     }
     return arr;
}

const array = [3,8,2,6,4]
console.log(insertionSort(array));