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
const quizData = [{
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
        question: "What  does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboat",
        correct: "b",
    },

    {
        question: "what does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language ",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },

    // multiple level

    {
        question: "Easy Questions?",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        correct: "a",
        difficulty: "easy",
    },

    {
        question: "Hard Question?",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        correct: "a",
        difficulty: "hard",
    },
];
//Filter questions by selected difficulty level
const selectedDifficulty = "easy";
const filteredQuestions = quizData.filter(
    (q) => q.difficulty === selectedDifficulty
);

//Initialize quiz state
let currentQuiz = 0;
let score = 0;

shuffleArray(quizData);
//Load the quiz
function LoadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElem.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    //Reset and start the timer when loading a new question

    //Start a new timer for current question;

    //Call progress bar function
    updateProgressBar();
}

//Deselect previously selected  answers
function deselectAnswers() {
    answers.forEach((answer) => (answer.checked = false));
}

//Get the selected answer
function getSelected() {
    let answer;
    answers.forEach((answerElem) => {
        if (answerElem.checked) {
            answer = answerElem.id;
        }
    });
    return answer;
}

//Load the first quiz question

LoadQuiz();

// handle the submit button click
submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        showCorrectAnswer();
        // stop the time
        loadNextQuestion();
    }
});

function loadNextQuestion() {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++; // Move to the  next question

        LoadQuiz();
    } else {
        //End the quiz if no more questions

        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} question correctly</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
}

//Update progress bar after each question
function updateProgressBar() {
    const progressPercentage = ((currentQuiz + 1) / quizData.length) * 100;
    document.getElementById("progressBar").style.width = `${progressPercentage}%`;
}
//Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Feedback on correct answers
function showCorrectAnswer() {
    const correctAnswer = quizData[currentQuiz].correct;
    const selectedAnswers = getSelected();
    document.getElementById(correctAnswer + "_text").style.color = "green";
    if (selectedAnswers !== correctAnswer) {
        document.getElementById(selectedAnswers + "_text").style.color = "red";
    }
}

//Multiple categories or topic
const scienceQuestions = [];
const historyQuestion = [];

document.getElementById("Category").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "science") {
        quizData = scienceQuestions;
    } else if (selectedCategory === "history") {
        quizData = historyQuestion;
    }

    // reload the quiz with the selected categlory

    LoadQuiz();
});