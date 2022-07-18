function selection_sort(arr){
    let lowest;
    for (let i = 0; i < arr.length; i++) {
        lowest = i;
       for (let j = i+1; j < arr.length; j++) {
         if(arr[lowest] > arr[j]){
            lowest = j;
         }
       }//check small value and update next
       if(i !== lowest){
            temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
       }
    }
    return arr;
}
console.log(selection_sort([4,6,2,7,8,5,2,8,5]));