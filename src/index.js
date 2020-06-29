const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');
const navbar = document.querySelector('.nav');

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

const stickyNavbar = () => {
    if (window.pageYOffset > "50") {
        console.log("yes");
        navbar.classList.add('nav--sticky');
    }else {
        console.log(window.pageYOffset);
        navbar.classList.remove('nav--sticky');
    }
};


hamburger.addEventListener('click', hamburgerToggle);
window.addEventListener('scroll', stickyNavbar);