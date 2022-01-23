// vars for main Document Object Model or DOM elements
var timekeeper = document.querySelector("nav");
var startbutton = document.querySelector("#button");
var questionsEl = document.querySelector["#questions"];
var answersEl = document.querySelector["#answers"];
var timeLeft = 5;

// quiz vars
var currentQuestionIndex = 0;
var time = questionsEl.length * 15;
var timerId;

startbutton.addEventListener('click', quizstart); 
    

// runs the quiz
function quizstart() {
        countdown();
        questiontime();
    }
       
// timer function
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + ' seconds remaining';
            timeLeft -- ;
        } else if (timeLeft ===1) {
            timekeeper.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timekeeper.textContent = 'GAME OVER';
            clearInterval(timeInterval);
            window.alert("GAME OVER");
        }
    }, 1000);
}

// question function. Click answer to either generate a new question or if it is the last question, end quiz.
function questiontime() {
    // check for correct answer
    if (this.value !== questionsEl[currentQuestionIndex].answer) {
        // time penalty
        time -= 15;
    if (time < 0) {
        time = 0;
        }
    }

    // display new time on page
    timeLeft.textContent = time;




}
  

// game end
    // save initials 
    // save score
    // show scores
    // high scores record
