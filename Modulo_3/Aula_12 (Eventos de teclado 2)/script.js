function soltou(e) {
    // console.log(e.code)
    // console.log(e.key)
    console.log(`Tecla apertada: ${e.code}`)
    console.log(`Shift apertado? ${e.shiftKey}`)
    console.log(`Ctrl apertado? ${e.ctrlKey}`)
    console.log(`Alt apertado? ${e.altKey}`)
    console.log(" ")
}

const input = document.querySelector("input")
input.addEventListener("keyup", soltou)
