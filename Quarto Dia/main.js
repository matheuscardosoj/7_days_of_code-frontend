const max = 10;
const min = 1;
let valorSorteio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(valorSorteio);
const chances = 3;

alert("JOGO DA ADIVINHAÇÃO");

let resposta = '';

for (let i = 1; i <= chances; i++) {
    if (i == 1) {
        resposta = prompt("Insrira um chute de " + min + " a " + max + " para o valor a ser adivinhado. (chances: " + (chances - i) + ")");
    }
    else {
        resposta = prompt("Errou! Insrira outro chute. (chances: " + (chances - i) + ")");
    }

    if(valorSorteio == resposta) {
        alert("Parábens você acertou!");
        break;
    }

    if(i == 3 && valorSorteio != resposta) {
        alert("Suas chances acabaram! O número certo era " + valorSorteio + ".")
    }
}