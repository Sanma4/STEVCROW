document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1_bars-menu");
let line2__bars = document.querySelector(".line2_bars-menu");
let line3__bars = document.querySelector(".line3_bars-menu");

function animateBars() {
    line1__bars.classList.toggle(".activeline1__bars-menu");
    line2__bars.classList.toggle(".activeline2__bars-menu");
    line3__bars.classList.toggle(".activeline3__bars-menu");
}
