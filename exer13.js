class endereco {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }
}

class contato {
    constructor(email, telefone) {
        this.email = email;
        this.telefone = telefone;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        return `Nome: ${this.nome}\nEndereço: ${this.endereco}\nContato: ${this.contato}`;
    }
}

