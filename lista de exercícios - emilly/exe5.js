console.log("Exercício 5")
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(["banana", "banana", "maça", "jumento"]))