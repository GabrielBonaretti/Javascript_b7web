let cores = ["preto", "branco", "azul", "vermelho"]

cores.push("verde")

console.log("Primeira forma de usar o for")

for (let x = 0; x < cores.length; x++) {
    console.log(cores[x])
}

console.log("Segunda forma de usar o for")

for (let i in cores) {
    console.log(cores[i])
}

console.log("Terceira forma de usar o for")

for (let cor of cores) {
    console.log(cor)
}