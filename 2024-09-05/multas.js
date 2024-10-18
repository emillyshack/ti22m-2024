let inputVeiculo =  document.getElementById("veicuclo")
let inputVelocidade = document.getElementById("velocidade")

let divSaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("botaoCalcular")
// Vincula a função ao clique do botão
botaoCalcular.onclick = calculaMulta

function calculaMulta(){
    let veicuclo = Number(inputVeiculo.value)
    let velocidade = Number(inputVelocidade.value)

    if (velocidade < veicuclo) {
        let multa = (veicuclo * 100) / velocidade

        if (multa <=20)
            divSaida.innerText = "Você excedeu 20% do limite de velocidade. Sua multa é de R$ 130,16"

        else if (50> multa && multa >=20)
            divSaida.innerText = "Você excedeu mais de 20% limite de velocidade. Sua multa é de R$ 195,23"
        else if (multa > 50)
            divSaida.innerText = "Você excedeu 50% do limite de velocidade. Sua multa é de R$ 880,41"
    }
    else{
        divSaida.innerText = "Você está dentro do limite de velocidade do percurso."
    }
}

