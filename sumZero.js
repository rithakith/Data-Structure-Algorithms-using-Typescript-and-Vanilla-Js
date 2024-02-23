function sumZero(arr){
    var left = 0;
    var right = arr.length-1;

    while(left<right){
        var sum = arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }
        if(sum<0){
            left++;
        }
        else{
            right--;
        }
    }
    return "no sum zero";
}




sumZero([-3,-2,-1,0,1,2,3]);
sumZero([-2,0,1,3]);
sumZero([1,2,3]);