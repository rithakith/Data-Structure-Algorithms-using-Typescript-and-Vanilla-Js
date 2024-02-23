function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    console.log(newArr);
    return newArr;
  }
  if (!(arr[0] % 2 === 0)) {
    newArr.push(arr[0]);
  }
  //   collectOddValues(arr.slice(1));
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([2, 3, 1, 3, 5, 6, 7, 6, 8]);
