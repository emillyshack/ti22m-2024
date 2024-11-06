function findMax(arr){ 
    let max = arr[0]; // arr[a] a é o índice do elemento do meu array. Aqui começa no primeiro.
    for (let i = 1; i < arr.length; i++) { // lenght é o valor total dos elementos dentro do arr
        if (arr[i] > max) { // Se o elemento atual é maior que max
            max = arr[i]; // Atualiza max com o valor do elemento atual
        }
    }
    return max;
}
console.log(findMax([20, -7, 5, 7]))