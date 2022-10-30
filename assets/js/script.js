/**
 * Introduce username input event listener.
 * Add validation to username input 
 */

let usernameForm = document.getElementById("username-form");
let usernameButton = document.getElementById("username-submit");


usernameButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameForm.username.value;
    let errorMsg = document.getElementById ("error-msg");
    let specialChar = /^[a-zA-Z0-9_]{3,10}$/;  

    if (username == null || username == "") {
        errorMsg.classList.remove('hide');
        errorMsg.innerHTML = "Please enter your name!!"
    } else if (!specialChar.test(username)) {
        errorMsg.classList.remove('hide');
        errorMsg.innerHTML = "Only letters please!";
    } else if (username.length < 3) {
        errorMsg.classList.remove('hide');
        errorMsg.innerHTML = "Username must be atleast 3 characters long, Please Try Again!";
    } else {
        errorMsg.classList.remove('hide');
        errorMsg.style.color = "green";
        errorMsg.innerHTML = "Hey " + username+ " ! Welcome to the Quiz!!";
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
let optionAll = document.getElementsByClassName('option');

let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');

let i = 0;
function loadQuestion() {
   
    for (let a = 0; a < optionAll.length; a++) {
        optionAll[a];
    }
    question.innerHTML = (i + 1) + '.' + '     ' + questionList[i].question;
    option0.innerHTML = questionList[i].option[0];
    option1.innerHTML = questionList[i].option[1];
    option2.innerHTML = questionList[i].option[2];
    option3.innerHTML = questionList[i].option[3];
}

/**
 * Function to select answers and calculate scores
 */


function scoreCalc(e){
  console.log(option0.disabled, "<==op 0")
   option0.disabled = true;
   option1.disabled = true;
   option2.disabled = true;
   option3.disabled = true;


    if (e.innerHTML === questionList[i].answer  && scoreValue<questionList.length) {
        document.getElementById("score").innerText = ++scoreValue;
        score.innerHTML = scoreValue + '/' + questionList.length;
        
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
}

/**
 * Function to change the questions and display the next
 */

 let buttonNext = document.getElementById('btn-next');
 let resultArea = document.getElementById('result-area');
 let scoreValue = document.getElementById('score');
 scoreValue= 0;
 
 
 function nextQuestion() {
     option0.disabled = false;
     option1.disabled = false;
     option2.disabled = false;
     option3.disabled = false;
     if (i < questionList.length - 1) {
         i = i + 1;
         loadQuestion();   
     } else {
         quizBox.style.display = 'none';
         result.classList.remove('hide');
         resultArea.style.display = 'block';     
     }
 }

/**
 * When user clecks the "back to quiz" button, user lands on the landing section
 */
let returnToQuiz = document.getElementById ('back-to-quiz');

returnToQuiz.addEventListener('click', function(e){
    location.reload();
});
