/* 
Calculo o preço do imóvel
- m2 = 3000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.2x
- Se tiver 3 quarto, o m2 é 1.5x
*/

function calImmobile(metreage, qntRoom){
    m2 = 3000
    switch(qntRoom){
        case 1:
            return metreage * (m2 * 1)
        case 2:
            return metreage * (m2 * 1.2)
        case 3:
            return metreage * (m2 * 1.5)
        default:
            return metreage * (m2 * 2)
    }
}

let metreage = 123
let qntRoom = 3
let price = calImmobile(metreage=metreage, qntRoom=qntRoom)
console.log(`The house costs: ${price}`)