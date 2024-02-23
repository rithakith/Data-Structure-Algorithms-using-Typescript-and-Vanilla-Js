function search(arr,num){
    var left = 0;
    var right = arr.length-1;

    while(left<=right){
        var middle = Math.floor((left+right)/2);
        if(arr[middle]===num){
            console.log("middle is "+middle);
            return middle;
        }
        else if(arr[middle]<num){
            left=middle+1;
        }
        else{
            right=middle-1;
        }
    }
    console.log("-1")
    return -1;
}





search([1,2,3,4,5,6],4);
search([1,2,3,4,5,6],8);
search([],4);