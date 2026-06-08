class ContaBancaria {
    constructor(numeroConta, titular, saldo) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        return  this.saldo += valor
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
        } else {
            return this.saldo -= valor
        }
    }
    exibirSaldo() {
        return this.saldo
    }
}
