const scoreText = document.querySelector('.score-text');
const totalPerguntas = 15; // Total de perguntas no quiz

contarPerguntasAcertadas(); // Chamando a função para contar as perguntas acertadas

scoreText.textContent = `Sua pontuação: ${perguntasAcertadas} de ${totalPerguntas}`;

const circularProgress = document.querySelector('.circular-progress');
const progressValor = document.querySelector('.progress-valor');
let progressStarValor = -1;
let progressEndValor = (perguntasAcertadas / totalPerguntas) * 100;
let speed = 20;

let progress = setInterval(() => {
    progressStarValor++;

    progressValor.textContent = `${progressStarValor}%`;
    circularProgress.style.background = `conic-gradient(#1fa4d7 ${progressStarValor * 3.6}deg, rgba(255, 255, 255, .1) 0deg);`;

    if(progressStarValor == progressEndValor) {
        clearInterval(progress);
    }
}, speed);