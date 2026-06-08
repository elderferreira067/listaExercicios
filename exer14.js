class Aluno {
    #nota;
    constructor(nota) {
        this.#nota = nota;
    }
    getNota() {
        return this.#nota;
    }

    setNota(novaNota) {
        if (novaNota >= 0 && novaNota <= 10) {
            this.#nota = novaNota;
        } else {
            console.log("Nota inválida. A nota deve ser entre 0 e 10.");
        }
    }
    static Media(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}
