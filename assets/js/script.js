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
    // firstQuestion();
    firstQuestion();
    startBtnEl.remove();
}

// function firstQuestion() {
//     document.querySelector(".textPrimary").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
//     document.querySelector(".textSecondary").innerHTML = "";

//     // Take array of answers and make buttons
//     var firstQuestionAnswers = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];
//     var answerButtonsEl = document.querySelector(".answerButtons");
//     var getButtonList = function(items){
//         var html = '<ul>';
//         for(var item in items){
//             html += '<li><button>' + items[item] + '</button></li>';
//         }
//         html += '</ul>';
//         return html;
//     };
//     answerButtonsEl.innerHTML = getButtonList( firstQuestionAnswers );
//     answerButtonsEl.setAttribute("style", "color: red; font-size: 30px; list-style: none;");
//     }


    var firstQuestion = function() {
        document.querySelector(".textPrimary").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
        document.querySelector(".textSecondary").innerHTML = "";

        let firstQuestionAnswers = [
            '1. JavaScript',
            '2. terminal/bash',
            '3. for loops',
            '4. console.log'
        ],
        ul = document.createElement('ul');
        li = document.createElement('li');
        ul.setAttribute("style", "list-style: none;");
        ul.appendChild(li);
        li.setAttribute("style", "list-style: none;");
    document.getElementById('quizPrimary').appendChild(ul);
    
    firstQuestionAnswers.forEach(function (firstQuestionAnswers) {
        let button = document.createElement('button');
        li.appendChild(button);
        button.setAttribute("style", "background-color: var(--secondary-color); color: var(--primary-color); border-radius: 10px; border: hiddin; height: 40px; width: 100px; font-size: 14px;")
        button.innerHTML += firstQuestionAnswers;
    });

    }




// EVENT LISTENERS
startBtnEl.addEventListener("click", quizTimer);