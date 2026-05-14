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
  },
  compatibility: {
    icon: '💘', eyebrow: 'Modo coqueto', title: 'Compatibilidad mágica', pill: 'Química',
    copy: 'Juegan dos personas. La Persona 1 responde primero, luego pasa el celular a la Persona 2. Al final calculo su química.',
    question: '¿Qué tanta<br>química tienen?', resultCopy: 'Compatibilidad mágica'
  }
};

const compatibilityQuestions = [
  {
    question: '¿Qué plan prefieres para una primera salida?',
    weight: 8,
    options: [
      { text: 'Café tranquilo', vibe: 'calma' },
      { text: 'Cine y algo rico', vibe: 'ternura' },
      { text: 'Paseo nocturno', vibe: 'misterio' },
      { text: 'Salida espontánea', vibe: 'aventura' }
    ]
  },
  {
    question: '¿Qué te conquista más?',
    weight: 12,
    options: [
      { text: 'Que me haga reír', vibe: 'humor' },
      { text: 'Que sea detallista', vibe: 'ternura' },
      { text: 'Que me escuche', vibe: 'calma' },
      { text: 'Que tenga seguridad', vibe: 'intensidad' }
    ]
  },
  {
    question: '¿Qué tipo de mensaje te gusta recibir?',
    weight: 8,
    options: [
      { text: 'Algo tierno', vibe: 'ternura' },
      { text: 'Algo gracioso', vibe: 'humor' },
      { text: 'Algo directo', vibe: 'intensidad' },
      { text: 'Algo misterioso', vibe: 'misterio' }
    ]
  },
  {
    question: '¿Qué energía te atrae más?',
    weight: 12,
    options: [
      { text: 'Romántica', vibe: 'ternura' },
      { text: 'Divertida', vibe: 'humor' },
      { text: 'Tranquila', vibe: 'calma' },
      { text: 'Intensa', vibe: 'intensidad' }
    ]
  },
  {
    question: '¿Qué cita elegirías?',
    weight: 8,
    options: [
      { text: 'Cena bonita', vibe: 'ternura' },
      { text: 'Playa o mirador', vibe: 'misterio' },
      { text: 'Juegos y risas', vibe: 'humor' },
      { text: 'Plan sorpresa', vibe: 'aventura' }
    ]
  },
  {
    question: '¿Qué detalle te derrite más?',
    weight: 10,
    options: [
      { text: 'Una canción dedicada', vibe: 'ternura' },
      { text: 'Un mensaje inesperado', vibe: 'misterio' },
      { text: 'Un abrazo largo', vibe: 'calma' },
      { text: 'Que recuerden algo importante', vibe: 'profundidad' }
    ]
  },
  {
    question: '¿Qué prefieres en una conversación?',
    weight: 12,
    options: [
      { text: 'Reír mucho', vibe: 'humor' },
      { text: 'Hablar profundo', vibe: 'profundidad' },
      { text: 'Coquetear sutilmente', vibe: 'misterio' },
      { text: 'Contarse de todo', vibe: 'calma' }
    ]
  },
  {
    question: '¿Qué te parece más atractivo?',
    weight: 12,
    options: [
      { text: 'La ternura', vibe: 'ternura' },
      { text: 'El humor', vibe: 'humor' },
      { text: 'La seguridad', vibe: 'intensidad' },
      { text: 'La inteligencia', vibe: 'profundidad' }
    ]
  },
  {
    question: '¿Qué harías si te gusta alguien?',
    weight: 8,
    options: [
      { text: 'Se lo digo directo', vibe: 'intensidad' },
      { text: 'Tiro indirectas', vibe: 'misterio' },
      { text: 'Espero señales', vibe: 'calma' },
      { text: 'Me pongo nervioso/a', vibe: 'ternura' }
    ]
  },
  {
    question: '¿Qué tipo de conexión buscas?',
    weight: 10,
    options: [
      { text: 'Algo tranquilo', vibe: 'calma' },
      { text: 'Algo intenso', vibe: 'intensidad' },
      { text: 'Algo divertido', vibe: 'humor' },
      { text: 'Algo serio', vibe: 'profundidad' }
    ]
  }
];

