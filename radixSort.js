function radixSort(arr) {
  // requirements : get maximum Count of digits, create an array to store them,get the digit for place
  var maxDigitCount = maxDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let num = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      var digitInPlace = getDigitInPlace(arr[j], i);
      num[digitInPlace].push(arr[j]);
    }  arr = [].concat(...num);

  }
  return arr;
}

function maxDigits(arr) {
  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, getDigits(arr[i]));
  }

  return max;
}

function getDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}  

function getDigitInPlace(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(radixSort([2, 387878, 188, 983, 50, 68, 7, 6889988, 8]));
