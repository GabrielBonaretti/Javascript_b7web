let isMember = false;
let shipping = ((isMember) ? 2 : 10);
let age = 14;
let isAdult = ((age >= 18) ? true : false);

console.log((isMember) ? 'Você é um membro' : 'Você não é um membro')
console.log(`Frete: ${shipping}`)
console.log(isAdult)