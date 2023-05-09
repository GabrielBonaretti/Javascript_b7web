let personagem = {
    nome: "Bonaretti",
    idade: 18,
    pais: "Brasil",
    carros: [
        { modelo: "Fiat", cor: "Preto" },
        { modelo: "Ferrari", cor: "Vermelho" }
    ]
}

console.log(personagem)

personagem.nome = "Pedro"
console.log(personagem)

personagem.idade += 1
console.log(personagem)

personagem.carros.push({ modelo: "Porsch", cor: "Azul" })
console.log(personagem)

personagem.carros[0].cor = "Rosa"
console.log(personagem)
