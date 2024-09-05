let inputDistanciap = document.getElementById("distanciap")
let inputVeiculo = document.getElementById("veiculo")
let inputPedagio = document.getElementById("pedagio")
let inputCombus = document.getElementById("combus")
let calculaValor = document.getElementById ("calcularvalor")

// let i nputTrajeto = document.getElementById
botaocalcularvalor.onclick = valor

function calculaValor(){
let distanciap = Number(inputDistanciap.value)
let veiculo = Number(inputVeiculo.value)
let pedagio = Number(inputPedagio.value)
let combus = Number(inputCombus.value)
// let trajeto = Number(inputTrajeto.value)

let valor = pedagio + (((veiculo/10) * combus) * distanciap)
divSaida.innerText = valor
}