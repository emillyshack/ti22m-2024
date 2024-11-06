console.log("Exercício 4")
function allEquals(arr){ 
    for (let i = 1; i < arr.length; i++){ 
        if (arr[i] !== arr[0]){
            return false; // sei que da pra usar só o return falte,mas assim é mais bonito 

        }
    }
    return true 
    
}
console.log(allEquals([1,5,1]))