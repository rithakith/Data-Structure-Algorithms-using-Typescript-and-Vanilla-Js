function pivot(arr, start=0, end=arr.length+1) {
  var swapIndex = start;
  var firstValue = arr[start];
  for (var i = start + 1; i < arr.length; i++) {
    if (firstValue > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);

    }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

function swap(arr, swapIndex, start) {
  var temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
  return 0;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
function quickSort(arr, left = 0, right = arr.length - 1) {
    // if (arr.length <= 1) {
    // //   console.log(arr);
    //   return arr;
    // }

  if (left < right) {
    var index = pivot(arr,left,right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index+1, right);
  }
  console.log(arr);
  return arr;
}

quickSort([2, 3, 1, 3, 5, 6, 7, 6, 8]);