const compatibleVibes = {
  ternura: ['calma', 'misterio', 'profundidad'],
  calma: ['ternura', 'humor', 'profundidad'],
  humor: ['aventura', 'calma', 'ternura'],
  aventura: ['humor', 'intensidad', 'misterio'],
  misterio: ['ternura', 'intensidad', 'aventura'],
  intensidad: ['misterio', 'aventura', 'profundidad'],
  profundidad: ['calma', 'ternura', 'intensidad']
};

let selectedMode = 'number';
let stage = 'main';
let currentCardIndex = 0;
let total = 0;
let birthdayDay = 0;
let lastScreen = 'homeScreen';
let activeCards = baseCards31;
let compatPerson = 1;
let compatQuestionIndex = 0;
let compatAnswers = { 1: [], 2: [] };

const screens = ['homeScreen','modeScreen','introScreen','gameScreen','compatScreen','resultScreen','explainScreen'];
const playCard = document.getElementById('playCard');
const stepPill = document.getElementById('stepPill');
const progressDots = document.getElementById('progressDots');
const questionTitle = document.getElementById('questionTitle');
const gameEyebrow = document.getElementById('gameEyebrow');
const resultValue = document.getElementById('resultValue');
const resultCopy = document.getElementById('resultCopy');
const resultNote = document.getElementById('resultNote');
const resultTitle = document.getElementById('resultTitle');
const compatStepPill = document.getElementById('compatStepPill');
const compatEyebrow = document.getElementById('compatEyebrow');
const compatQuestionTitle = document.getElementById('compatQuestionTitle');
const compatHelpText = document.getElementById('compatHelpText');
const compatOptions = document.getElementById('compatOptions');
const compatProgressDots = document.getElementById('compatProgressDots');

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

  if (selectedMode === 'compatibility') {
    startCompatibility();
    return;
  }

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


function startCompatibility() {
  compatPerson = 1;
  compatQuestionIndex = 0;
  compatAnswers = { 1: [], 2: [] };
  resultNote.textContent = '';
  renderCompatibilityQuestion();
  showScreen('compatScreen');
}

function renderCompatibilityQuestion() {
  const totalQuestions = compatibilityQuestions.length;
  const question = compatibilityQuestions[compatQuestionIndex];
  compatStepPill.textContent = `Persona ${compatPerson} · ${compatQuestionIndex + 1} de ${totalQuestions}`;
  compatEyebrow.textContent = compatPerson === 1 ? 'Responde sin que mire la otra persona' : 'Ahora responde la otra persona';
  compatQuestionTitle.textContent = question.question;
  compatHelpText.textContent = compatPerson === 1 ? 'Elige la opción que más va contigo.' : 'Responde honestamente. No intentes copiar la respuesta anterior.';
  compatOptions.innerHTML = question.options.map((option, index) => `
    <button class="compat-option" data-index="${index}">
      <span>${index + 1}</span>
      <strong>${option.text}</strong>
    </button>
  `).join('');
  compatOptions.querySelectorAll('.compat-option').forEach(button => {
    button.addEventListener('click', () => answerCompatibility(Number(button.dataset.index)));
  });
  renderCompatibilityDots();
}

