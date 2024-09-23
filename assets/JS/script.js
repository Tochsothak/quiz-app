// Get references to elements
const quiz = document.getElementById("quiz");
const questionElem = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const scoreElem = document.getElementById("score");

// console.log(
//   quiz,
//   questionElem,
//   a_text,
//   b_text,
//   c_text,
//   submitBtn,
//   answers,
//   scoreElem
// );
// Array of quiz questions and answers
const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    question: "Which language runs in a web browser?",
    a: "java",
    b: "C",
    c: "javaScript",
    d: "Ruby",
    correct: "c",
  },

  {
    question: "what does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
];

//Initialize quiz state
let currentQuiz = 0;
let score = 0;

//Load the quiz
function LoadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
}
