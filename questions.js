
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var timerInterval;


 var questions = [
 {
     question: "Commonly used data types do NOT include?",
     answers: ["strings", "booleans", "alerts", "numbers"],
     correctAnswer: "alerts"
 },
 {
    question: "The condition in an if / else statement is enclosed within ________?",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ______?",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
     },
    {
    question: "String values must be enclosed ___________  when being assigned to variables",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes"

    }

 ];


var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

var timer = document.querySelector("#time");


var questionContainer = document.querySelector("#question-title");

var choiceContainer = document.querySelector("#choices");

var feedbackContainer = document.querySelector("#feedback");

var endScreen = document.querySelector("#end-screen");


var initialsInput = document.querySelector("#initials");


var initialsButton = document.querySelector("#submit");
initialsButton.addEventListener("click", saveScore);


function startQuiz() {
    startButton.style.display = "none";
    startTimer();
 }


function startTimer() {
   timerInterval = setInterval(() => {
     timeLeft--;
    timer.textContent = timeLeft;
     if (timeLeft <= 0) {
       endQuiz();
     }
   }, 1000);
 }


