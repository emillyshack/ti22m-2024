let inputLado1 = document.getElementById("lado1");
let inputLado2 = document.getElementById("lado2");
let inputLado3 = document.getElementById("lado3");
let botaoVerificarTriangulo = document.getElementById("Verificar");
let divResultado = document.getElementById("resultado");
botaoVerificarTriangulo.onclick = VerificarTriangulo;
function VerificarTriangulo(lado1, lado2, lado3){
    let lado1 = Number(inputLado1.value);
    let lado2 = Number(inputLado2.value);
    let lado3 = Number(inputLado3.value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1)
            {
                divResultado.innerText = `Essas medidas formam um triângulo isóceles!`;

            else if (lado2 === lado1 && lado2 === lado3)
                {divResultado.innerText = `Essas medidas formam um triângulo equilátero!`;
                }
        
            else {divResultado.innerText = `Essas medidas formam um triângulo!`;
            }
    else {divResultado.innerText = `Essas medidas NÃO formam um triângulo.`;
        }
}
