import perguntas from './perguntas.js';

let perguntaAtual = 0;
let tempoPorPergunta = 30;
let tempoRestante = tempoPorPergunta;
let intervalId;
let pontuacao = 0; // Adicionando variável de pontuação

document.addEventListener('DOMContentLoaded', () => {
    const contagemRegressivaDiv = document.getElementById('contagemRegressiva');
    contagemRegressivaDiv.style.display = 'flex';

    const iniciarContagemBtn = document.getElementById('iniciarContagemBtn'); // Substitua 'seuBotaoDeIniciar' pelo ID real do seu botão
    iniciarContagemBtn.addEventListener('click', iniciarContagemRegressivaManual);
});

function iniciarContagemRegressivaManual() {
    const iniciarContagemBtn = document.getElementById('iniciarContagemBtn'); // Substitua 'seuBotaoDeIniciar' pelo ID real do seu botão
    iniciarContagemBtn.style.display = 'none';  // Oculta o botão após o início manual

    iniciarContagemRegressiva();
}

function exibirPergunta() {
    const { pergunta, alternativas } = perguntas[perguntaAtual];
    document.getElementById("Questoes").textContent = pergunta;

    const alternativasEmbaralhadas = alternativas.sort(() => Math.random() - 0.5);
    const alternativasLista = document.querySelector(".alternativas-lista");

    alternativasLista.innerHTML = alternativasEmbaralhadas.map((alternativa, index) => `
        <li class="alternativa">
            <input type="radio" name="opcaoResposta" class="btn-radio" aria-label="Option button" id="opcao${index + 1}" />
            <label for="opcao${index + 1}" class="alternativa-label">
                <div class="alternativa_letra">
                    <img width="30" height="30" src="https://img.icons8.com/color/48/${String.fromCharCode(97 + index)}-cute.png" alt="${String.fromCharCode(97 + index)}-cute"/>
                </div>
                <div class="alternativa_texto">${alternativa}</div>
            </label>
        </li>
    `).join('');

    tempoRestante = tempoPorPergunta;  // Configura o tempoRestante antes de iniciar o contador

    // Adicione os event listeners após a criação dos elementos
    const verificarRespostaBtn = document.getElementById('verificarResposta');
    const pausarRetomarBtn = document.getElementById('pausarQuiz');

    verificarRespostaBtn.addEventListener('click', verificarResposta);
    pausarRetomarBtn.addEventListener('click', pausarRetomarQuiz);

    iniciarContador();
}

function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');

    // Criar elemento de toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Adicionar toast ao container
    toastContainer.appendChild(toast);

    // Mostrar o toast
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);

    // Esconder o toast após alguns segundos
    setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);

    // Remover o toast do DOM após a animação de fade-out
    setTimeout(() => {
        toast.remove();
    }, 3300);
}

function verificarResposta() {
    const respostaUsuario = document.querySelector('input[name="opcaoResposta"]:checked');

    if (!respostaUsuario) {
        showToast('Por favor, selecione uma alternativa.');
        return;
    }

    const respostaCorreta = perguntas[perguntaAtual].resposta;
    const respostaCorretaUsuario = respostaUsuario.nextElementSibling.querySelector('.alternativa_texto').textContent === respostaCorreta;

    if (respostaCorretaUsuario) {
        // Calcula a pontuação com base no tempo decorrido
        const pontosMaximos = 100;
        const pontosPorSegundo = pontosMaximos / tempoPorPergunta;
        const pontuacaoPergunta = Math.max(1, Math.ceil(pontosMaximos - pontosPorSegundo * (tempoPorPergunta - tempoRestante)));
        pontuacao += pontuacaoPergunta;

        showToast('Resposta correta! Pontuação atual: ' + pontuacao);
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            tempoRestante = tempoPorPergunta;
            exibirPergunta();
            next_level();
            iniciarContador();
        } else {
            encerrarQuiz();
        }
    } else {
        showToast('Resposta incorreta. Você perdeu!');
        encerrarQuiz();
        return;
    }
}

function iniciarContador() {
    clearInterval(intervalId);
    const display = document.querySelector('#timer');
    exibirTempo(display);  // Exibe o tempo inicial imediatamente

    intervalId = setInterval(() => {
        atualizarCorTimer(tempoRestante, display);

        if (tempoRestante <= 0) {
            encerrarQuiz();
        } else {
            tempoRestante--;
            exibirTempo(display);
        }
    }, 1000);
}

function atualizarCorTimer(timer, display) {
    display.classList.remove('vermelho', 'amarelo', 'verde');

    if (timer <= 60 / 6) {
        display.classList.add('vermelho');
    } else if (timer <= 60 / 4) {
        display.classList.add('amarelo');
    } else {
        display.classList.add('verde');
    }
}

function pausarRetomarQuiz() {
    const overlay = document.getElementById('overlay');
    const retomarButton = document.getElementById('retomar');
    const recomeçarButton = document.getElementById('recomeçar');
    const sairButton = document.getElementById('sair');

    if (intervalId) {
        clearInterval(intervalId);
        overlay.style.display = 'flex';
        retomarButton.style.display = 'flex';
        recomeçarButton.style.display = 'flex';
        sairButton.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
        retomarButton.style.display = 'none';
        iniciarContador();
    }
}

function retomarQuiz() {
    const overlay = document.getElementById('overlay');
    const retomarButton = document.getElementById('retomar');

    overlay.style.display = 'none';
    retomarButton.style.display = 'none';
    iniciarContador();
}

// Adicione a função ao objeto global (window)
window.retomarQuiz = retomarQuiz;

function encerrarQuiz() {
    clearInterval(intervalId);
    const overlay = document.getElementById('overlay');
    const retomarButton = document.getElementById('retomar');
    overlay.style.display = 'flex';
    retomarButton.style.display = 'flex';
    console.log('Pontuação final: ' + pontuacao); // Exibe pontuação final no console
    setTimeout(() => {
        window.location.href = '/pages/Resultado/resultado.html';
    }, 2000);
}

function exibirTempo(display) {
    const minutes = parseInt(tempoRestante / 60, 10);
    const seconds = parseInt(tempoRestante % 60, 10);
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function iniciarContagemRegressiva() {
    const contagemRegressivaSpan = document.getElementById('contagemRegressivaSpan');
    let contagem = 3;

    const intervalIdContagem = setInterval(() => {
        contagemRegressivaSpan.textContent = contagem;
        

        if (contagem <= 0) {
            clearInterval(intervalIdContagem);
            contagemRegressivaSpan.parentNode.style.display = 'none';
            exibirPergunta();
        }

        if (contagem == 3) {
            get_ready();
        }

        contagem--;
    }, 1000);
}

function recomeçarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    tempoRestante = tempoPorPergunta;
    exibirPergunta();
    iniciarContador();
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

window.recomeçarQuiz = recomeçarQuiz;

function sairQuiz() {
    const confirmacao = confirm('Tem certeza que deseja sair do quiz? Sua pontuação não será salva.');

    if (confirmacao) {
        window.location.href = '/index.html';
    }
}

window.sairQuiz = sairQuiz;
