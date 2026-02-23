const questions = [
  // ... (10 preguntas anteriores)
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
  },
  // --- NUEVAS PREGUNTAS ---
  {
    question: "¿Qué es lo más valiente que has hecho en tu vida?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor miedo irracional?",
    type: "text"
  },
  {
    question: "¿Qué superpoder elegirías tener por un día?",
    type: "options",
    options: ["Volar", "Invisibilidad", "Telepatía", "Control del tiempo"]
  },
  {
    question: "¿Cuál es tu libro o película favorita y cómo te cambió?",
    type: "text"
  },
  {
    question: "¿Qué es algo que la mayoría de la gente no sabe de ti?",
    type: "text"
  },
  {
    question: "¿Cómo manejas el estrés en un día difícil?",
    type: "options",
    options: ["Haciendo ejercicio", "Durmiendo", "Escuchando música", "Hablando con alguien"]
  },
  {
    question: "¿Cuál sería tu trabajo ideal si el dinero no importara?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te hace reír?",
    type: "text"
  },
  {
    question: "¿Eres más de mañana o de noche?",
    type: "options",
    options: ["Madrugador/a", "Búho nocturno", "Depende del día"]
  },
  {
    question: "¿Cuál es el mejor consejo que has recibido jamás?",
    type: "text"
  },
  {
    question: "¿Qué te apasiona tanto que podrías hablar de ello por horas?",
    type: "text"
  },
  {
    question: "¿Prefieres la ciudad, el campo o la playa?",
    type: "options",
    options: ["Ciudad vibrante", "Campo tranquilo", "Playa relajante", "Montaña aventurera"]
  },
  {
    question: "¿Qué es lo que más agradeces hoy?",
    type: "text"
  },
  {
    question: "¿Cómo te gustaría ser recordado/a?",
    type: "text"
  },
  {
    question: "¿Cuál es tu comida favorita de todos los tiempos?",
    type: "text"
  },
  {
    question: "¿Prefieres leer el libro o ver la película?",
    type: "options",
    options: ["Libro siempre", "Película", "Ambos", "Ninguno"]
  },
  {
    question: "¿Qué habilidad nueva te gustaría aprender?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor orgullo?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te atrae intelectualmente de alguien?",
    type: "text"
  },
  {
    question: "¿Cómo describirías tu fin de semana perfecto?",
    type: "text"
  },
  {
    question: "¿Prefieres el café o el té?",
    type: "options",
    options: ["Café cargado", "Té relajante", "Chocolate caliente", "Agua"]
  },
  {
    question: "¿Cuál es el viaje más increíble que has hecho?",
    type: "text"
  },
  {
    question: "¿Qué es algo que te hace sentir nostalgia?",
    type: "text"
  },
  {
    question: "¿Cómo te enfrentas a los cambios inesperados?",
    type: "text"
  },
  {
    question: "¿Cuál es tu estación del año favorita?",
    type: "options",
    options: ["Primavera", "Verano", "Otoño", "Invierno"]
  },
  {
    question: "¿Qué es lo que más te inspira a diario?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor meta para este año?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más valoras de tu familia?",
    type: "text"
  },
  {
    question: "¿Cómo te relajas después de una semana larga?",
    type: "text"
  },
  {
    question: "¿Cuál es tu filosofía de vida en una frase?",
    type: "text"
  },
  {
    question: "¿Qué es lo más loco que has hecho por amor?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor talento oculto?",
    type: "text"
  },
  {
    question: "¿Si pudieras hablar con tu 'yo' del pasado, qué le dirías?",
    type: "text"
  },
  {
    question: "¿Cuál es el mejor regalo que has recibido?",
    type: "text"
  },
  {
    question: "¿Qué olor te transporta a un momento especial?",
    type: "text"
  },
  {
    question: "¿Preferirías viajar al futuro o al pasado?",
    type: "options",
    options: ["Futuro tecnológico", "Pasado histórico", "Me quedo en el presente"]
  },
  {
    question: "¿Cuál es tu mayor arrepentimiento, si tienes alguno?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te hace sentir vivo/a?",
    type: "text"
  },
  {
    question: "¿Cuál es tu placer culposo favorito?",
    type: "text"
  },
  {
    question: "¿Si tuvieras que vivir en otro planeta, cuál elegirías?",
    type: "options",
    options: ["Marte", "La Luna", "Un planeta de otra galaxia"]
  },
  {
    question: "¿Qué es lo primero que harías si ganaras la lotería?",
    type: "text"
  },
  {
    question: "¿Cuál es tu serie favorita de todos los tiempos?",
    type: "text"
  },
  {
    question: "¿Qué cualidad física te gusta más de ti?",
    type: "text"
  },
  {
    question: "¿Cómo te gustaría que fuera tu casa ideal?",
    type: "text"
  },
  {
    question: "¿Qué es lo más extraño que has comido?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor fobia?",
    type: "text"
  },
  {
    question: "¿Qué canción te hace bailar sin importar dónde estés?",
    type: "text"
  },
  {
    question: "¿Si pudieras ser otra persona por un día, quién serías?",
    type: "text"
  },
  {
    question: "¿Qué es lo más importante que has aprendido este año?",
    type: "text"
  },
  {
    question: "¿Prefieres el dulce o lo salado?",
    type: "options",
    options: ["Dulce siempre", "Salado", "Agridulce", "Depende del antojo"]
  },
  {
    question: "¿Cuál es tu lugar favorito para pensar?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te molesta de la gente?",
    type: "text"
  },
  {
    question: "¿Cuál es tu juego de mesa o videojuego favorito?",
    type: "text"
  },
  {
    question: "¿Qué harías si tuvieras 24 horas de vida?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor inspiración artística?",
    type: "text"
  },
  {
    question: "¿Cómo defines el éxito personal?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor desafío actual?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de tu personalidad?",
    type: "text"
  },
  {
    question: "¿Cuál es tu tradición familiar favorita?",
    type: "text"
  },
  {
    question: "¿Si pudieras inventar algo, qué sería?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te emociona del futuro?",
    type: "text"
  },
  {
    question: "¿Cuál es tu frase motivadora favorita?",
    type: "text"
  },
  {
    question: "¿Qué harías si fueras invisible por un día?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor descubrimiento personal?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de tu ciudad?",
    type: "text"
  },
  {
    question: "¿Cómo te gustaría que fuera tu vejez?",
    type: "text"
  },
  {
    question: "¿Cuál es tu superhéroe o superheroína favorita?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de la tecnología?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor logro académico o profesional?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de la naturaleza?",
    type: "text"
  },
  {
    question: "¿Cómo describirías tu estilo de vestir?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor deseo para el mundo?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de las redes sociales?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor fuente de felicidad?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de tu trabajo o estudios?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor lección aprendida de un error?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de la música?",
    type: "text"
  },
  {
    question: "¿Cuál es tu mayor sueño para tu familia?",
    type: "text"
  },
  {
    question: "¿Qué es lo que más te gusta de la vida?",
    type: "text"
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