const carrinho = Object.create({
    itens:[
        {nome: "Camisa", preco: 50 },
        {nome: "Calça", preco: 100 }],
    calcularTotal: function(){
        let total = 0
        for(let item of this.itens)
            total += item.preco;
        console.log(total);
    }
})
carrinho.calcularTotal();
console.log(carrinho)
