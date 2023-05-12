function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    
    // ul.children[0].innerHTML += " (alterado)"
    // out: <li>"item1 (alterado)"</li>

    ul.children[0].append(" (alterado)")
    // out: <li>"item1" " (alterado")</li>

    ul.append("teste")

    const teste2 = document.querySelector("#teste2")
    const ul2 = teste2.querySelector("ul")

    let newli = document.createElement("li")
    newli.innerText = "item acidionado"
    ul2.appendChild(newli)
    ul2.prepend(newli)

    /*
    Jeito errado
    ul2.innerHTML += "<li>Item adicionado</li>"
    */
}

let botao = document.querySelector("#botao")
botao.addEventListener("click", () => clicou())


// O javascritpt nao precisa de ponto e virgulas