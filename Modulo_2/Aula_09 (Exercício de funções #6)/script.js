/* 
Crie uma função que valide usuário e senha.
Usuário correto: bona
Senha: +lindo
*/

function validate(user, password){
    return (user == "bona" && password == "+lindo") ? true : false     
}

let userTest = "bona"
let passwordTest = "+lindo"
let validation = validate(user=userTest, password=passwordTest)

if (validation) {
    console.log("Acesso concedido.")
} else {
    console.log("Acesso negado.")
}