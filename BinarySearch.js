// Binary Search

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not found', i);
        return -1;
    }

}

var ar=[1,2,3,4,5,6,7,8,9,10,11];
binarySearch(ar,3);
binarySearch(ar,7);
binarySearch(ar,13);

