function clicou() {
    contador += 1
    const teste = document.querySelector("#teste")
    // console.log(teste)
    // console.log(teste.children)
    // console.log(teste.children[0].children)
    // console.log(teste.children[1].children)

    const ul = teste.querySelector("ul")
    if (contador > 1) {
        // Adicionando elementos.
        ul.innerHTML += `<li>Item alterado ${contador}</li>`
    } else {
        // Reescrevendo elementos.
        ul.innerHTML = `<li>Item alterado ${contador}</li>`
    }

    const teste2 = document.querySelector("#teste2")
    const ul2 = teste2.querySelector("ul")
    ul2.children[0].innerHTML = "<strong>Item alterado</strong>"
    ul2.children[1].innerText = "Mudando texto"
    console.log(ul.outerHTML)
}

var contador = 0
let botao = document.querySelector("#botao")
botao.addEventListener("click", () => clicou())