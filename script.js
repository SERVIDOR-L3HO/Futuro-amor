const questions = [
  {
    question: "¿Cuál es tu recuerdo más feliz de la infancia?",
    type: "text"
  },
  {
    question: "Si pudieras viajar a cualquier lugar del mundo mañana, ¿a dónde irías?",
    type: "text"
  },
  {
    question: "¿Qué es lo primero que notas en una persona al conocerla?",
    type: "options",
    options: ["Los ojos", "La sonrisa", "Su energía", "Su forma de hablar"]
  },
  {
    question: "¿Cómo describirías tu 'lenguaje del amor' principal?",
    type: "options",
    options: ["Palabras de afirmación", "Tiempo de calidad", "Regalos", "Actos de servicio", "Contacto físico"]
  },
  {
    question: "¿Qué canción define tu vida en este momento?",
    type: "text"
  },
  {
    question: "¿Prefieres una cita tranquila en casa o una aventura afuera?",
    type: "options",
    options: ["Noche de películas y pizza", "Cena elegante", "Caminata por la naturaleza", "Concierto o fiesta"]
  },
  {
    question: "¿Cuál es tu mayor sueño que aún no has cumplido?",
    type: "text"
  },
  {
    question: "¿Qué cualidad valoras más en una amistad?",
    type: "options",
    options: ["Lealtad", "Sentido del humor", "Sinceridad", "Empatía"]
  },
  {
    question: "Si fueras un animal, ¿cuál serías y por qué?",
    type: "text"
  },
  {
    question: "¿Crees en el amor a primera vista?",
    type: "options",
    options: ["Totalmente", "Es complicado", "No, el amor se construye", "Solo en las películas"]
  }
];

let currentQuestionIndex = 0;
const answers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const inputContainer = document.getElementById('input-container');
const textAnswer = document.getElementById('text-answer');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const resultScreen = document.getElementById('result-screen');
const questionContent = document.getElementById('question-content');
const summary = document.getElementById('summary');

function init() {
  showQuestion();
  createHearts();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  
  // Update progress
  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  // Clear previous
  optionsContainer.innerHTML = '';
  inputContainer.classList.add('hidden');
  textAnswer.value = '';

  if (currentQuestion.type === 'options') {
    optionsContainer.classList.remove('hidden');
    currentQuestion.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerText = option;
      btn.onclick = () => handleAnswer(option);
      optionsContainer.appendChild(btn);
    });
  } else {
    inputContainer.classList.remove('hidden');
  }
}

function handleAnswer(answer) {
  if (answer.trim() === '') return;
  
  answers.push({
    question: questions[currentQuestionIndex].question,
    answer: answer
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

nextBtn.onclick = () => {
  handleAnswer(textAnswer.value);
};

// Allow Enter key for text input
textAnswer.onkeypress = (e) => {
  if (e.key === 'Enter') {
    handleAnswer(textAnswer.value);
  }
};

function showResults() {
  progressBar.style.width = '100%';
  questionContent.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  summary.innerHTML = answers.map(item => `
    <div class="summary-item">
      <div class="summary-q">${item.question}</div>
      <div class="summary-a">${item.answer}</div>
    </div>
  `).join('');
}

function createHearts() {
  const container = document.getElementById('hearts-container');
  const heartIcons = ['❤️', '💖', '💗', '💓', '💕'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(heart);
  }
}

init();