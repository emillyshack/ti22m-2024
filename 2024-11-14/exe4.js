const pessoa = Object.create({
    nome: "Jõao",
    idade: "25",
    cumprimentar: function(){
        console.log(`Olá, meu nome é ${this.nome}!`)
    }
})
pessoa.cumprimentar();
console.log(pessoa)