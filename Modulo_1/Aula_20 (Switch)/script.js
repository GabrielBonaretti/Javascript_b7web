let profession = "other"; // cop, fireman, doctor 
let colorShirt;

switch(profession){
    case "cop":
        colorShirt = "blue"
        break;
    case "fireman":
        colorShirt = "red"
        break;
    case "doctor":
        colorShirt = "white"
        break;
    default:
        colorShirt = "black"
}

console.log(`Your shirt is ${colorShirt}`)