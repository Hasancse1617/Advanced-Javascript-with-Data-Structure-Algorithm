function bubble_sort(arr){
    let isSwap;
    for(i=0; i<arr.length; i++){
        isSwap = false;
        for(j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                isSwap = true;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        if(!isSwap){
            break;
        }
    }
    return arr;
}
console.log(bubble_sort([9,3,4,5,6]));