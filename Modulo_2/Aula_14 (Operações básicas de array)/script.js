let ingredientes =  ["agua", "farinha", "ovo", "corante", "sal"];

ingredientes.push("cebola");
console.log(ingredientes)

ingredientes.push("teste");
console.log(ingredientes)

// Remove o último
ingredientes.pop();
console.log(ingredientes)

// Remove o primerio
ingredientes.shift();
console.log(ingredientes)

console.log(`Total de ingredientes: ${ingredientes.length}`)
