const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0;

setaAvancar.onclick = function() {
    if ( imagemAtual == imagens.length - 1) {
        return;
    }
    imagemAtual ++;
    esconderImagemAberta()
    mostrarImagem()
    mostarOuEsconderSetas()
}

setaVoltar.onclick = function() {
    if ( imagemAtual == 0) {
        return;
    }
    imagemAtual --;
    esconderImagemAberta()
    mostrarImagem()
    mostarOuEsconderSetas()
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function mostarOuEsconderSetas() {
    const naoEhAPrimeiraImagem = imagemAtual > 0;
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade')
    } else {
        setaVoltar.classList.add('opacidade')
    }

    const chegouNaUltimaImagem = imagemAtual == (imagens.length) - 1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }
}