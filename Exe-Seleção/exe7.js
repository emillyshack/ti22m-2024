let inputAlc = document.getElementById("alc");
let inputGasosa = document.getElementById("gasosa");
let saida = document.getElementById("saida");
let botao = document.getElementById("button");

botao.onclick = medida;

function medida() {
    let a = Number(inputAlc.value) * 0.7; 
    let b = Number(inputGasosa.value) ; 
    if (a > b) {
        saida.innerText = "Compensa"; 
    } else {
        saida.innerText = "Não compensa";
    }
}