function renderCompatibilityDots() {
  const totalQuestions = compatibilityQuestions.length;
  compatProgressDots.innerHTML = Array.from({ length: totalQuestions }, (_, index) => {
    const className = index < compatQuestionIndex ? 'dot done' : index === compatQuestionIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answerCompatibility(optionIndex) {
  compatAnswers[compatPerson].push(optionIndex);
  compatQuestionIndex += 1;

  if (compatQuestionIndex >= compatibilityQuestions.length) {
    if (compatPerson === 1) {
      showCompatibilityHandoff();
    } else {
      showCompatibilityResult();
    }
    return;
  }
  renderCompatibilityQuestion();
}

function showCompatibilityHandoff() {
  compatStepPill.textContent = 'Cambio de turno';
  compatEyebrow.textContent = 'Pausa mágica';
  compatQuestionTitle.textContent = 'Pasa el celular a la Persona 2';
  compatHelpText.textContent = 'La Persona 2 debe responder las mismas preguntas sin ver las respuestas anteriores.';
  compatOptions.innerHTML = '<button class="primary-button compat-continue" id="startPersonTwoBtn">Comenzar Persona 2</button>';
  compatProgressDots.innerHTML = '';
  document.getElementById('startPersonTwoBtn').addEventListener('click', () => {
    compatPerson = 2;
    compatQuestionIndex = 0;
    renderCompatibilityQuestion();
  });
}

function scoreCompatibility() {
  let score = 0;
  const details = [];
  const vibeCounter = {};

  compatibilityQuestions.forEach((question, index) => {
    const answerOne = question.options[compatAnswers[1][index]];
    const answerTwo = question.options[compatAnswers[2][index]];
    if (!answerOne || !answerTwo) return;

    const weight = question.weight || 10;
    let earned = Math.round(weight * 0.35);
    let matchType = 'diferente';

    if (answerOne.vibe === answerTwo.vibe) {
      earned = weight;
      matchType = 'igual';
    } else if ((compatibleVibes[answerOne.vibe] || []).includes(answerTwo.vibe)) {
      earned = Math.round(weight * 0.75);
      matchType = 'compatible';
    }

    score += earned;
    details.push(matchType);
    vibeCounter[answerOne.vibe] = (vibeCounter[answerOne.vibe] || 0) + 1;
    vibeCounter[answerTwo.vibe] = (vibeCounter[answerTwo.vibe] || 0) + 1;
  });

  const dominantVibe = Object.entries(vibeCounter).sort((a, b) => b[1] - a[1])[0]?.[0] || 'misterio';
  return { score: Math.min(100, score), details, dominantVibe };
}

function getCompatibilityMessage(score, dominantVibe) {
  const vibeLabels = {
    ternura: 'conexión tierna',
    calma: 'complicidad tranquila',
    humor: 'química divertida',
    aventura: 'chispa espontánea',
    misterio: 'tensión misteriosa',
    intensidad: 'atracción intensa',
    profundidad: 'conexión profunda'
  };
  const type = vibeLabels[dominantVibe] || 'conexión misteriosa';

  if (score >= 90) return { title: 'Química peligrosa', type, note: 'Aquí hay miradas, risas y una conexión que se nota. Si esto fuera una película, ya estarían en la escena final.' };
  if (score >= 75) return { title: 'Muy buena vibra', type, note: 'Hay complicidad, curiosidad y una tensión bonita. No está todo dicho, pero definitivamente hay algo interesante.' };
  if (score >= 55) return { title: 'Conexión misteriosa', type, note: 'No son iguales, y eso puede hacerlo más entretenido. Hay contraste, coqueteo y ganas de descubrir más.' };
  if (score >= 35) return { title: 'Atracción con desafío', type, note: 'Hay diferencias claras, pero también espacio para sorprenderse. Aquí manda la paciencia, el humor y una buena conversación.' };
  return { title: 'Vibra caótica', type, note: 'No todo calza, pero al menos hay historia para contar. A veces lo raro también tiene encanto.' };
}

function showCompatibilityResult() {
  const { score, dominantVibe } = scoreCompatibility();
  const message = getCompatibilityMessage(score, dominantVibe);
  resultTitle.textContent = message.title;
  resultCopy.textContent = `Compatibilidad mágica · ${message.type}`;
  resultValue.className = 'result-number compatibility-result';
  resultValue.textContent = `${score}%`;
  resultNote.textContent = message.note;
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
document.getElementById('backToModesFromCompatBtn').addEventListener('click', openModes);
document.getElementById('resetCompatBtn').addEventListener('click', startCompatibility);
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
