// QUIZ QUESTIONS


var questions = [
    {
        question: "How do you define a function?",
        answers: [
            {text: "function() {}", correct: true},
            {text: "function.log", correct: false},
            {text: "function['x', 'y']", correct: false},
            {text: "none of the above", correct: false}
        ]
    },
    {
        question: "Complete the sentence. n\ JavaScript porvides __________.",
        answers: [
            {text:"structure", correct: false},
            {text:"styling", correct: false},
            {text:"functionality", correct: true},
            {text:"none of the above", correct: false}
        ]
    },
    {
        question: "What does the operator '===' mean?",
        answers: [
            {text:"not equal to" , correct: false },
            {text:"absolutley equal to" , correct: true },
            {text:"partialiy equal to" , correct: false },
            {text:"none of the above" , correct: false },
        ]
    },
    {
        question: "If a variable is global..",
        answers: [
            {text: "it can be used by anyone, anywhere." , correct: false},
            {text: "it can never be used." , correct: false},
            {text: "it can only be used inside a specified function." , correct: false},
            {text: "it can be used on any function within the file." , correct: true}
        ]
    },
    {
        question: "'string' is an example of:",
        answers: [
            {text: "An array." , correct: false},
            {text: "A variable." , correct: false},
            {text: "A data type." , correct: true},
            {text: "A method." , correct: false}
        ]
    }
];

//var initialsInput = document.getElementById(("initials").value);
//var initialsValue = localStorage.setItem("initialsInput", initialsInput);
//var initialsOutput = localStorage.getItem("initialsInput", initialsInput);
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var answerBtn = document.getElementById("answer-choices");
var nextBtn = document.getElementById("nextBtn");
var timerP = document.getElementById('timer')
var timer = 0;




let currentQuestionIndex = 0;
let score = 0;
var timeInterval


function storeInitials(){
var initialsInput = document.getElementById(("initials").value);
var initialsValue = localStorage.setItem("initialsInput", initialsInput);
var initialsOutput = localStorage.getItem("initialsInput", initialsInput);
}




// GIVEN I am taking a code quiz
//WHEN I click the start button




function startTimer(){
   timer = 20
    timeInterval = setInterval( function(){
        timer--
        timerP.textContent = timer + " seconds left" 
        if (timer <= 0) {
            clearInterval(timeInterval)
            alert("Time's up, better luck next time!")
            showScore()
        }
    }, 1000) 
}







startBtn.addEventListener("click", function(event){
    var welcome = document.getElementById("welcome")
    var quizCont = document.getElementById("quiz")
    welcome.style.display = "none";
    quizCont.style.display ="block";
   
    startQuiz();
   
   
})




function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next >"
    showQuestion();  
    startTimer(); 
    
   
}





function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ") " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML =answer.text;   
        button.classList.add("ansBtn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

}
    
    
    //THEN a timer starts and I am presented with a question
    //WHEN I answer a question
    //THEN I am presented with another question
    //WHEN I answer a question incorrectly
    //THEN time is subtracted from the clock   



function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);

    }
}

function selectAnswer(event){
    var selectBtn = event.target;
    var isCorrect = selectBtn.dataset.correct === "true";
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
        }
        else {
            timer -= 5;
            selectBtn.classList.add("wrong");

           

        }
        Array.from(answerBtn.children).forEach(button => {
            if (button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextBtn.style.display = "block";
    
}


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score     <-------------------------------- TO DO


function showScore(){
    resetState();
    clearInterval(timeInterval);
    var storedInitials = localStorage.getItem("initials")
    questionEl.innerHTML = storedInitials + " you scored: " + score + " .";   
    nextBtn.innerHTML = "Try Again";
    nextBtn.style.display = "block"  
    localStorage.setItem("score", score);


  
}

function handleNextBtn(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length && timer > 0){
    showQuestion()
}else {
    showScore();
}
}

function handleTryAgain() {

}

nextBtn.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    } else 
    startQuiz();
})

//startQuiz();

