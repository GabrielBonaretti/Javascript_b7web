/* 
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10.
Fórmula da porcentagem: (x / y) * 100
Uso da função.

let x = 40
let y = 10
let percentage = calPercentage(x, y)
console.log(`${}% de ${} é igual a ${}`)
*/

function calPercentage(percent, number){
    return (percent*number)/100
}

let percent = 25
let number = 100
let percentage = calPercentage(percent=percent, number=number)
console.log(`${percent}% of ${number} is equal ${percentage}`)