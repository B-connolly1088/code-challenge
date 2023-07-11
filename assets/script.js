var startPage = document.querySelector("#start-page")//declaring a variable of startPage which is equal to the dom traverse of the document to be applied to the html element with the start-page id
var button = document.querySelector("#start-button")//declares a global variable = to the value of the dom traversal through the document to the html element with id start-button
var totalScore = document.querySelector("#total-score")//declares a variable = to the value of the location of a do traverse through the document to the html element with the id of total-score
var qPage = document.querySelector("#q-page")//declares variable = to the value of the dom traverse through the document to the html element with the id of q-page
var timerEl = document.querySelector(".timer")//declares variable = to the dom traverse through the document to the html element carrying the timer class
var timeLimit = 60;
var timerInterval;


var questions = [//declaring a variable = to the array of questions, choices and answers, each subsequent question, choice and answer is found in its own object
    {
        question: "What is a method?",
        choices: ["Actions that can be performed on objects.", "Actions that are performed on HTML.", "An element in JS."],//question object 1
        answer: 0
    },
    {
        question: "What is a function responsible for in JS",
        choices: ["Allows us to encapsulate a block of code to be reused.", "The basis of JS.", "Not used in JS."],//question object 2
        answer: 0
    },
    {
        question: "What are event listeners in JS?",
        choices: ["A way to wait for user interaction and then execute code upon event.", "How you load JS into your page.", "The last element used in building JS code."],//question object 3
        answer: 0
    },
]

var currentQ = 0;//global variable that is equal to 0, will be used for iteration through the questions array
var currentQuestion;

//buttonClicked function declaration
function buttonClicked(event) {
    event.preventDefault();//upon click event this preventDefault function call prevents the default behavior of refresh
    startPage.classList.add("hide");//targets the start-page id html element, classList allows the use of the add method to add the class of hide to the startPage html element
    qPage.classList.remove("hide");//targets the qPage variable which has a value of the html element with id q-Page
    countdown();//calls countdown function
    questionSelect();//calls questionSelect function
}

function questionSelect() {
    currentQuestion = questions[currentQ] //declaring locally scoped variable of q with a value of first index in questions array
    console.log(currentQuestion);//displays question
    var h2 = document.querySelector("#quest");//declares locally scoped variable h2 and sets value to the dom traverse through the document to find the html element with an id of quest
    h2.textContent = currentQuestion.question//targeting the h2 variable to add text content to the html element with id quest containing the value of the current question
    for (var i = 0; i < currentQuestion.choices.length; i++) {//for loop for iteration through choices length
        var btn = document.getElementById(i)//declares local variable = to the dom traverse through the document 
        btn.textContent = currentQuestion.choices[i]//adding text content to the dynamically created button displaying the choices
        btn.addEventListener("click", answerSelect)//adding an event listener to the dynamically created buttons to listen for a click while also passing argument calling answerSelect function
    }
}

function answerSelect(event) {//after click event answer select is called, this declaration defines the anserSelect function
    event.preventDefault();//prevents default behavior of refreshing
    var userInput = event.target.id//creates local variable = to
    console.log(userInput);
    // var currentQuestion = questions[currentQ];
    if (parseInt(userInput) !== currentQuestion.answer) {
        timeLimit -= 10;
        timerEl.textContent = "Time: " + timeLimit;
    }
    currentQ++;
    if (currentQ < questions.length) {
        questionSelect();
    } else {
        endQuiz();
}
    

}

function submitUser(user) {
    var highScores = localStorage.getItem("userScores") ? JSON.parse(localStorage.getItem("userScores")): [];
    highScores.push({
        initials: user,
        score: timeLimit,
    })
    localStorage.setItem("userScores", JSON.stringify(highScores));
}


function countdown() {
    timerInterval = setInterval(function() { //defining an interval, in charge of decreasing time
        timeLimit--;  //decreases time limit by 1
        timerEl.textContent = "Time: " + timeLimit;
        if (timeLimit === 0) {
            endQuiz();
        } 
    }, 1000);//second argument of
    
}

function answerVerify(event) {
    timerInterval = setInterval(function() {
        var userChoice = event.target.id
        if (parseInt(userChoice) != currentQuestion.answer) {
            timeLimit--;
        }
    },);
}





function endQuiz() {
    clearInterval(timerInterval);
    qPage.classList.add("hide");
    totalScore.classList.remove("hide")
}


button.addEventListener("click", buttonClicked);
document.getElementById("submit").addEventListener("click", (event) => {
    var userInput = document.getElementById("initials").value
    submitUser(userInput);
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    document.getElementById("hsPage").dispatchEvent(clickEvent);
})




