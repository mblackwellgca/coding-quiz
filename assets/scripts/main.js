// vars for main Document Object Model or DOM elements
var timekeeper = document.getElementById('timekeeper');
const startButton = document.getElementById('startButton');
var timeLeft = 100;
const questionContainerElement = document.getElementById ('questionBox');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answerButton');
const highScore = document.getElementById('userScore');
var initials = document.getElementById('initials');
const submit = document.getElementById('submit');
let timeInterval;
let shuffledQuestions, currentQuestionIndex;
let score = document.getElementById('score');

// button
startButton.addEventListener('click', quizstart); 
    

// runs the quiz
function quizstart() {
        countdown();
        startButton.classList.add('hide');
        questionContainerElement.classList.remove('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        setNextQuestion();
 }
       
// timer function
function countdown() {
    timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timekeeper.textContent = timeLeft + ' seconds remaining';
            timeLeft -- ;
        } else if (timeLeft ===1) {
            timekeeper.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timekeeper.textContent = 'GAME OVER';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}
// added coding to shuffle questions when retaking quiz
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//question button function
function showQuestion(question) {
    questionElement.innerText=question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

//coding to reset
function resetState() {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild);
    }
}
//when the answer is selected 
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setTimeout(setNextQuestion, 700);
    } else {
        endGame()
    }
}
//adding the correct and incorrect function
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
    element.classList.add('wrong');
    timeLeft --;
    timekeeper.textContent = timeLeft;
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
//quiz questions
const questions = [
    {
        question: 'Arrays in Javascript can be used to store __.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true}
        ]
    }, {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For loops', correct: false },
            { text: 'Console log', correct: true}
        ]
    }, {
        question: 'String values must be enclosed within___ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parenthesis', correct: false },
            { text: 'quotes', correct: true}
        ]
    }, {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false },
            { text: 'alerts', correct: true}
        ]
    }, {
        question: 'The condition in an if / else statement is enclosed within__.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly braces', correct: false },
            { text: 'square brackets', correct: false },
            { text: 'parentheses', correct: true}
        ]
    }
         
]
//to end the game
function endGame() {
    console.log (timeLeft+1);
    clearInterval(timeInterval);
    score.textContent = "Your score is " + (timeLeft) + "!";
    questionContainerElement.classList.add('hide');
    highScore.classList.remove('hide');
}

submit.addEventListener('click', function(event) {
    event.preventDefault();
    var highScore = {
        initials: initials.value.trim(),
        score: timeLeft
    };
    localStorage.setItem('initials',JSON.stringify(highScore));
    saveScore();

});
function saveScore() {
    score.textContent = "Your score has been saved!";
}
