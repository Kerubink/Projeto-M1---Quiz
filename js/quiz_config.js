const audioMusicaQuiz = new Audio('/assets/music/musica_quiz.mp3');
audioMusicaQuiz.loop = true;
let isMusicPlaying = false;

function playMusic() {
    if (!isMusicPlaying) {
        audioMusicaQuiz.play()
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
    audioMusicaQuiz.pause();
    audioMusicaQuiz.currentTime = 0;
    isMusicPlaying = false;
}

function get_ready() {
  const audio = new Audio('/assets/music/get_ready_1-104602.mp3');

  // Tenta reproduzir o áudio
  audio.play()
      .then(() => {
          // Define loop para false para evitar a repetição
          audio.loop = false;
      })
      .catch(error => {
          // Trata o erro, se necessário
          console.error('Erro ao reproduzir efeito sonoro 1:', error.message);
      });
}

function next_level() {
    const next_level = new Audio('/assets/music/new-level-142995.mp3');
    next_level.play()
      .catch(error => {
        // Trate o erro, se necessário
        console.error('Erro ao reproduzir efeito sonoro 2:', error.message);
      });
}

// Adicione um ouvinte de evento ao clique em qualquer lugar da página
document.addEventListener('click', playMusic);

// Inicie a reprodução automática com um atraso de 1000 milissegundos (1 segundo)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playMusic();
    }, 1000);
});
