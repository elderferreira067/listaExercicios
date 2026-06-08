class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    emitirSom() {
        return `${this.nome} diz: ${this.som}`;
    }
}

class Cachorro extends Animal {
    constructor(nome, som, raca) {
        super(nome, som);
        this.raca = raca;
    }

    emitirSom() {
        return `O cachorro ${this.nome} diz: ${this.som}`;
    }
}

const cachorro = new Cachorro("DuckPreto", "Ua Ua", "Labrador");

console.log(cachorro.emitirSom());