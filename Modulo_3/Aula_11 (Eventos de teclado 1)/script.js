let input = document.querySelector("input")
console.log(input)

input.addEventListener("keydown", () => {
    console.log("Apertou")
})

input.addEventListener("keypress", () => {
    console.log("Segurou")
})

input.addEventListener("keyup", () => {
    console.log("Soltou")
})


