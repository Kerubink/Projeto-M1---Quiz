const audioMusicaQuiz = new Audio('/assets/music/musica_quiz.mp3');
audioMusicaQuiz.loop = true;
let isMusicPlaying = false;

const get_ready_audio = new Audio('/assets/music/get_ready_1-104602.mp3');
get_ready_audio.loop = false;

const next_level_audio = new Audio('/assets/music/new-level-142995.mp3');

let isEfeitosPlaying = false;

function playMusic() {
    console.log('Tocando música...');
    if (!isMusicPlaying) {
        audioMusicaQuiz.play()
            .then(() => {
                isMusicPlaying = true;
                console.log('Música reproduzindo.');
            })
            .catch(error => {
                console.error('Erro ao reproduzir música:', error.message);
            });
    }
}

function stopEfeitos() {
    console.log('Parando efeitos...');
    get_ready_audio.pause();
    get_ready_audio.currentTime = 0;

    next_level_audio.pause();
    next_level_audio.currentTime = 0;

    isEfeitosPlaying = false;
    console.log('Efeitos parados.');
}

function get_ready() {
    console.log('Tocando efeito get_ready...');
    stopEfeitos();

    get_ready_audio.play()
        .then(() => {
            isEfeitosPlaying = true;
            console.log('Efeito get_ready reproduzindo.');
        })
        .catch(error => {
            console.error('Erro ao reproduzir efeito sonoro 1:', error.message);
        });
}

function next_level() {
    console.log('Tocando efeito next_level...');
    stopEfeitos();

    next_level_audio.play()
        .then(() => {
            isEfeitosPlaying = true;
            console.log('Efeito next_level reproduzindo.');
        })
        .catch(error => {
            console.error('Erro ao reproduzir efeito sonoro 2:', error.message);
        });
}

function toggleMute(tipo) {
    console.log(`Toggling mute para ${tipo}...`);
    if (tipo === 'musica') {
        audioMusicaQuiz.muted = !audioMusicaQuiz.muted;
        if (audioMusicaQuiz.muted) {
            // Se a música estiver muda, interrompe os efeitos
            stopEfeitos();
        }
    } else if (tipo === 'efeitos') {
        // Se a música não estiver muda, alterna o estado do mute para os efeitos
        get_ready_audio.muted = !get_ready_audio.muted;
        next_level_audio.muted = !next_level_audio.muted;
        if (audioMusicaQuiz.muted) {
            // Se a música estiver muda, interrompe os efeitos
            stopEfeitos();
        }
    }
}

document.addEventListener('click', playMusic);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        playMusic();
    }, 1000);
});
