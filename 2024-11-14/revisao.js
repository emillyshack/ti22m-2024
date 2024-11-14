const numeros = [10,15,20,25,30,35]
// quando não precisa usar o índice, o FOR OF pode ser usado.
const copia = []

for(numero of numeros){
    copia.push(numero*10)
}

// formas de declarar funções: tradicional + anônima, abreviada

function multiplica10(elemento){
    return elemento + 10
}
const copia = numeros.map(function(elemento){
    return elemento*10
})
// map devolve uma cópia do vetor que ele esta mapeando
// criar função anônima que só existe dentro do map
const copia = numeros.map(multiplica10)

const multiplica2 = function(elemento){
    return elemento *2
}
// função flecha
const multiplica3 = (elemento) => {
    return elemento * 3
}
console.log(copia)