class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        Produto.totalProdutos++;
    }

    calcularValorTotal() {
        return this.preco * this.quantidade;
    }

}