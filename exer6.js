class Pilha {
    #items; 

    empilhar(item) {
        this.#items.push(item);
    }

    desempilhar() { 
        return this.#items.pop();
    }

    topo() {
        return this.#items[this.#items.length - 1];
    }

    estaVazia() {
        return this.#items.length === 0;
    }

    get tamanho() {
        return this.#items.length;
    }
}