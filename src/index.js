const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');
const body = document.querySelector('body');

const galleryImages = document.querySelectorAll('.gallery__box img');


const hamburgerToggle = () => {
    hamburger.classList.toggle('change');
    navMenu.classList.toggle('nav__menu--show');
    
};

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        image.style.opacity = 1;
    });
    
});


hamburger.addEventListener('click', hamburgerToggle);