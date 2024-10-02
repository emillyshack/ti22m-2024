let inputLado1 = document.getElementById("lado1");
let inputLado2 = document.getElementById("lado2");
let inputLado3 = document.getElementById("lado3");
let botaoehTriangulo = document.getElementById("ehTriangulo");
let divResultado = document.getElementById("resultado");

function ehTriangulo(lado1, lado2, lado3){
    let lado1 = Number(inputLado1.value);
    let lado2 = Number(inputLado2.value);
    let lado3 = Number(inputLado3.value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (
            (lado1 < lado2 + lado3 && lado1 > Math.abs(lado2 - lado3)) &&
            (lado2 < lado1 + lado3 && lado2 > Math.abs(lado1 - lado3)) &&
            (lado3 < lado1 + lado2 && lado3 > Math.abs(lado1 - lado2))
        ) {
            divResultado.innerText = "Essas medidas formam um triângulo!";
        } else {
            divResultado.innerText = "Essas medidas NÃO formam um triângulo.";
        }
    } else {
        divResultado.innerText = "Os lados devem ser maiores que 0.";
    }
}

botaoEhTriangulo.onclick = ehTriangulo;

return false
}


// PROGRAMA PRINCIPAL

let l1 = 10
let l2 = 20
let l3 = 15

if (ehTriangulo(l1,l2,l3)){
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`)
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}

// -------------------------------------------