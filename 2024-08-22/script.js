
// o "." nos da opção de tudo que podemos fazer no DOM

let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
// Entrada
let peso = Number(document.getElementById("peso").value)
let altura = Number(document.getElementById("altura").value)
// Processamento
let imc = peso/(altura*altura)
// saída
document.write("IMC: ", imc)

