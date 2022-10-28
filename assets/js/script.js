/**
 * Introduce username input event listener.
 * Add validation to username input 
 */

let usernameForm = document.getElementById("username-form");
let usernameButton = document.getElementById("username-submit");

usernameButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameForm.username.value;
    var usernameValue = /^[A-Za-z]+$/;

    if (username == null || username == "") {
        alert("Please enter your name!!")
        throw ("I am sorry! You cannot proceed!");
    } else if (username.length < 3) {
        alert("Username must be atleast 3 characters long, Please Try Again!");
    } else {
        alert( "Hey " + username+ " ! Welcome to the Quiz!!");
        buttonStart.classList.remove('hide');
    }
})

/**
 * Defines "Let's Begin Button click event"
 */

let buttonStart = document.getElementById("btn-start");
let quizBox = document.getElementById('quiz-box');
let landingSection = document.getElementById('landing');

buttonStart.addEventListener('click', letsBegin)

function letsBegin() {
    landingSection.style.display = 'none';
    quizBox.style.display = 'block';
    loadQuestion();
}

//Questions list for quiz-box (arrays)

let question = document.getElementById('question');

let questionList = [{
        question: 'Diamond is made of which element?',
        option: ['Alloy of phosphorus and carbon', 'Carbon and phosphorus', 'Phosphorous', 'Carbon'],
        answer: 'Carbon'
    },
    {
        question: 'What makes over 99% of the matter in the universe?',
        option: ['Helium and Hydrogen', 'Nitrogen and Hydrogen', 'Oxygen and Nitrogen', 'Oxygen and Hydrogen'],
        answer: 'Helium and Hydrogen'
    },
    {
        question: 'What is ozone layer made of?',
        option: ['Dioxygen', 'Trioxygen', 'Oxygen and Hydrogen', 'Methane gas'],
        answer: 'Trioxygen'
    },
    {
        question: 'Which gas cannot freeze at atmospheric pressure?',
        option: ['Nitrogen', 'Oxygen', 'Helium', 'Argon'],
        answer: 'Helium'
    },
    {
        question: 'What happens to the volume of water upon freezing?',
        option: ['decreases', 'increases', 'Remains same', 'Increases then decreases'],
        answer: 'increases'
    },
]

/**
 * Loads and updates questions in the quiz-box
 */


let questionArea = document.getElementById('question-area')
let spanAll = document.querySelectorAll('span');
console.log(spanAll)

let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let i = 0;

function loadQuestion() {
    for (let a = 0; a < spanAll.length; a++) {
        spanAll[a];
    }
    question.innerHTML = (i + 1) + '.' + '     ' + questionList[i].question;
    option0.innerHTML = questionList[i].option[0];
    option1.innerHTML = questionList[i].option[1];
    option2.innerHTML = questionList[i].option[2];
    option3.innerHTML = questionList[i].option[3];
}

/**
 * Function to change the questions and display the next
 */

let buttonNext = document.getElementById('btn-next');
let resultArea = document.getElementById('result-area');
let score = document.getElementById('score');

function nextQuestion() {
    if (i < questionList.length - 1) {
        i = i + 1;
        loadQuestion();   
    } else {
        quizBox.style.display = 'none';
        score.innerHTML = score + '/' + questionList.length;
        result.classList.remove('hide');
        resultArea.style.display = 'block';
    }
}



/**
 * Function to check answers and calculate scores
 */

function scoreCalc(event) {
    if (event.innerHTML === questionList[i].answer) {
        score = score + 1;
        document.getElementById(event.id).style.background = 'green';
    } else {
        document.getElementById(event.id).style.background = 'red';
    }
}