function insertion_sort(arr){
     for (let i = 1; i < arr.length; i++) {
        lowest = i;
        for (let j = i-0; j >= 0; j--) {
            // console.log(arr[i],arr[j])
            if(arr[j] > arr[lowest]){
                temp = arr[lowest];
                arr[lowest] = arr[j];
                arr[j] = temp;
                lowest --;
            }else{
                break;
            }
        }
     }
     return arr;
}
console.log(insertion_sort([3,5,4,2,7,9,6]));