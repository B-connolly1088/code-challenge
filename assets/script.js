var startPage = document.querySelector("#start-page")
var button = document.querySelector("#start-button")
var totalScore = document.querySelector("#total-score")
var qPage = document.querySelector("#q-page")

var questions = [
    {
        question: "What is a method?",
        choices: ["Actions that can be performed on objects.", "Actions that are performed on HTML.", "An element in JS."],
        answer: 0
    },
    {
        question: "What is a function responsible for in JS",
        choices: ["Allows us to encapsulate a block of code to be reused.", "The basis of JS.", "Not used in JS."],
        answer: 0
    },
    {
        question: "What are event listeners in JS?",
        choices: ["A way to wait for user interaction and then execute code upon event.", "How you load JS into your page.", "The last element used in building JS code."],
        answer: 0
    },
]

var currentQ = 0;


function buttonClicked(event) {
    event.preventDefault();
    startPage.classList.add("hide");
    qPage.classList.remove("hide");
    countdown();
    questionSelect();
    
}

function questionSelect() {
    var q = questions[currentQ]
    console.log(q);
    var h2 = document.querySelector("#quest");
    h2.textContent = q.question
    for (var i = 0; i < q.choices.length; i++) {
        var btn = document.getElementById(i)
        btn.textContent = q.choices[i]
        btn.addEventListener("click", answerSelect)
    }
}

function answerSelect(event) {
    event.preventDefault();
    var userInput = event.target.id
    var currentQuestion = questions[currentQ];
    if (parseInt(userInput) === currentQuestion.answer) {
        currentQ++;
        if (currentQ < questions.length) {
            questionSelect();
        } else {
            endQuiz();
    }
    }   
}

//answer verification

var timeLimit = 60;
var currentTime = timeLimit;
// var timerInterval;

function countdown() {
var timeInterval = setInterval( function () {
    timeLimit--;
    document.getElementById("timer").textContent = timeLimit;
    if (timeLimit >= 0) {
        timeLimit--;
    } else (timeLimit <= 0) {
        clearInterval(timeInterval);
    }
}, 1000)
    
}



function endQuiz() {
    qPage.classList.add("hide");
    totalScore.classList.remove("hide")
}


button.addEventListener("click", buttonClicked);
var timerEl = document.getElementById("start-button")



