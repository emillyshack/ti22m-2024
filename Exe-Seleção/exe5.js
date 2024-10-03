function converterMedida(centimetros, unidade) {
    let resultado;

    switch (unidade) {
        case 'm':
            resultado = centimetros / 100;
            break;
        case 'mm':
            resultado = centimetros * 10;
            break;
        case 'km':
            resultado = centimetros / 100000;
            break;
        default:
            return 'Unidade inválida. Use "m", "mm" ou "km".';
    }

    return resultado;
}

let inputCentimetros = document.getElementById("centimetros");
let selectUnidade = document.getElementById("unidade");
let botaoConverter = document.getElementById("converter");
let divResultado = document.getElementById("resultado");

botaoConverter.onclick = function() {
    let centimetros = Number(inputCentimetros.value);
    let unidade = selectUnidade.value;

    let resultado = converterMedida(centimetros, unidade);
    divResultado.innerText = `Resultado: ${resultado} ${unidade}`;
};
