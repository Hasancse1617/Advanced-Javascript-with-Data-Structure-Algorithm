function linear_search(arr, element){
    for(let index in arr){
        if(arr[index] === element){
            return index;
        }
    }
    return -1;
}
console.log(linear_search([2,4,6,4.8], 9))