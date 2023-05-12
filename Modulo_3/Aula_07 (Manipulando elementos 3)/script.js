function clicouBotao1(){
    newButton.innerText = "Botão"
    botao.before(newButton)
}


function clicouBotao2(){
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    let newUl = document.createElement("ul")

    for (let i = 0; i<5; i++) {
       let newLi = document.createElement("li")
       newLi.innerText = `Teste ${i}`
       newUl.append(newLi)
    }

    ul.after(newUl)
}

let botao = document.querySelector("#botao")
botao.addEventListener("click", () => clicouBotao1())

var newButton = document.createElement("button")
newButton.addEventListener("click", () => clicouBotao2())

