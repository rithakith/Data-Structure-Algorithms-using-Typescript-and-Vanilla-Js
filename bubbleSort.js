function bubble(arr) {
  var noSwaps = false;

  for (var i = 0; i < arr.length - 1; i++) {
    noSwaps = true;
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      console.log(arr + i + " loops");
      return;
    }
  }
}

bubble([2, 3, 4, 5, 6]);
bubble([2, 1, 5, 7, 4, 9]);

bubble([4, 3, 6, 8, 9, 5]);
