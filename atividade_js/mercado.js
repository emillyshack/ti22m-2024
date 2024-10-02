let inputNota20 = document.getElementById("nota20")
let inputNota10 = document.getElementById("nota10")
let inputMoeda = document.getElementById("moeda")
let inputTroco = document.getElementById("troco")
let botaoCalcular = document.getElementById("calcular")
let divNota20 = document.getElementById("resultadoNota20");
let divNota10 = document.getElementById("resultadoNota10");
let divMoeda = document.getElementById("resultadoMoeda");

botaoCalcular.onclick = calcularesto;
function calcularesto () {
    let troco = Number(inputTroco.value)
    // let nota20 = Number(inputNota20.value)
    // let nota10 = Number(inputNota10.value)
    // let moeda = Number(inputMoeda.value)

    let nota20 = Math.floor(troco / 20);
    let resto = troco % 20;
    let nota10 = Math.floor(resto / 10);
    let moeda = resto % 10;


    divNota20.innerText = `Seu troco em cédulas de R$20 é de ${nota20}`
    divNota10.innerText = `Seu troco em cédulas de R$10 é de ${nota10}`
    divMoeda.innerText = `Seu troco em moedas variadas é de ${moeda}`

}