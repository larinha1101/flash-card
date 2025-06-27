// Dados dos flash cards
const flashCardsData = [
  {
    question: "O que é HTML?",
    answer: "HTML é a linguagem de marcação usada para criar páginas na web."
  },
  
// script.js
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
