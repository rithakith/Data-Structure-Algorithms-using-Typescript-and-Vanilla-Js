function swap(minIndex,i,arr){
  var temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

function selection(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(minIndex,i,arr);
    }
  }                                                                                                                                                                                                                                                                                        
  console.log(arr);
}
selection([2, 3, 4, 5, 6]);
selection([2, 1, 5, 7, 4, 9]);

selection([4, 3, 6, 8, 9, 5]);