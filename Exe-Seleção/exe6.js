let inputAno = document.getElementById("Ano");
let botaoCalcular = document.getElementById("Calcular");
let divResultado = document.getElementById("Resultado");
botaoCalcular.onclick = Calcular;
function Calcular() { 
    let Ano = Number(inputAno.value);

    if ( Ano > 0 ){
        if (Ano % 400 === 0 || Ano % 4 === 0)
        {divResultado.innerText = `O ano ${Ano} é bissexto`; } 
        else {divResultado.innerText = `O ano ${Ano} não é bissexto`} }
    else {divResultado.innerText = `O ano ${Ano} não é válido `;} 
}
