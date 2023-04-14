console.log("=- Cálculo de conversão monetária -=")

let reais = (Math.random() * 100 + 10).toFixed(2);
let dolar, pesoArg, euro;

console.log("Valor inicial: " + reais + " R$")

dolar = (reais / 5.20).toFixed(2);
console.log(`Em dólar: ${dolar} $`)

euro = (reais / 6.14).toFixed(2);
console.log("Em euro: ", euro, "€")

pesoArg = (reais / 0.05).toFixed(2);
console.log(`Em peso argentino: ${pesoArg} $`)