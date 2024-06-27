const prompt = require("prompt-sync")({ sigint: true});

const base = parseInt(prompt("Digte o número Base desejado:"));
const expoente = parseInt(prompt("Digite o número de expoente: "));

let resultado = 1;
for (let i = 0; i < expoente; i++) {
    let temp = 0;
    for (let j = 0; j < base; j++) {
        temp += resultado;
    }
    resultado = temp
}

console.log(`${base}^${expoente} = ${resultado}`);