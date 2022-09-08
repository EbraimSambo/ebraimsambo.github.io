let BtnMenu = document.querySelector('.fa-bars');
BtnMenu.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('ativar');
    BtnMenu.classList.toggle('fa-times')
});

document.querySelector(' #categoria').addEventListener('click', () => {
    document.querySelector('.categorias').classList.toggle('activar');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-up');
    document.querySelector('.menu-inferior').classList.remove('ativar');
    document.querySelector('.fa-bars-staggered').classList.remove('fa-times');
});

document.querySelector('.fa-bars-staggered').addEventListener('click', () => {
    document.querySelector('.menu-inferior').classList.toggle('ativar');
    document.querySelector('.fa-bars-staggered').classList.toggle('fa-times');
    document.querySelector('.categorias').classList.remove('activar');
    document.querySelector('.fa-chevron-down').classList.remove('fa-chevron-up');
});

const productContainers = [...document.querySelectorAll('.slider')];
const nxtBtn = [...document.querySelectorAll('.btnEsquerdo')];
const preBtn = [...document.querySelectorAll('.btnDireito')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
