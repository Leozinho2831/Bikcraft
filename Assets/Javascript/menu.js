const menu = document.querySelector(".cabecalho__menu-mobile");
const lista = document.querySelector(".header__list");

menu.addEventListener("click", () => {
    menu.classList.toggle('active');
    lista.classList.toggle('active');
})