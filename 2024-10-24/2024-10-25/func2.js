let teste = "macaco";

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A string contém ${count} vogal(is).`);
    } else {
        console.log("Não há vogais.");
    }
}

countVowels(teste);
