let personagem = {
    nome: "Bonaretti",
    idade: 18,
    pais: "Brasil",
    cor_olhos: ["verde", "azul"],
    status: {
        forca: 18,
        magia: 5,
        stamina: 15
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos`)
console.log(personagem.status.magia)
console.log(personagem.cor_olhos[1])