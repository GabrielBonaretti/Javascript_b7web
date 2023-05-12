function clicou() {
    const input = document.querySelector("input")
    const botao = document.querySelector("#botao")

    // if (input.hasAttribute("placeholder")) {
    //     console.log(`O place holder é: ${input.getAttribute("placeholder")}`)
    // } else{
    //     console.log("Não tem placeholder")    
    // }

    if (input.getAttribute("type") == "text") {
        input.setAttribute("type", "password")
        botao.innerHTML = "Mostrar senha"
    } else {
        input.setAttribute("type", "text")
        botao.innerHTML = "Ocultar senha"
    }
}

let botao = document.querySelector("#botao")
botao.addEventListener("click", () => clicou())


