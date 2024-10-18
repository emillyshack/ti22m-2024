let nome = document.getElementById("nomecliente");
let quantidade = document.getElementById("quantidadesapato");
let preco = document.getElementById("preco");
let sapato = document.getElementById("sapato"); // ID do sapato corrigido
let totalSaida = document.getElementById("SaidaDef"); // Garantir que este elemento exista
let botaocontinue = document.getElementById("botao");
let total21 = document.getElementById("total"); // Garantir que este elemento exista
let vendasTabela = document.querySelector("table tbody"); // Corpo da tabela para adicionar novas linhas

// Variável para simular a geração de um novo ID para cada venda
let vendaIdCounter = 6; // Iniciar a contagem de vendas a partir de #006

botaocontinue.onclick = function () {
    saida();
    adicionarVenda();
};

function saida() {
    let nome1 = nome.value;
    let quant = Number(quantidade.value); // Corrigir nome da variável
    let total2 = quant + 43; // Valor total da venda (quantidade * preço unitário)

    let ferias = (quant * 0.001) + 0.134; // Cálculo fictício para as férias

    // Exibindo o total vendido
    total21.innerText = `Total Vendido - ${total2.toFixed(2)}`;
    
    // Exibindo o progresso das férias
    totalSaida.innerText = `A compra do Cliente ${nome1} já está sendo armazenada para a compra de 60% de desconto. Você já completou ${ferias.toFixed(3)} e faltam mais ${(1 - ferias).toFixed(3)} para suas férias remuneradas.`;
}

function adicionarVenda() {
    let precoUnitario = Number(preco.value); // Preço unitário do sapato
    let nome1 = nome.value;
    let quant = Number(quantidade.value); // Quantidade de sapatos vendidos
    let totalVenda = precoUnitario * quant; // Total da venda (preço unitário * quantidade)
    let dataVenda = new Date().toLocaleDateString(); // Pega a data atual
    let idVenda = `#${vendaIdCounter++}`; // Gera o ID da venda com incremento

    // Criação da nova linha para a tabela
    let novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${idVenda}</td>
        <td>${dataVenda}</td>
        <td>${sapato.value}</td> <!-- Exibindo o valor do sapato -->
        <td>${quant}</td>
        <td>R$ ${totalVenda.toFixed(2)}</td> <!-- Exibindo o total da venda -->
        <td>${nome1}</td>
    `;

    // Adiciona a nova linha na tabela
    vendasTabela.appendChild(novaLinha);

    // Limpa os campos após adicionar a venda
    nome.value = '';
    quantidade.value = '';
    preco.value = '';
    sapato.value = ''; // Limpa o campo de sapato também
}