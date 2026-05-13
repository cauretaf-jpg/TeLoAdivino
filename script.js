const baseCards31 = [
  { value: 1, numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] },
  { value: 2, numbers: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31] },
  { value: 4, numbers: [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31] },
  { value: 8, numbers: [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31] },
  { value: 16, numbers: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] }
];

const monthCards = [
  { value: 1, numbers: [1,3,5,7,9,11] },
  { value: 2, numbers: [2,3,6,7,10,11] },
  { value: 4, numbers: [4,5,6,7,12] },
  { value: 8, numbers: [8,9,10,11,12] }
];

const months = ['', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const symbols = [
  { id: 1, icon: '⭐', name: 'estrella' },
  { id: 2, icon: '❤️', name: 'corazón' },
  { id: 3, icon: '🌙', name: 'luna' },
  { id: 4, icon: '☀️', name: 'sol' },
  { id: 5, icon: '⚡', name: 'rayo' },
  { id: 6, icon: '🌸', name: 'flor' },
  { id: 7, icon: '👑', name: 'corona' },
  { id: 8, icon: '💎', name: 'diamante' },
  { id: 9, icon: '🍀', name: 'trébol' },
  { id: 10, icon: '🔥', name: 'fuego' },
  { id: 11, icon: '☁️', name: 'nube' },
  { id: 12, icon: '🗝️', name: 'llave' },
  { id: 13, icon: '🎵', name: 'nota musical' },
  { id: 14, icon: '🪐', name: 'planeta' },
  { id: 15, icon: '👻', name: 'fantasma' },
  { id: 16, icon: '🐱', name: 'gato' }
];

const modes = {
  number: {
    icon: '🔢', eyebrow: 'Modo clásico', title: 'Piensa un número', pill: 'Número',
    copy: 'Piensa un número del 1 al 31. No lo digas. Solo responde si aparece en cada tarjeta.',
    question: '¿Tu número<br>está aquí?', resultCopy: 'Estás pensando en el número'
  },
  birthday: {
    icon: '🎂', eyebrow: 'Modo cumpleaños', title: 'Piensa en tu cumpleaños', pill: 'Cumpleaños',
    copy: 'Piensa en tu día y mes de cumpleaños. Primero adivinaré el día y luego el mes.',
    question: '¿Tu día<br>está aquí?', resultCopy: 'Tu cumpleaños es'
  },
  symbol: {
    icon: '🌙', eyebrow: 'Modo mágico', title: 'Elige una figura', pill: 'Símbolo',
    copy: 'Mira la lista de símbolos, elige uno mentalmente y no lo digas. Yo lo adivinaré.',
    question: '¿Tu símbolo<br>está aquí?', resultCopy: 'Estás pensando en'
  }
};

let selectedMode = 'number';
let stage = 'main';
let currentCardIndex = 0;
let total = 0;
let birthdayDay = 0;
let lastScreen = 'homeScreen';
let activeCards = baseCards31;

const screens = ['homeScreen','modeScreen','introScreen','gameScreen','resultScreen','explainScreen'];
const playCard = document.getElementById('playCard');
const stepPill = document.getElementById('stepPill');
const progressDots = document.getElementById('progressDots');
const questionTitle = document.getElementById('questionTitle');
const gameEyebrow = document.getElementById('gameEyebrow');
const resultValue = document.getElementById('resultValue');
const resultCopy = document.getElementById('resultCopy');
const resultNote = document.getElementById('resultNote');
const resultTitle = document.getElementById('resultTitle');

function showScreen(id) {
  screens.forEach(screenId => document.getElementById(screenId).classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openModes() { showScreen('modeScreen'); }

function prepareMode(mode) {
  selectedMode = mode;
  const data = modes[mode];
  document.getElementById('introPill').textContent = data.pill;
  document.getElementById('introIcon').textContent = data.icon;
  document.getElementById('introEyebrow').textContent = data.eyebrow;
  document.getElementById('introTitle').textContent = data.title;
  document.getElementById('introCopy').textContent = data.copy;
  showScreen('introScreen');
}

function startSelectedMode() {
  total = 0;
  birthdayDay = 0;
  currentCardIndex = 0;
  resultNote.textContent = '';
  resultValue.className = 'result-number';

  if (selectedMode === 'birthday') {
    stage = 'day';
    activeCards = baseCards31;
  } else if (selectedMode === 'symbol') {
    stage = 'symbol';
    activeCards = buildSymbolCards();
  } else {
    stage = 'number';
    activeCards = baseCards31;
  }
  renderCard();
  showScreen('gameScreen');
}

function buildSymbolCards() {
  return [1,2,4,8,16].map(value => ({
    value,
    symbols: symbols.filter(symbol => (symbol.id & value) !== 0)
  }));
}

function renderCard() {
  const data = modes[selectedMode];
  const label = selectedMode === 'birthday' && stage === 'month' ? 'Mes' : 'Tarjeta';
  stepPill.textContent = `${label} ${currentCardIndex + 1} de ${activeCards.length}`;
  gameEyebrow.textContent = selectedMode === 'birthday' && stage === 'month' ? 'Ahora el mes' : 'Mira con atención';
  questionTitle.innerHTML = selectedMode === 'birthday' && stage === 'month' ? '¿Tu mes<br>está aquí?' : data.question;

  const card = activeCards[currentCardIndex];
  if (selectedMode === 'symbol') {
    playCard.className = 'play-card symbol-card';
    playCard.innerHTML = card.symbols.map(symbol => `<div class="symbol-cell" title="${symbol.name}">${symbol.icon}</div>`).join('');
  } else {
    playCard.className = 'play-card number-card';
    playCard.innerHTML = card.numbers.map(number => `<div class="number-cell">${number}</div>`).join('');
  }
  renderDots();
}

function renderDots() {
  progressDots.innerHTML = activeCards.map((_, index) => {
    const className = index < currentCardIndex ? 'dot done' : index === currentCardIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answer(isYes) {
  if (isYes) total += activeCards[currentCardIndex].value;
  currentCardIndex += 1;

  if (currentCardIndex >= activeCards.length) {
    finishStage();
    return;
  }
  renderCard();
}

function finishStage() {
  if (selectedMode === 'birthday' && stage === 'day') {
    birthdayDay = total;
    total = 0;
    currentCardIndex = 0;
    stage = 'month';
    activeCards = monthCards;
    renderCard();
    return;
  }
  showResult();
}

function showResult() {
  resultTitle.textContent = '¡Ya lo sé!';
  resultNote.textContent = '';
  resultValue.className = 'result-number';

  if (selectedMode === 'birthday') {
    const monthNumber = total;
    const validDay = birthdayDay >= 1 && birthdayDay <= 31;
    const validMonth = monthNumber >= 1 && monthNumber <= 12;
    resultCopy.textContent = 'Tu cumpleaños es';
    resultValue.classList.add('date-result');
    resultValue.textContent = validDay && validMonth ? `${birthdayDay} de ${months[monthNumber]}` : 'Fecha no válida';
    if (!validDay || !validMonth) resultNote.textContent = 'Revisa tus respuestas y vuelve a intentarlo.';
  } else if (selectedMode === 'symbol') {
    const symbol = symbols.find(item => item.id === total);
    resultCopy.textContent = 'Estás pensando en';
    resultValue.classList.add('symbol-result');
    resultValue.textContent = symbol ? symbol.icon : '¿?';
    resultNote.textContent = symbol ? `Tu símbolo es ${symbol.name}.` : 'No detecté un símbolo válido. Vuelve a intentarlo.';
  } else {
    resultCopy.textContent = 'Estás pensando en el número';
    resultValue.textContent = total;
    if (total === 0) resultNote.textContent = 'Parece que respondiste No en todas las tarjetas.';
  }
  showScreen('resultScreen');
}

function openExplanation(fromScreen) {
  lastScreen = fromScreen;
  showScreen('explainScreen');
}

function backFromExplanation() {
  showScreen(lastScreen || 'homeScreen');
}

function resetCurrentGame() { startSelectedMode(); }

document.getElementById('chooseModeBtn').addEventListener('click', openModes);
document.getElementById('howBtn').addEventListener('click', () => openExplanation('homeScreen'));
document.getElementById('backHomeFromModesBtn').addEventListener('click', () => showScreen('homeScreen'));
document.getElementById('backModesFromIntroBtn').addEventListener('click', openModes);
document.getElementById('startSelectedBtn').addEventListener('click', startSelectedMode);
document.getElementById('backToModesBtn').addEventListener('click', openModes);
document.getElementById('yesBtn').addEventListener('click', () => answer(true));
document.getElementById('noBtn').addEventListener('click', () => answer(false));
document.getElementById('resetBtn').addEventListener('click', resetCurrentGame);
document.getElementById('playAgainBtn').addEventListener('click', startSelectedMode);
document.getElementById('changeModeBtn').addEventListener('click', openModes);
document.getElementById('backFromExplainBtn').addEventListener('click', backFromExplanation);
document.getElementById('explainPlayBtn').addEventListener('click', openModes);

document.querySelectorAll('.mode-card').forEach(button => {
  button.addEventListener('click', () => prepareMode(button.dataset.mode));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}
