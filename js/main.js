//  Abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
};

//  Fecha menu pelos links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

//  Adiciona sombra quando rolar a página
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})


//  Tours carrousel swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

});

//  ScrollReveal: Mostra elementos quando der scroll
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .text, #home .image,
    #services .text, #services .card,
    #tour header,
    #tourism header, 
    #contact .text, #contact .links
`, { interval: 100 })


//  Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})