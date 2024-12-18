const quizData = [
  {
    question: "What is React?",
    a: "A library for building user interfaces.",
    b: "A framework for managing databases.",
    c: "A backend development tool.",
    d: "A CSS preprocessor.",
    correct: "a",
  },
  {
    question: "What is JSX in React?",
    a: "A JavaScript library.",
    b: "A syntax extension for JavaScript.",
    c: "A CSS framework.",
    d: "A JSON parser.",
    correct: "b",
  },
  {
    question: "What are the two main types of components in React?",
    a: "Class and Functional components.",
    b: "Stateful and Stateless components.",
    c: "UI and Backend components.",
    d: "Dynamic and Static components.",
    correct: "a",
  },
  {
    question: "Which hook is used for state management in functional components?",
    a: "useState",
    b: "useEffect",
    c: "useReducer",
    d: "useRef",
    correct: "a",
  }
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  quiz.innerHTML = `
    <h2>${currentQuizData.question}</h2>
    <ul>
      <li>
        <input type="radio" id="a" name="answer" value="a">
        <label for="a">${currentQuizData.a}</label>
      </li>
      <li>
        <input type="radio" id="b" name="answer" value="b">
        <label for="b">${currentQuizData.b}</label>
      </li>
      <li>
        <input type="radio" id="c" name="answer" value="c">
        <label for="c">${currentQuizData.c}</label>
      </li>
      <li>
        <input type="radio" id="d" name="answer" value="d">
        <label for="d">${currentQuizData.d}</label>
      </li>
    </ul>
  `;
}

function getSelected() {
  const answerEls = document.querySelectorAll('input[name="answer"]');
  let selectedAnswer = null;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      selectedAnswer = answerEl.value;
    }
  });

  return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
      submitBtn.style.display = "none";
    }
  } else {
    alert("Please select an answer!");
  }
});

loadQuiz();
