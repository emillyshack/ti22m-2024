let teste = "arara";

function reverseString(str) {
    // Converte a string em um array, inverte o array, e junta de volta como string.
    let reversed = str.split("").reverse().join("");
    if (reversed == str) {
        console.log("true");
    }
    else {
        console.log("false")
    }
}

reverseString(teste); 