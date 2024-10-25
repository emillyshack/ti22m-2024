let teste = "jurandir";

function reverseString(str) {
    // Converte a string em um array, inverte o array, e junta de volta como string.
    let reversed = str.split("").reverse().join("");
    console.log(reversed);
}

reverseString(teste); 
