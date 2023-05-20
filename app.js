let menu = document.querySelector('.menu');
let navbar = document.querySelector('.nav');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.down', { delay: 500, origin: 'right' });