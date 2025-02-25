console.log("EX5")

function contarCaracteres(str) {
    let contagem = {};
    for (let char of str) {
        contagem[char] = (contagem[char] || 0) + 1;
    }
    return contador;
}

let texto = "banana";
let contagem = contarCaracteres(texto);
console.log(contagem); 