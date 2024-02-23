function maxSubArraySum(arr,num){
    if(arr.length<num){
        return false;
    }

    var maxSum=0 ;
    var tempSum=0;
    for(var i=0;i<num;i++){
        maxSum+=arr[i];
    }
    tempSum = maxSum;

    for(var i=num;i<arr.length;i++){
        tempSum = tempSum-arr[i-num]+arr[i];
        maxSum= Math.max(tempSum,maxSum);
    }

    return maxSum;
}





maxSubArraySum([1,2,5,2,8,1,5],2);
maxSubArraySum([],4);
