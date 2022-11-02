/**
 * Introduces username input event listener.
 * Adds validation to username input field. 
 */

let usernameForm = document.getElementById("username-form");
let usernameButton = document.getElementById("username-submit");

usernameButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameForm.username.value;
    let errorMsg = document.getElementById("error-msg");
    let specialChar = /^[a-zA-Z0-9_]{3,10}$/;
    if (username == null || username == "") {
        errorMsg.classList.remove('hide');
        errorMsg.innerHTML = "Please enter your name!!";
    } else if (!specialChar.test(username)) {
        errorMsg.classList.remove('hide');
        errorMsg.innerHTML = "Enter only alphanumeric characters (3-10 characters long)!";
    } else {
        errorMsg.classList.remove('hide');
        errorMsg.style.color = "green";
        errorMsg.innerHTML = "Hey " + username + " ! Welcome to the Quiz!!";
        buttonStart.classList.remove('hide');
    }
});

/**
 * Defines "Let's Begin" button click event.
 * Function to load questions into the "quiz-box" section.
 */

let buttonStart = document.getElementById("btn-start");
let quizBox = document.getElementById('quiz-box');
let landingSection = document.getElementById('landing');

buttonStart.addEventListener('click', letsBegin);

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
];

/**
 * Loads questions in the quiz-box.
 */

let questionNumber = document.getElementById("q-number");
let optionAll = document.getElementsByClassName('option');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let i = 0;

function loadQuestion() {
    for (let a = 0; a < optionAll.length; a++)
        question.innerHTML = (i + 1) + '.' + '     ' + questionList[i].question;
    option0.innerHTML = questionList[i].option[0];
    option1.innerHTML = questionList[i].option[1];
    option2.innerHTML = questionList[i].option[2];
    option3.innerHTML = questionList[i].option[3];

    questionNumber.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionList.length;
}

/**
 * Function to select answers and calculate scores.
 * Sets conditions for the buttons.
 */
let liveScore = document.getElementById("live-score");
let scoreValue = document.getElementById('score');
let score = document.getElementById('score');
let scoreTitle = document.getElementById('score-title');
let nextbtn = document.getElementById("btn-next");
scoreValue = 0;

function scoreCalc(e) {
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;

    let username = usernameForm.username.value;
    scoreTitle.innerText = "Kudos" + " " + username + "!! Your score is:";

    if (e.innerHTML === questionList[i].answer && scoreValue < questionList.length) {
        document.getElementById(e.id).style.background = 'green';

        document.getElementById("live-score").innerText = ++scoreValue;
        liveScore.innerHTML = "score:" + scoreValue + '/' + questionList.length;
        score.innerHTML = scoreValue + '/' + questionList.length;

    } else {
        document.getElementById(e.id).style.background = 'red';
        liveScore.innerHTML = "score:" + scoreValue + '/' + questionList.length;
        score.innerHTML = scoreValue + '/' + questionList.length;

        let options = document.getElementById("options");
        let correctChild = Array.from(options.children).find(child => child.innerText === questionList[i].answer);
        correctChild.firstChild.style.background = 'green';
    }
}

/**
 * Function to change the questions and update the next question in the quiz-box.
 */

let result = document.getElementById('result');
let resultArea = document.getElementById('result-area');

function nextQuestion() {
    option0.disabled = false; // buttons for selection are enabled so that the user can make a choice.
    option0.style.background = 'lightblue'; // buttons are reset to the original colour, so that the changes made do not carry over.
    option1.disabled = false;
    option1.style.background = 'lightblue';
    option2.disabled = false;
    option2.style.background = 'lightblue';
    option3.disabled = false;
    option3.style.background = 'lightblue';

    if (i < questionList.length - 1) {
        i = i + 1;
        loadQuestion();
    } else {
        quizBox.style.display = 'none';
        result.classList.remove('hide'); // if the loop reaches the last question, upon clicking Next button, result area is made visible.
        resultArea.style.display = 'block';
    }
}

nextbtn.addEventListener("click", function () {
    nextQuestion();
});

/**
 * Function for rating by the user.
 */
let stars = document.querySelectorAll(".star");
let userChoice = document.querySelector(".choice");

stars.forEach((star, i) => {
    star.onclick = function () {
        let selection = i + 1;
        userChoice.innerText = `${selection} of 5`;

        stars.forEach((star, j) => {
            if (selection >= j + 1) {
                star.innerHTML = "&#9733";
            } else {
                star.innerHTML = "&#9734";
            }
        });
    };
});

/**
 * When user clicks the "back to quiz" button, full game is reset and user lands on the landing section.
 */
let returnToQuiz = document.getElementById('back-to-quiz');

returnToQuiz.addEventListener('click', function (e) {
    location.reload();
});