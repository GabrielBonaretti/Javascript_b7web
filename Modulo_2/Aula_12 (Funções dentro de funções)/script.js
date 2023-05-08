function square(x) {
    return x * x 
}

function addSquares(a, b){
    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB
}


// Caso voce use a ssquare apenas dentro da funcao addSquare
// crie a mesma dentro da addSquare, por meio da arrowfunction 
function addSquares(a, b){
    const square = x => x * x

    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB
}


console.log(addSquares(2,3))