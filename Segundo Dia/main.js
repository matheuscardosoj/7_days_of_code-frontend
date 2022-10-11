const enviar = document.querySelector('#enviar');

enviar.onclick = function() {

    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const linguagem = document.querySelector('#linguagem').value;
    
    if(nome != '' && idade != '' && linguagem != '') {

        alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

        let resposta = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO.');

        if(resposta == 1) {
            alert('Muito bom! Continue estudando e você terá muito sucesso.');
        }

        else if(resposta == 2) {
            alert('Ahh que pena... Já tentou aprender outras linguagens?');
        }

    }
}