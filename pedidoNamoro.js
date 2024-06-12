document.addEventListener('DOMContentLoaded' , (event) => {

    const button = document.getElementById('btn-n');

    button.addEventListener('mouseover', () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
        const randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });

});