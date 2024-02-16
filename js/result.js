/*contarPerguntasAcertadas() 
const scoreText = document.querySelector('.score-text');
scoreText.textContent = `Sua pontuação: ${contarPerguntasAcertadas()} de 15 ${perguntas.length}`;

const circularProgress = document.querySelector('.circular-progress');
const progressValor = document.querySelector('.progress-valor');
let progressStarValor = -1;
let progressEndValor = (contarPerguntasAcertadas / perguntas.length) * 100;
let speed = 20;

let progress = setInterval(() => {
    progressStarValor++;

    progressValor.textContent = '${progressStarValor}%';
    circularProgress.style.background = `conic-gradient(#1fa4d7 ${progressStarValor * 3.6}deg, rgba(255, 255, 255, .1) 0deg);`;

    if(progressStarValor == progressEndValor) {
        clearInterval(progress);
    }
}, speed);
*/