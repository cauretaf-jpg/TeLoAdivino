const cards = [
  { value: 1, numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] },
  { value: 2, numbers: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31] },
  { value: 4, numbers: [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31] },
  { value: 8, numbers: [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31] },
  { value: 16, numbers: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] }
];

let currentCardIndex = 0;
let total = 0;
let lastScreen = 'homeScreen';

const screens = {
  home: document.getElementById('homeScreen'),
  game: document.getElementById('gameScreen'),
  result: document.getElementById('resultScreen'),
  explain: document.getElementById('explainScreen')
};

const numberCard = document.getElementById('numberCard');
const stepPill = document.getElementById('stepPill');
const progressDots = document.getElementById('progressDots');
const resultNumber = document.getElementById('resultNumber');

function showScreen(id) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame() {
  currentCardIndex = 0;
  total = 0;
  renderCard();
  showScreen('gameScreen');
}

function renderCard() {
  const card = cards[currentCardIndex];
  stepPill.textContent = `Tarjeta ${currentCardIndex + 1} de ${cards.length}`;
  numberCard.innerHTML = card.numbers.map(number => `<div class="number-cell">${number}</div>`).join('');
  renderDots();
}

function renderDots() {
  progressDots.innerHTML = cards.map((_, index) => {
    const className = index < currentCardIndex ? 'dot done' : index === currentCardIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answer(isYes) {
  if (isYes) total += cards[currentCardIndex].value;
  currentCardIndex += 1;

  if (currentCardIndex >= cards.length) {
    resultNumber.textContent = total;
    showScreen('resultScreen');
    return;
  }
  renderCard();
}

function openExplanation(fromScreen) {
  lastScreen = fromScreen;
  showScreen('explainScreen');
}

function backFromExplanation() {
  if (lastScreen === 'resultScreen') showScreen('resultScreen');
  else showScreen('homeScreen');
}

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('howBtn').addEventListener('click', () => openExplanation('homeScreen'));
document.getElementById('yesBtn').addEventListener('click', () => answer(true));
document.getElementById('noBtn').addEventListener('click', () => answer(false));
document.getElementById('playAgainBtn').addEventListener('click', startGame);
document.getElementById('explainBtn').addEventListener('click', () => openExplanation('resultScreen'));
document.getElementById('explainPlayBtn').addEventListener('click', startGame);
document.getElementById('backFromExplainBtn').addEventListener('click', backFromExplanation);
document.getElementById('backHomeBtn').addEventListener('click', () => showScreen('homeScreen'));
document.getElementById('resetBtn').addEventListener('click', startGame);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}
