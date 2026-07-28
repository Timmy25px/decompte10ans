// Démarrage musique après première interaction si nécessaire
document.addEventListener("click", () => {
    if (!started) {
        started = true;
        startMusic();
    }
}, {once:true});

// Synchronisation UTC
function timer(){
    const now = Date.now();

    // Fondu musique principale
    if(now >= fadeStart && now <= fadeEnd){
        let progress = (now - fadeStart) / (fadeEnd - fadeStart);
        mainMusic.volume = Math.max(0, 1 - progress);
    }

    // Écran blanc complet
    if(now >= whiteScreen){
        document.getElementById("whiteFade").style.opacity="1";
    }

    // Deuxième son
    if(now >= secondStart && secondSound.paused){
        mainMusic.pause();
        secondSound.play();

        setTimeout(()=>{
            mainMusic.currentTime = 0;
            mainMusic.volume = 1;
            mainMusic.play();
        },10000);
    }

    requestAnimationFrame(timer);
}

timer();
