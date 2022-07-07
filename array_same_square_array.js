function array_same_square_array(arr1, arr2){
    let arr1List = {};
    let arr2List = {};
    if(arr1.length !== arr2.length){
         return false;
    }
    for(let index in arr1){
        arr1List[arr1[index]] = arr1List[arr1[index]]? arr1List[arr1[index]] + 1 : 1;
    }
    for(let index in arr2){
        arr2List[arr2[index]] = arr2List[arr2[index]]? arr2List[arr2[index]] + 1 : 1;
    }
    for(let index in arr1List){
        if(arr2List[index ** 2] && arr1List[index] === arr2List[index ** 2]){
            return true;
        }else{
            return false;
        }
        console.log(arr2List[index ** 2])
    }
    // console.log(arr1List)
    // console.log(arr2List)
}
const same = array_same_square_array([2, 3, 4, 2],[4, 9, 16, 4]);
console.log(same);