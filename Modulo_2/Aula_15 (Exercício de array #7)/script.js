// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ["BMW", "Ferrari", "Mercedes"]
console.log(`1. ${carros[1]}`)

// 2. Troque a Ferrari por Audi
carros[1] = "Audi"
console.log("Lista com Audi: ")
console.log(carros)

// 3. Adicione Volvo a lista
carros.push("Volvo")
console.log("Lista com Volvo: ")
console.log(carros)

// 4. Adicione Volvo a lista
console.log(`Total de itens no array: ${carros.length}`)
