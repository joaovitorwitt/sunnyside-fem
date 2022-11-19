const hamburguer = document.querySelector('.mobile-icon');
const menuMobile = document.querySelector('.mobile-menu-inner');
const wrapper = document.querySelector('.mobile-menu-wrapper');
const header = document.querySelector('header');
const body = document.querySelector('body');

hamburguer.addEventListener('click', (e) => {
    menuMobile.classList.toggle('active');
})


body.addEventListener('click', (e) => {
    if (e.target === header || e.target === wrapper) {
        menuMobile.classList.remove('active');
    }
})