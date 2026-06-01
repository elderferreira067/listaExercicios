class Pessoa {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        console.log(` Meu nome é ${this.nome} , minha idade é ${this.idade} , meu email é ${this.email}`)
    }

    fazerAniversario(){
       return this.idade + 1
    }
}