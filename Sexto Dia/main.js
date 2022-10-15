
let sair = false;
let frutas = [];
let laticionios = [];
let congelados = [];
let doces = [];
let carne = [];
let diversos = [];
let contador = 0;

while (sair == false) {
    let comida = '';
    let tipoDeComida = '';
    let resposta = prompt("O que você deseja fazer com sua lista de compras? Insira 1 para adicionar uma comida, 2 para remover uma comida e 3 para finalizar.");
    
    if(resposta == 1) {//Adicionar item
        comida = prompt("Qual comida você deseja inserir?");
        tipoDeComida = prompt("Em qual categoria essa comida se encaixa? Digite 1 para frutas, 2 para laticínios, 3 para congelados, 4 para doces, 5 para carne e 6 para diversos.");

        if (tipoDeComida == 1) {
            frutas.push(comida);
            contador++;
        }
        else if(tipoDeComida == 2) {
            laticionios.push(comida);
            contador++;
        }
        else if(tipoDeComida == 3) {
            congelados.push(comida);
            contador++;
        }
        else if(tipoDeComida == 4) {
            doces.push(comida);
            contador++;
        }
        else if(tipoDeComida == 5) {
            carne.push(comida);
            contador++;
        }
        else if(tipoDeComida == 6) {
            diversos.push(comida);
            contador++;
        }
        else {
            alert("Erro! Tipo de comida inválido, recarregue a página e tente novamente");
        }
    }
    else if(resposta == 2) { //Remover item
        let remocaoItem = prompt(`Lista de compras:\n\nFrutas: ${frutas}\nLaticinios: ${laticionios}\nDoces: ${doces}\nCongelados: ${congelados}\nCarne: ${carne}\nDiversos: ${diversos}\n\nInforme qual desses elementos deseja remover.`);

        if (frutas.includes(remocaoItem)) {
            let indice = frutas.indexOf(remocaoItem);
            let itenRemovido = frutas.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else if(laticionios.includes(remocaoItem)) {
            let indice = laticionios.indexOf(remocaoItem);
            let itenRemovido =laticionios.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else if(doces.includes(remocaoItem)) {
            let indice = doces.indexOf(remocaoItem);
            let itenRemovido =doces.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else if(congelados.includes(remocaoItem)) {
            let indice = congelados.indexOf(remocaoItem);
            let itenRemovido = congelados.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else if(carne.includes(remocaoItem)) {
            let indice = carne.indexOf(remocaoItem);
            let itenRemovido = carne.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else if(diversos.includes(remocaoItem)) {
            let indice = diversos.indexOf(remocaoItem);
            let itenRemovido = diversos.splice(indice, 1);
            alert(`O item ${itenRemovido} foi removido.`);
        }
        else {
            alert("Não foi possível encontrar o item dentro da lista.");
        }
    }
    else if(resposta == 3) { //Finalizar lista
        alert("Ok. Quando precisar de uma lista de compras estarei aqui.");
        sair = true;
    }
    else {//Informar um número inválido
        alert("Erro! resposta inválida recarregue a página e tente novamente");
        sair = true;
    }

}

if (contador > 0) {
    document.querySelector('.lista-titulo').textContent = "Lista de compras";
    document.querySelector('.frutas').textContent = `Frutas: ${frutas}`;
    document.querySelector('.laticinios').textContent = `Laticinios: ${laticionios}`;
    document.querySelector('.doces').textContent = `Doces: ${doces}`;
    document.querySelector('.congelados').textContent = `Congelados: ${congelados}`;
    document.querySelector('.carne').textContent = `Carne: ${carne}`; 
    document.querySelector('.diversos').textContent = `Diversos: ${diversos}`;  
}
