console.log("EX3")


function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let numero = 7;
let resultado = ehPrimo(numero) ? "É primo" : "Não é primo";
console.log(resultado);

console.log("")