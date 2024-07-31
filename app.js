// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

 function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
 }

mensagemInicial();

 function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentatia = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentatia}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
        
}

function geraNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);

    if (listaNumerosSorteados.length == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo (){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// function exibirAlerta(){
//     alert('Eu amo js!');
// }

// function exibirPrompt(){
//     let cidade = prompt('Informe o nome de uma cidade do Brasil');
//     alert(`Estive em ${cidade} e lembrei de você`);
// }

// function realizaSoma(){
//     let num1 = prompt('Informe um número inteiro');
//     let num2 = prompt('Informe mais um número inteiro');
//     let resultado = parseInt(num1) + parseInt(num2);

//     alert(`O resultado da soma entre ${num1} e ${num2} é igual a ${resultado}`);
// }