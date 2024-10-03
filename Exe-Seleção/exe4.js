let inputPeso = document.getElementById("Peso");
let inputIdade = document.getElementById("Idade");
let botaoCalcular = document.getElementById("Calcular");
let divResultado = document.getElementById("resultado");
botaoCalcular.onclick = Calcular;
function Calcular() { 
    let Peso = Number(inputPeso.value);
    let Idade = Number(inputIdade.value);

    if (Peso > 0 && Idade >= 0 ) {
        if (Idade > 12 && Peso > 60){ divResultado.innerText = `Dsagem: 1000 mg`; }
        else if (Idade > 12 && Peso < 60) { divResultado.innerText = `Dsagem: 750 mg`;}
        else if (Idade <12 && Peso >= 5 && Peso <= 9) {divResultado.innerText = `Dsagem: 125 mg`;}
        else if (Idade <12 && Peso >= 9.1 && Peso <= 16) {divResultado.innerText = `Dsagem: 250 mg`;}
        else if (Idade <12 && Peso >= 16.1 && Peso <= 24) {divResultado.innerText = `Dsagem: 500 mg`;}
        else {divResultado.innerText = `Dsagem: 750 mg`;} }
    else{divResultado.innerText = `Essas medidas NÃO formam uma pessoa.`;}
} 
