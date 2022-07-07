function binary_search(arr, element){
    let start = 0;
    let end = arr.length - 1;
    let middle;
    // return middle = Math.floor((start + end)/2);
    while(start <= end){
        middle = Math.round((start + end)/2);
        if(arr[middle] === element){
            return middle;
        }
        if(arr[middle] > element){
            end = middle - 1;
        }
        else if(arr[middle] < element){
            start = middle + 1;
        }
    }
    return -1;
}
console.log(binary_search([2,3,4,5,6,7,8], -9));