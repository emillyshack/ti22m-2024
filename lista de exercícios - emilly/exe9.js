function reverseArray(arr) {
    let revertee = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revertee.push(arr[i]);
    }
    return revertee;
}
console.log(reverseArray(["banana","joao","rafael"]))