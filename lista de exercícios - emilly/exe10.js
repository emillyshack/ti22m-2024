function findIndex(arr, element) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : -1; ;
}
console.log(findIndex([1,5,6,7], 5))