document.addEventListener('DOMContentLoaded', () => {

    const polaznici = [
        { ime: "Rudolf", prezime: "Gergelj", githubUrl: "https://github.com/BetonOS4633", videoSrc: "/video/video_20260302183401.webm" },
        { ime: "Luka", prezime: "Hlavati", githubUrl: "https://github.com/lhlavati", videoSrc: "/video/video_20260302182925.webm" },
        { ime: "Tankred", prezime: "Kralj", githubUrl: "https://github.com/Tankred031", videoSrc: "/video/video_20260302183102.webm" },
        { ime: "Fran", prezime: "Liović", githubUrl: "https://github.com/Liovic031", videoSrc: "" },
        { ime: "Robert", prezime: "Marković", githubUrl: "https://github.com/RobertMarkovic710", videoSrc: "/video/video_20260302183005.webm" },
        { ime: "Hrvoje", prezime: "Mitrić", githubUrl: "https://github.com/hrki1971", videoSrc: "/video/video_20260302190249.webm" },
        { ime: "Roberto", prezime: "Perković", githubUrl: "https://github.com/rperkovi", videoSrc: "" },
        { ime: "Maja", prezime: "Šnalcer", githubUrl: "https://github.com/snalcermaja", videoSrc: "/video/video_20260302183017.webm" },
        { ime: "Alen", prezime: "Tandara", githubUrl: "https://github.com/alentandara", videoSrc: "" },
        { ime: "Vincent Edward", prezime: "Tilhof", githubUrl: "https://github.com/EdwardTilhof", videoSrc: "" },
        { ime: "Tomislav", prezime: "Jakopec", githubUrl: "https://github.com/tjakopec/EdunovaFD1", videoSrc: "/video/video_20260302182840.webm" }
    ];

    const gallery = document.getElementById('video-gallery');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalCaption = document.getElementById('modal-caption');
    const closeModalBtn = document.querySelector('.close-button');

    // Funkcija za zatvaranje modala
    const closeModal = () => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = ''; // Ukloni izvor da se zaustavi download u pozadini
    };

    polaznici.forEach(polaznik => {
        const card = document.createElement('div');
        card.className = 'video-card';
        // Ako nema videa, dodaj klasu za drugačiji stil/ponašanje
        if (!polaznik.videoSrc) {
            card.classList.add('no-video');
        }

        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';

        if (polaznik.videoSrc) {
            const video = document.createElement('video');
            video.src = polaznik.videoSrc;
            // Možete dodati poster (thumbnail) za svaki video, npr. `videos/thumbnails/rudolf_gergelj.jpg`
            // video.poster = 'path/to/poster.jpg'; 
            video.muted = true;
            video.loop = true;
            video.playsInline = true; // Važno za mobilne uređaje

            const overlay = document.createElement('div');
            overlay.className = 'play-overlay';
            overlay.innerHTML = '<span class="play-icon">▶</span>';

            videoWrapper.appendChild(video);
            videoWrapper.appendChild(overlay);

            // Play/pause na hover za preview
            //card.addEventListener('mouseenter', () => video.play().catch(e => {}));
            //card.addEventListener('mouseleave', () => video.pause());

        } else {
            // Placeholder za one bez videa
            videoWrapper.innerHTML = `<div class="no-video-placeholder">Nema videa</div>`;
        }

        const info = document.createElement('div');
        info.className = 'card-info';
        
        const nameLink = document.createElement('a');
        nameLink.href = polaznik.githubUrl;
        nameLink.target = '_blank';
        nameLink.title = `Pogledaj GitHub profil od ${polaznik.ime}`;
        nameLink.textContent = `${polaznik.ime} ${polaznik.prezime}`;
        info.appendChild(nameLink);

        card.appendChild(videoWrapper);
        card.appendChild(info);
        gallery.appendChild(card);

        // Otvaranje modala na klik na karticu (ali ne na link)
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                return; // Dopusti linku da odradi svoje
            }

            if (polaznik.videoSrc) {
                modal.style.display = 'flex';

                modalVideo.src = polaznik.videoSrc;
                modalVideo.controls = true;
                modalVideo.muted = true;
                modalVideo.play();  
                modalVideo.load();

                modalCaption.innerHTML = '';

                const captionLink = document.createElement('a');
                captionLink.href = polaznik.githubUrl;
                captionLink.target = '_blank';
                captionLink.textContent = `${polaznik.ime} ${polaznik.prezime}`;

                modalCaption.appendChild(captionLink);
            }
        });
    });

    // Event listeneri za zatvaranje modala
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});