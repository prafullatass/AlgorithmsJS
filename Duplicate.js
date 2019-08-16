// eliminate duplicate no from array
//always use hash table

const duplicate = arr => {
    var hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        if(hashTable[arr[i]] === 1)
        {
            arr.splice(i,1);
            --i;
        }
        else
            hashTable[arr[i]] = 1;
    }
    return arr;
}

const array = [3,5,3,2,34,6,2,6,3,56,4,87];
console.log(array);
console.log(duplicate(array));
