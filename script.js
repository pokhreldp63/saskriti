document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.href.split('/').pop();
    const pageAudios = {
        'dashain.html': '../music/dashain.mp3',
        'tihar.html': '../music/tihar.mp3',
        'teej.html': '../music/teej.mp3',
        'chath.html': '../music/chath.mp3',
        'holi.html': '../music/holi.mp3',
        'buddhajayanti.html': '../music/buddha.mp3',
        'jatras.html': '../music/jatra.mp3',
        'loshar.html': '../music/lohsar.mp3',
    };

    if (pageAudios[currentPage]) {
        const audio = document.querySelector('audio');
        const playBtn = document.getElementById('playBtn');
        if (audio) {
            audio.src = pageAudios[currentPage];
            audio.loop = true;

            // Detect mobile
            const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

            if (isMobile) {
                // Show play button for mobile
                playBtn.style.display = 'block';
                playBtn.addEventListener('click', () => {
                    audio.play().catch(err => console.log("Playback failed:", err));
                    playBtn.style.display = 'none'; // hide button after start
                });
            } else {
                // Autoplay on desktop
                audio.play().catch(err => {
                    console.log("Desktop autoplay blocked:", err);
                });
            }
        }
    }
});