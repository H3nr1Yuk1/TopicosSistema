console.log("=- Idades -=")

let idade, i, soma = 1, final, limite;

limite = Math.floor(Math.random() * 10 + 1);

for (i = 0; i <= limite; i++){
    idade = Math.floor(Math.random() * 10 + 1);
    soma = soma + idade;
}
final = soma;
console.log("Pedro tem ", final, " anos de idade")

if (final <= 13){
    console.log("Sendo uma criança bem serelepe.");
} else if (final <= 18){
    console.log("Sendo um adolecente rockeiro que adora Metallica.");
} else if (final <= 60){
    console.log("Sendo um adulto cheio de boletos para paga- ... Ish, esqueceu de pagar o programador.");
} else if (final > 60){
    console.log("Sendo um idoso rabugento que ninguém gosta. Eita, ele morreu. D:");
}