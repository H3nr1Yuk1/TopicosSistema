console.log("=- Sequência de Fibonacci  -=")

let i, x = 0, y = 1, z, fib, num, numF, limite, soma = 0;
const fibona = [];

limite = Math.floor(Math.random() * 10 + 1);

for (i = 0; i <= limite; i++){
    num = Math.floor(Math.random() * 10 + 1);
    soma = soma + num;
}
numF = soma;

console.log("Número é ", numF);
console.log("Sua sequência de Fibonacci é: ");

fib = x;

do {
    if(fib == 0){
        fibona.push(fib);
        fib = y;
        fibona.push(fib);
    } else if (fib <= numF) {
        z = x + y;
        fib = z;
        if(fib <= numF){
            fibona.push(z);
            x = y;
            y = x + z;
            fib = y
            if(fib <= numF){
                fibona.push(y);
                x = z;
            }
        }
    }
} while (fib <= numF);

console.log(fibona.join(', '));