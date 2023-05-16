let input = document.querySelector("input")

input.addEventListener("keydown", () => {
    console.log("Apertou")
})

input.addEventListener("keypress", () => {
    console.log("Segurou")
})

function soltou() {
    console.log("Soltou")
}

input.addEventListener("keyup", soltou())

document.addEventListener("keyup", soltou)