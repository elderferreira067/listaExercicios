class midia {
    toString() {
        return "midia";
    }
}

class Livro extends midia {
    toString() {
        return "Livro";
    }
}

class Filme extends midia {
    toString() {
        return "Filme";
    }
}

class Musica extends midia {
    toString() { 
        return "Musica";
    }
}

const Livros = [];
const Filmes = [];
const Musicas = [];

Livros.push(new Livro());
Filmes.push(new Filme());
Musicas.push(new Musica());

console.log(Livros[0].toString());
console.log(Filmes[0].toString());
console.log(Musicas[0].toString());