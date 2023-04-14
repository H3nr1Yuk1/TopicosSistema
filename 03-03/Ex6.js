console.log("=- Números em ordem -=")

const numeros = [];
let num, i;

for (i = 0; i <= 1000; i++){
    num = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1);
    numeros.push(num);
}

numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros.join(', '));