// Retorna um array com todos as tags que ele achou na tela
let elementosH1 = document.getElementsByTagName("h1")
console.log(elementosH1)

let elementosDiv = document.getElementsByTagName("div")
console.log(elementosDiv)

// Retorna o elemento na tela com o ID especificado na funcao
let elementoID = document.getElementById("teste")
console.log(elementoID)

// Retorna um array com todos os elementos da tela com a classse especificados funcao 
let elementosClass = document.getElementsByClassName("botao")
console.log(elementosClass)

// Retorna o valor do elemento a partir da busca especificada na função (busca que se assemelha ao css)
// Retorna o primeiro elemento encontrado na página
let id = document.querySelector("#teste")
console.log(id)

let btClass = document.querySelector(".botao")
console.log(btClass)

let h1 = document.querySelector("h1")
console.log(h1)

// Retorna o valor do elemento a partir da busca especificada na função (busca que se assemelha ao css)
// Retorna o todos elemento encontrado na página, sempre retorna um array
let liAll = document.querySelectorAll("li")
console.log(liAll)

let liTeste2 = document.querySelectorAll("#teste2 ul li")
console.log(liTeste2)
