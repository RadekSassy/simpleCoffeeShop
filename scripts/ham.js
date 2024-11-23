// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); // Přidáme přepínání třídy pro hamburger tlačítko
  closeBtn.classList.toggle('show'); // Přepínejte zobrazení tlačítka zavření
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  hamburger.classList.remove('active'); // Skryjte třídu pro hamburger tlačítko
  closeBtn.classList.remove('show'); // Skryjte tlačítko zavření při zavření menu
});
