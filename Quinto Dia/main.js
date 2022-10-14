
let sair = false;
let frutas = [];
let laticionios = [];
let congelados = [];
let doces = [];
let contador = 0;

while (sair == false) {
    let comida = '';
    let tipoDeComida = '';
    let resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? Insira 1 para sim e 2 para não.");
    
    if(resposta == 1) {
        comida = prompt("Qual comida você deseja inserir?");
        tipoDeComida = prompt("Em qual categoria essa comida se encaixa? Digite 1 para frutas, 2 para laticínios, 3 para congelados e 4 para doces.");

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
        else {
            alert("Erro! Tipo de comida inválido, recarregue a página e tente novamente");
        }
    }
    else if(resposta == 2) {
        alert("Ok. Quando precisar de uma lista de compras estarei aqui.");
        sair = true;
    }
    else {
        alert("Erro! resposta inválida recarregue a página e tente novamente");
        sair = true;
    }

}

if (contador > 0) {
    document.querySelector('h1').textContent = "Lista de compras";

    if(frutas.length > 0) {
        document.write("Frutas: ");
        for (let i = 0; i < frutas.length; i++) {
            if (i < frutas.length - 1) {
                document.write(frutas[i] + ", ");
            }
            else {
                document.write(frutas[i]);
            }
        }
    }

    if(laticionios.length > 0) {
        document.write("<br>Laticínios: ");
        for (let i = 0; i < laticionios.length; i++) {
            if (i < laticionios.length - 1) {
                document.write(laticionios[i] + ", ");
            }
            else {
                document.write(laticionios[i]);
            }
        }
    }

    if(congelados.length > 0) {
        document.write("<br>Congelados: ");
        for (let i = 0; i < congelados.length; i++) {
            if (i < congelados.length - 1) {
                document.write(congelados[i] + ", ");
            }
            else {
                document.write(congelados[i]);
            }
        }
    }

    if(doces.length > 0) {
        document.write("<br>Doces: ");
        for (let i = 0; i < doces.length; i++) {
            if (i < doces.length - 1) {
                document.write(doces[i] + ", ");
            }
            else {
                document.write(doces[i]);
            }
        }
    }
}
