// Selecteer de flip-card
const flipCard = document.querySelector('.flip-card');

// Voeg een click-event listener toe
flipCard.addEventListener('click', function() {
  // Toggle de 'flipped' class
  flipCard.classList.toggle('flipped');
}); 
