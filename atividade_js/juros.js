let inputCapital = document.getElementById("Capital")
let inputTempo = document.getElementById("Tempo")
let inputTaxa = document.getElementById("Taxa")
let inputButton = document.getElementById("calc")

let divSaida = document.getElementById("saida")

inputButton.onclick = CalcularJuros ()
// let divSaida2 = document.getElementById("saida2")

function CalcularJuros {
    let C = Number (inputCapital.value)
    let t = Number (inputTempo.value)
    let taxa = Number (inputTaxa.value) / 100;

    // let i = 1/100
    let m = C * Math.pow(1+taxa,t);

    let calc = m-C;

    divSaida.innerText = `O valor dos juros compostos é R$ ${calc}`;
    // divSaida2.innerText = capital
}
