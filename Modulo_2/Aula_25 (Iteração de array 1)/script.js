let fruits = ["Maça", "Uva", "Laranja", "Banana"];

// Filtra a lista com alguma condicional, e cria uma nova a partir dos valores que passarma no teste lógico
let bigFruits = fruits.filter((item) => item.length > 4);

// Filtra a lista com alguma condicional, e cria uma nova a partir dos valores que passarma no teste lógico
let smallFruits = fruits.filter((item) => item.length < 4);

// Faz um teste com todos os itens da lista, e retorna um valor boolean se todos tiverem satisfatorios com a condicional (and)
let ok = fruits.every((item) => item.length > 3);

if (ok) {
    console.log("Todos os itens tem mais que 3 caracteres")
} else {
    console.log("Nem todos os itens tem mais que 3 caracteres")
}

// Faz um teste com todos os itens da lista, e retorna um valor boolean se todos tiverem satisfatorios com a condicional (and)
let ok2 = smallFruits.some((item) => item.length > 3);

if (ok2) {
    console.log("Algum dos itens tem mais que 3 caracteres")
} else {
    console.log("Nenhum dos itens tem mais que 3 caracteres")
}

// Verifica se há um valor dentro do seu array
if(fruits.includes("Uva")) {
    console.log("Tem uva")
} else {
    console.log("Nao tem uva")
}

console.log(bigFruits);
console.log(smallFruits);
console.log(fruits);