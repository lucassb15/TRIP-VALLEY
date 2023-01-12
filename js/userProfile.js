
// Menu toggle User profile

let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
};

//  Abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// overflow hidden
const overflowHidden = document.querySelector('body');

for (const element of toggle) {
    element.addEventListener('click', () => {
        overflowHidden.classList.toggle('no-scroll');
        nav.classList.toggle('show');
        
    });
};

//  Fecha menu pelos links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        overflowHidden.classList.remove('no-scroll');
        nav.classList.remove('show').overFlow();
       
    });
};
//  Adiciona sombra quando rolar a página
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
});

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;


    for (const section of sections) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;


        if (checkpointStart && checkpointEnd) {
            document
                .querySelector(`nav .menu ul li a[href*=${sectionId}]`)
                .classList.add('active');
            console.log('entrou');
        } else {
            document
                .querySelector(`nav .menu ul li a[href*=${sectionId}]`)
                .classList.remove('active');
            console.log('saiu');
        }

    }

};
