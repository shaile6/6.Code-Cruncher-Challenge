// var choiceContainer = document.querySelector("#choices");

// var feedbackContainer = document.querySelector("#feedback");

// var endScreen = document.querySelector("#end-screen");

// var initialsInput = document.querySelector("#initials");

// var initialsButton = document.querySelector("#submit");
// initialsButton.addEventListener("click", saveScore);

var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
  {
    question: "Commonly used data types do NOT include?",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ________?",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets",
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ______?",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4,
  },
  {
    question:
      "String values must be enclosed ___________  when being assigned to variables",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses",
    answer: 3,
  },
];

var correctPoint = 1;
var max_questions = 4;

function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  startTimer();
  // console.log(availableQuestions);
  getNextQuestion();
}

getNextQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= max_questions) {
    return window.location.assign("/game/end.html");
  }

  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectChoice = e.target;
    var selectAnswer = selectChoice.dataset["number"];

    var answerClass = "incorrect";
    if (selectAnswer == currentQuestion.answer) {
      answerClass = "correct";
    }
    console.log(answerClass);

    getNextQuestion();
  });
});

startQuiz();

var timeLeft = 60;
var timerInterval;

var startButton = document.querySelector("#start");

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

// startButton.addEventListener("click", startQuiz);

var timer = document.querySelector("#time");

function endQuiz() {}
