function same(arr1, arr2) {
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  if(arr1.length!==arr2.length){
    return false;
  } 

  for ( let val of arr1){
    frequencyCounter1[val]=(frequencyCounter1[val]||0)+1;
  }
  for ( let val of arr2){
    frequencyCounter2[val]=(frequencyCounter2[val]||0)+1;
  }

  for(let key of arr1){
    if(!(key**2 in frequencyCounter2)){
        return false;
    }
    if(frequencyCounter1[key]!==frequencyCounter2[key**2]){
        return false;
    }
  }

  return true;
}

same([1, 2, 3], [1, 4, 9]);
same([1, 4], [1, 16, 9]);
same([2, 3, 4], [4, 9, 3]);
