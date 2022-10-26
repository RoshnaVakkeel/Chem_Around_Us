/**
 * Introduce username input event listener.
 * Add validation to username input 
 */

let usernameForm = document.getElementById("username-form");
let usernameButton = document.getElementById("username-submit");

usernameButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameForm.username.value;

    if (username == null || username == "") {
        alert("Please enter your Username!");
    } else if (username.length < 3) {
        alert("Username must be atleast 3 charactrs long, Please Try Again!");
    } else {
        alert("Your name is saved!!");
    }
})
console.log(username);

//Questions list for quiz-box (arrays)

let question = document.getElementById('question');

let questionList = [{
        question: 'What makes over 99% of the matter in the universe?',
        option: ['Helium and Hydrogen', 'Nitrogen and Hydrogen', 'Oxygen and Nitrogen', 'Oxygen and Hydrogen'],
        answer: 'Helium and Hydrogen'
    },
    {
        question: 'What is ozone layer made of?',
        option: ['Dioxygen', 'Trioxygen', 'Oxygen and Hydrogen', 'Methane gas'],
        answer: 'Trioxygen'
    },
]


/**
 * Loads and updates questions in the quiz-box
 */

let quizBox = document.getElementById('quiz-box');
let questionArea = document.getElementById ('question-area')
let spanAll = document.querySelectorAll('span');
console.log (spanAll)

let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let i = 0;

function loadQuestion() {
    for (var a=0; a<spanAll.length; a++) {
        spanAll[a];
    }
    question.innerHTML = (i + 1) + '.'+'     '+ questionList[i].question;
    option0.innerHTML = questionList[i].option[0];
    option1.innerHTML = questionList[i].option[1];
    option2.innerHTML = questionList[i].option[2];
    option3.innerHTML = questionList[i].option[3];
}

/**
 * Submit button activation to change the questions
 */
