let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', 
    {rate:1.2});

}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Secret');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}




function verificarChute(){

    let chute = document.querySelector('input').value;

    


 
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!'),
            exibirTextoNaTela('p', 'O número secreto é menor');
            tentativa++;
            limparCampo();
        } else{
            if( chute < numeroSecreto){
                exibirTextoNaTela('h1', 'Errou!');
                exibirTextoNaTela('p', 'O número secreto é maior');
                tentativa++;
                limparCampo();
                
            } else{
                exibirTextoNaTela('h1', 'Formato Inválido!');
                exibirTextoNaTela('p', 'são aceitos apenas números');
                tentativa++;
                limparCampo();
            }
           
        }

        
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()  * numeroLimite + 1);
    let quantidadeLista = listaDeNumeroSorteado.length;

    if(quantidadeLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;

    mensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

mensagemInicial();