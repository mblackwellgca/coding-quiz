
// main vars
var timekeeper = document.querySelector("nav");
var startbutton = document.querySelector("#button");
var questionsEl = document.querySelector["#questions"];
var answersEl = document.querySelector["#answers"];
var timeLeft = 5;


// button
startbutton.addEventListener("click", quizstart);


// runs the quiz
function quizstart() {
    countdown();
    // add timer start function
    // add question function
    // add game end
    
    
}

// timer function
function countdown(){
    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + ' seconds remaining';
            timeLeft -- ;
        } else {
            timekeeper.textContent = 'GAME OVER';
            clearInterval(timeInterval);
            window.alert("GAME OVER");
        }
    },1000);
}
    //xx amount of time
    //subtract 5 seconds for wrong answers
    //end of timer and quiz alert

// question function
    // 5 questions
    // auto move to next question
    // record answers
    // end quiz alert
    // high scores
    // alert correct/incorrect

// game end
    // save initials 
    // save score
    // show scores
    // high scores record
