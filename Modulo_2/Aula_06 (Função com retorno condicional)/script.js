function highAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let age = 64
let verify = highAge(age)

if(verify) {
    console.log("You are of legal age")
} else {
    console.log("You are a minor age")
}