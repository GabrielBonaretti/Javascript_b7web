function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    
    var newButton = document.createElement("button")
    newButton.innerHTML = "Botão"
    botao.after(newButton)
}

function clicouBotaozinho(){
    let newUl = document.createElement("ul")

    for (let i = 0; i<5; i++) {
       let newLi = document.createElement("li")
       newLi.innerText = `Teste ${i}`
       newUl.append(newLi)
    }

    ul.after(newUl)
}

let botao = document.querySelector("#botao")
botao.addEventListener("click", () => clicou())
newButton.addEventListener("click", () => clicouBotaozinho())