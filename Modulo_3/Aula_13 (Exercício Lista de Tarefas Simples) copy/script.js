const input = document.querySelector("input")
const lista = document.querySelector("#listaSimples")

input.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        let palavra = (input.value)
        let newLi =  document.createElement("li")
        newLi.innerText = palavra 
        lista.appendChild(newLi)
        input.value = ""
    }
})


