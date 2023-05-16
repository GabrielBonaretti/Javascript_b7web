// Elementos
const input = document.querySelector("input")
const lista = document.querySelector("#listaSimples")

// Eventos
input.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        let newLi = document.createElement("li")
        newLi.innerText = input.value
        lista.appendChild(newLi)
        input.value = ""
    }
})