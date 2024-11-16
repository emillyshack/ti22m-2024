const produto = Object.create({
    nome: "chiclete",
    preco: "0,50",
    categoria: "nao sei"
})

for (categoria in produto){
    console.log(categoria + ": " +produto[categoria] )

}