// VARIABLES
var startBtnEl = document.getElementById("startBtn");


// FUNCTIONS
function quizTimer() {
    var timer = 300;
    var timerInt = setInterval(function() {
        var timerEl = document.getElementById("timer");
        timerEl.textContent = timer;
        timer--;
        if (timer < 0) {
            clearInterval(timerInt);
            alert("You are out of time!");
        }
    }, 1000);
    firstQuestion();
    startBtnEl.remove();
}

function firstQuestion() {
    document.querySelector(".textPrimary").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
    document.querySelector(".textSecondary").innerHTML = "";

    // Take array of answers and make buttons
    var firstQuestionAnswers = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
    var answerButtonsEl = document.querySelector(".answerButtons");
    var getButtonList = function(items){
        var html = '<ul>';
        for(var item in items){
            html += '<li><button>' + items[item] + '</button></li>';
        }
        html += '</ul>';
        return html;
    };
    answerButtonsEl.innerHTML = getButtonList( firstQuestionAnswers );
    answerButtonsEl.setAttribute("style", "color: red; font-size: 30px; list-style: none;");
    }







//     document.getElementById("answer1").innerHTML = "1. Javascript";
//     document.getElementById("answer2").innerHTML = "2. terminal/bash";
//     document.getElementById("answer3").innerHTML = "3. for loops";
//     document.getElementById("answer4").innerHTML = "4. console.log";
// }





// EVENT LISTENERS
startBtnEl.addEventListener("click", quizTimer);