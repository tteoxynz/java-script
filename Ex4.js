console.log("EX4")

function fibonacciAteN(n) {
    let sequencia = [0, 1];
    for (let i = 2; i <= n; i++) {
        let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        if (proximoNumero > n) break;
        sequencia.push(proximoNumero);
    }
    return sequencia;
}

let limite = 10;
let sequenciaFibonacci = fibonacciAteN(limite);
console.log(sequenciaFibonacci);

console.log("")