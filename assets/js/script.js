/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/


const startBtn = document.getElementById('start')

startBtn.addEventListener('click', startQuiz)


const questions = [
    {
        question: "What does CSS stand for?"
        answers:[
            {text: "Cascsding Style Sheet", correct: true},
            {text: "Can Sometimes Style", correct: false},
            {text: "Cascading Side Sheet", correct: false},
            {text: "Create Some Styles", correct: false}
        ]
    }
    {
        question: "Complete the sentence. n\ JavaScript porvides __________."
        answers: [
            {text:"structure", correct: false},
            {text:"styling", correct: false},
            {text:"functionality", correct: true},
            {text:"none of the above", correct: false}
        ]
    }
    {
        question: "What does the operator '===' mean?"
        answer: [
            {text:"not equal to" , correct: false },
            {text:"absolutley equal to" , correct: true },
            {text:"partialiy equal to" , correct: false },
            {text:"none of the above" , correct: false },
        ]
    }
    {
        question: ""
        answer: [
            {text: "" , correct: false},
            {text: "" , correct: false},
            {text: "" , correct: false},
            {text: "" , correct: false}
        ]
    }
    {
        question: ""
        answer: [
            {text: "" , correct: false},
            {text: "" , correct: false},
            {text: "" , correct: false},
            {text: "" , correct: false}
        ]
    }

]

//Start quiz
function startQuiz() {
    console.log('started');
    startBtn.classList.add('hide');

}

//Start timer
function timer(){

}

// Questions
function nxtQuestion() {

}

//Answers
function selectAnswer() {

}

//Game Over

function gameOver(){

}
