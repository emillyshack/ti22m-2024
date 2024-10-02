let inputIdade = document.getElementById("idade");
let botaoCalcular = document.getElementById("calcular");
let divResultado = document.getElementById("resultado");

function classificarAtleta() {
    let idade = Number(inputIdade.value); 
    let categoria = ""; 

    if (idade >= 5 && idade <= 7) {
        categoria = "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B";
    } else if (idade >= 18) {
        categoria = "Adulto";
    } else {
        categoria = "Idade fora das categorias (Menor que 5 anos)";
    }

    divResultado.innerText = `O atleta está na categoria: ${categoria}`;
}

botaoCalcular.onclick = classificarAtleta;
