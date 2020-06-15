// VARIABLES
var startBtnEl = document.getElementById("start-btn");
var textPrimaryEl = document.querySelector(".textPrimary");
var textSecondaryEl = document.querySelector(".textSecondary");
var questionContainerEl = document.getElementById("question-container");
var questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: '1. JavaScript', correct: false },
            { text: '2. terminal/bash', correct: false },
            { text: '3. for loops', correct: false },
            { text: '4. console.log', correct: true }
        ]
    },
    {
        question: 'Commonly used datatypes do not include:',
        answers: [
            { text: '1. strings', correct: false },
            { text: '2. booleans', correct: false },
            { text: '3. alerts', correct: true },
            { text: '4. numbers', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        answers: [
            { text: '1. numbers and strings', correct: false },
            { text: '2. other arrays', correct: false },
            { text: '3. booleans', correct: false },
            { text: '4. all of the above', correct: true }
        ]
    },
    {
        question: 'The condition of an if/else statement must be enclosed in:',
        answers: [
            { text: '1. quotes', correct: false },
            { text: '2. curly brackets', correct: true },
            { text: '3. parenthesis', correct: false },
            { text: '4. square brackets', correct: false }
        ]
    },
    {
        question: 'String values must be enclosed within _________ when being assigned to variables:',
        answers: [
            { text: '1. commas', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. quotes', correct: true },
            { text: '4. parenthesis', correct: false }
        ]
    }
]
var timerEl = document.getElementById("timer");
var randomOrder
var questionIndex
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var score = 0;
var initialsButton = document.createElement("button");
var initialsBlank = document.createElement('input');
var username = document.getElementById("initials-blank").value;
var timer = 300;
var startingScore = score;
var allDoneText = document.createElement("h2");
var h2 = document.getElementById("h2");
var scoreText = document.createElement("h3");
var h3 = document.getElementById("h3");
var blank = document.getElementById("initials-blank");
var button = document.getElementById("initials-btn");
var initialsText = document.createElement("label");
var label = document.getElementById("initials-label");
var h2Hs = document.createElement("h2");
var h2HighScore = document.getElementById("h2-hs");
var h3HighScore = document.getElementById("h3-hs");
var h3Hs = document.createElement("h3");
var h2Hs = document.createElement("h2");
var buttonHsGoBack = document.createElement("go-back");
var buttonHsClearScores = document.createElement("clear-scores");
var storedScore = localStorage.getItem('score');
var btnGoBack = document.createElement("go-back")
var btnClearHs = document.createElement("clear-scores")



// FUNCTIONS
function startQuiz() {
    
    var timerInt = setInterval(function() {
        var timerEl = document.getElementById("timer");
        timerEl.textContent = timer;
        timer--;
        if (timer < 0) {
            clearInterval(timerInt);
            alert("You are out of time!");
        }
    }, 1000);
    // firstQuestion();
    startBtnEl.classList.add('hide');
    textPrimaryEl.classList.add('hide');
    textSecondaryEl.classList.add('hide');
    randomOrder = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    questionContainerEl.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    reset()
    showQuestion(randomOrder[questionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", pickAnswer);
        answerButtonsEl.appendChild(button);
    })
}

function reset () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function pickAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct) {
        score++;
    } else {
        timer = timer - 10;
        timerEl.textContent = timer;
    }
    if (randomOrder.length > questionIndex + 1) {
        questionIndex++
        nextQuestion()
    } else {
        allDone();
        // alert('You scored ' + ((score/5) *100) + '%');
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function allDone() {
    answerButtonsEl.classList.add("hide");
    question.classList.add("hide");
    
    allDoneText.textContent = "All Done!";
    h2.appendChild(allDoneText);
    
    scoreText.textContent = 'Your final score is ' + ((score/5) *100) + '%.';
    h3.appendChild(scoreText);

    blank.appendChild(initialsBlank);
    initialsBlank.setAttribute("style", "display: inline-block;")
    blank.classList.remove("hide");

    button.appendChild(initialsButton);
    initialsButton.textContent = "Submit";
    initialsButton.setAttribute("style", "float: right;")

    label.appendChild(initialsText);
    initialsText.textContent = "Enter Intials:";
}

function pushHighScores() {
    if (localStorage.length === 0) {
    localStorage.setItem('username', blank.value);
    localStorage.setItem('score', score);      
    } else if (score > startingScore) {
        alert('new high score of ' + score/5*100 + '!');
        localStorage.setItem('username', blank.value);
        localStorage.setItem('score', score);
    } else {
        alert('you need to do better!!');
    }
    highScores();
}
    
function highScores() {
    // hide components from previous screen
    h2.classList.add("hide");
    h3.classList.add("hide");
    blank.classList.add("hide");
    button.classList.add("hide");
    label.classList.add("hide");
    // add dynamic elements
    h2Hs.textContent = "High Scores";
    h2HighScore.appendChild(h2Hs);
    h3Hs.textContent = JSON.stringify(localStorage.getItem('username')) + ' - ' + storedScore/5*100 + '%';
    h3HighScore.appendChild(h3Hs);
    buttonHsGoBack.textContent = "Go Back";
    btnGoBack.appendChild(buttonHsGoBack);
}

function highScoresFromMain() {
    event.preventDefault();
      // hide components from previous screen
      startBtnEl.classList.add('hide');
      textPrimaryEl.classList.add('hide');
      textSecondaryEl.classList.add('hide');
      h2.classList.add("hide");
      h3.classList.add("hide");
      blank.classList.add("hide");
      button.classList.add("hide");
      label.classList.add("hide");
      // add dynamic elements
      h2Hs.textContent = "High Scores";
      h2HighScore.appendChild(h2Hs);
      h3Hs.textContent = JSON.stringify(localStorage.getItem('username')) + ' - ' + storedScore/5*100 + '%';
      h3HighScore.appendChild(h3Hs);
      buttonHsGoBack.textContent = "Go Back";
      btnGoBack.appendChild(buttonHsGoBack);  
}




// EVENT LISTENERS
startBtnEl.addEventListener("click", startQuiz);
initialsButton.addEventListener("click", pushHighScores);