// ham.js - ovládání hamburger menu

const hamburger = document.querySelector(".hamburger");
const menuHam = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menuHam.classList.toggle("active"); // vyjíždění hamburger menu
  hamburger.classList.toggle("active"); // přepínání třídy pro hamburger tlačítko
});
