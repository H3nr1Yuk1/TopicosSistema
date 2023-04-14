console.log("=- Menor e Maior -=")

let num1 = Math.floor(Math.random() * 10 + 1).toFixed(1);
let num2 = Math.floor(Math.random() * 10 + 1).toFixed(1);

console.log("Número 1: ", num1);
console.log("Número 2: ", num2);

if (num1 > num2){
    console.log("O número ", num1," é maior que ", num2);
} else if (num2 > num1) {
    console.log("O número ", num2," é maior que ", num1);
} else if (num1 == num2) {
    console.log("Os números são iguais");
}