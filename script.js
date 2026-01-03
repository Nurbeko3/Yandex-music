document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const musicFrame = document.getElementById('music-frame');

    toggleBtn.addEventListener('click', () => {
        if (musicFrame.style.height === '0px') {
            musicFrame.style.height = '556px';
            toggleBtn.textContent = 'Yopish';
        } else {
            musicFrame.style.height = '0px';
            toggleBtn.textContent = 'Ochish';
        }
    });
});