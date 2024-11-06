console.log("somar números")

function sumArray(arr){
        let somar = 0;
        for (let i = 0; i < arr.length; i++) {
            somar += arr[i]; }
        return somar;
    }
console.log(sumArray([5,8,10]))
console.log(sumArray([200,5411,10]))
console.log(sumArray([51,4740,89]))
