let personagem = {
    nome: "Gabriel",
    sobrenome: "Bonaretti",
    idade: 18,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    },
    nomeCompletoAnonima: () => {
        return `${personagem.nome} ${personagem.sobrenome}`
    }
}

console.log(`${personagem.nome} ${personagem.sobrenome}`)
console.log(personagem.nomeCompleto())
console.log(personagem.nomeCompletoAnonima())