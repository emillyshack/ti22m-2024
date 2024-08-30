let inputDistanciap = document.getElementById
let inputVeiculo = document.getElementById
let inputPedagio = document.getElementById
let inputCombus = document.getElementById
// let inputTrajeto = document.getElementById

function calculaValor(){
let distanciap = Number(inputDistanciap.value)
let veiculo = Number(inputVeiculo.value)
let pedagio = Number(inputPedagio.value)
let combus = Number(inputCombus.value)
// let trajeto = Number(inputTrajeto.value)
let valor = pedagio + (((veiculo/10) * combus) * distanciap)
divSaida.innerText = valor
}