let fruits = ["Maça", "Uva", "Laranja", "Banana"]

// Ordenar o array ordem crescente
fruits.sort()
console.log(fruits)


// Ordenar o array ordem decrescente
fruits.sort()
fruits.reverse()
console.log(fruits)

/////////////////////////////////////////////////////////////////
let cars = [
    { brand: "Fiat", year: 2022 },
    { brand: "Bmw", year: 2018 },
    { brand: "Ferrari", year: 2020 }
]

// Ordenar de forma crescente array
cars.sort((a, b) => a.year - b.year)
console.log(cars)