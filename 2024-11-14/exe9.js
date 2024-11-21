const estoque = [
    {id: 1,nome: "Caneta",quantidade: 10},
    {id: 2,nome: "Cadeerno",quantidade: 15 }
]


function atualizarQuantidade2(id, quantidade) {
    let novo = estoque.map(function (elemento){
        // criando uma copia do elemento
        let novoObjeto = {
            id: elemento.id,
            nome:elemento.nome,
            quantidade: elemento.quantidade    
        }

        if (elemento.id == id) {
            novoObjeto.quantidade = quantidade
        }

        return novoObjeto
    })

    console.log(novo)


}

function atualizarQuantidade(id, quantidade) {
    let novo = estoque.map(function (elemento){
        
        if (elemento.id == id) {
            elemento.quantidade = quantidade
        }

        return elemento
    })

    console.log(novo)


}

atualizarQuantidade2(1, 30)
