const audio = new Audio('/assets/music/musica_quiz.mp3');
audio.loop = true;
let isMusicPlaying = false;

function playMusic() {
    if (!isMusicPlaying) {
        audio.play()
          .then(() => {
            isMusicPlaying = true;
          })
          .catch(error => {
            // Trate o erro, se necessário
            console.error('Erro ao reproduzir áudio:', error.message);
          });
    }
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    isMusicPlaying = false;
}

// Adicione um ouvinte de evento ao clique em qualquer lugar da página
document.addEventListener('click', playMusic);

// Restante do código...
