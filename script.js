document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const musicFrame = document.getElementById('music-frame');
    const EXPANDED_HEIGHT = '560px'; // keep in sync with CSS

    // Ensure initial state is expanded
    musicFrame.style.height = EXPANDED_HEIGHT;
    toggleBtn.textContent = 'Yopish';

    toggleBtn.addEventListener('click', () => {
        if (musicFrame.style.height === '0px') {
            musicFrame.style.height = EXPANDED_HEIGHT;
            toggleBtn.textContent = 'Yopish';
        } else {
            musicFrame.style.height = '0px';
            toggleBtn.textContent = 'Ochish';
        }
    });
});