let fruits = ["Maça", "Uva", "Laranja", "Banana"]

// Adiciona um item na ultima posição do array
fruits.push("Kiwi")
console.log(fruits)


// Remove um item na ultima posição do array
fruits.pop()
console.log(fruits)


// Remove um item na primeira posição do array
fruits.shift()
console.log(fruits)


// ".length" mostra o tamanho do array
console.log(fruits.length)
console.log(fruits)


// Pega o array e salva um resultado em string, juntando as palavras com o que está escrito entre eles
let teste = fruits.join(", ")
console.log(teste)
console.log(fruits)


// Altera o valor do indice selecionado
fruits[0] = "Pera"
fruits[fruits.length - 1] = "Bananinha"
console.log(fruits)

