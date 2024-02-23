function mergeArrays(arr1, arr2) {
  var results = [];
  var i = 0;
  var j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j += 1;
    } else if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    }
    else{
        results.push(arr1[i]);
        results.push(arr2[j]);
        i++;j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
     return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  var middle = Math.floor((arr.length) / 2);
  var arr1 = mergeSort(arr.slice(0, middle));
  var arr2 = mergeSort(arr.slice(middle));
  return mergeArrays(arr1, arr2);
}


mergeSort([2, 3, 1, 3, 5, 6, 7, 6, 8]);
