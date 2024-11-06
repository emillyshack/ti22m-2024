console.log("Exercício 3")
function countOccurrences(arr, element){
    let x = 0;
    for (let i = 1; i < arr.length; i++){ 
        if (arr[i] === element) { 
            x++; 
        }
    }
    if (x === 0) {
            console.log("Não há elementos iguais nesse conjunto.")
        }
    
    return x;
    }


console.log(countOccurrences([2,5,4,7,7,69,84] , 2))