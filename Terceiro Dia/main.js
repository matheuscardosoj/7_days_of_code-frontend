let areaProgramacao = prompt("Olá programador, em qual área da programação você teria interesse de seguir? Digite 1 para Front-End ou 2 para Back-End.");
let linguagem = "";
let nomelinguagem = "";
let nomeAreaProgam = "";

for (let i = 0; i < 1; i++) {
    
    if(areaProgramacao == 1) {

        linguagem = prompt("Que legal! Você teria preferência em aprender React ou Vue? Responda 1 para React e 2 para Vue.")
        nomeAreaProgam = "Front-End"
    
        if (linguagem == 1) {
            nomelinguagem = "React";
        }
        else if (linguagem == 2) {
            nomelinguagem = "Vue"
        }
        else {
            alert("Opção inválida, recarregue a página e tente novamente");
            break;
        }
    
    }
    
    else if(areaProgramacao == 2) {
        linguagem = prompt("Que legal! Você teria preferência em aprender C# ou Java? Responda 1 para C# e 2 para Java.")
        nomeAreaProgam = "Back-End"
    
        if (linguagem == 1) {
            nomelinguagem = "React";
        }
        else if (linguagem == 2) {
            nomelinguagem = "Vue"
        }
        else {
            alert("Opção inválida, recarregue a página e tente novamente")
            break;
        }
    }
    else {
        alert("Opção inválida, recarregue a página e tente novamente");
        break;
    }
    
    let futuroEspecializacao = prompt("Você gostária de se especializar no " + nomeAreaProgam + " ou seguir se desenvolvendo e se tornar Fullstack? Responda 1 para se especializar na área e 2 para Fullstack.");

    if(futuroEspecializacao == 1 || futuroEspecializacao == 2) {
        alert("Ótima escolha! Tenho certeza que você se dará muito bem.")
    }
    else{
        alert("Opção inválida, recarregue a página e tente novamente");
        break;
    }
    
    let sair = false;
    
    while(sair == false) {
        const novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender:");
        if(novaTecnologia == null) {
            sair = true;
        }
        else {
            alert(`Uau! ${novaTecnologia} parece ser uma excelente tecnologia.`);
        }
    }
    
}


