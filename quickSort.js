//Quick Sort

function quickSort(items) {

    var length = items.length;

    if (length <= 1) {
      return items;
    }
    var PIVOT = items[0];
    var GREATER = [];
    var LESSER = [];

    for (var i = 1; i < length; i++) {
      if (items[i] > PIVOT) {
        GREATER.push(items[i]);
      } else {
        LESSER.push(items[i]);
      }
    }

    var sorted = quickSort(LESSER);
    sorted.push(PIVOT);
    sorted = sorted.concat(quickSort(GREATER));

    return sorted;
  }

  //Implementation of quick sort

  var ar = [0, 5, 3, 2, 2];
  //Array before Sort
  console.log(ar);
  ar = quickSort(ar);
  console.log(ar);