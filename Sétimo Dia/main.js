function soma(num1, num2) {
    let soma = num1 + num2;
    return soma;
}

function subtracao(num1, num2) {
    let subtracao = num1 - num2;
    return subtracao;
}

function multiplicacao(num1, num2) {
    let soma = num1 * num2;
    return soma;
}

function divisao(num1, num2) {
    let soma = num1 / num2;
    return soma;
}

let sair = false;
let resultado;

alert("Calculadora em JS");

while (sair == false) {

    let numeroUm;
    let numeroDois;
    let operacao;

    operacao = parseInt(prompt("Escolha a operacao desejada. Informe 1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão e 5 para sair. "));
    
    if(operacao > 0 && operacao < 5) {
        numeroUm = parseInt(prompt("Informe o primeiro numero."));
        numeroDois = parseInt(prompt("Informe o segundo numero"));
    }

    switch (operacao) {
        case 1:
            resultado = soma(numeroUm, numeroDois); 
            break;

        case 2:
            resultado = subtracao(numeroUm, numeroDois);
            break;

        case 3:
            resultado = multiplicacao(numeroUm, numeroDois);
            break;

        case 4:
            resultado = divisao(numeroUm, numeroDois);
            break;

        case 5:
            alert("Até a próxima.");
            sair = true;
            break;
    
        default:
            alert("Erro! Opção inexistente recarregue a pagina e tente novamente.");
            sair = true;
            break;
    }

    if (sair == false) {
        alert(`Resultado: ${resultado}`);
        sair = true;
    }

}


