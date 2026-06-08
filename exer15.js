class contaBancaria {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }
    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente para saque.");
        } else {
            this.#saldo -= valor;
        }
    }
    
    static ConverterParaDolar(valor) {
        const taxaCambio = 5.0;
        return valor / taxaCambio;
    }

}


