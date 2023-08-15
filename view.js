import Quiz from './quiz.js';

// const startButton = document.getElementById('start-button');
// const questionContainer = document.getElementById('question-container');
// const optionButtons = document.querySelectorAll('.option');

let quiz;

// startButton.addEventListener('click', startQuiz);

// function startQuiz() {
//   // Sample questions
//   const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "London", "Berlin"],
//       correct: 0
//     },
//     // Add more questions
//   ];
//   quiz = new Quiz(questions);
//   displayQuestion(quiz);
// }

displayStartScreen()

// function displayQuestion(quiz) {
//     console.log(quiz);
//     const questionElement = document.getElementById('question');
//     const optionsElement = document.getElementById('options');
//     const feedbackElement = document.getElementById('feedback');
//     const nextButton = document.getElementById('next-btn');
//     const timerElement = document.getElementById('timer');

//     feedbackElement.textContent = '';
//     nextButton.style.display = 'none';

//     // clearInterval(quiz.timer);

//     const currentQuestion = quiz.getCurrentQuestion();
//     questionElement.textContent = `Question ${quiz.currentQuestionIndex + 1}: ${currentQuestion.questionText}`;

//     optionsElement.innerHTML = '';
//     currentQuestion.options.forEach((option, index) => {
//         const optionButton = document.createElement('button');
//         optionButton.textContent = option;
//         optionButton.addEventListener('click', () => {
//             checkAnswer(quiz, index);
//         });
//         optionsElement.appendChild(optionButton);
//     });

//     let timeLeft = 30; // 30 seconds for each question
//     timerElement.textContent = `Time left: ${timeLeft}s`;

//     quiz.timer = setInterval(() => {
//         timeLeft--;
//         timerElement.textContent = `Time left: ${timeLeft}s`;

//         if (timeLeft <= 0) {
//             clearInterval(quiz.timer);
//             checkAnswer(quiz, null); // Move to the next question
//         }
//     }, 1000); // Update timer every second
// }

function displayStartScreen() {
    const quizContainer = document.getElementById('container');
    quizContainer.innerHTML = `
        <section class="container-fluid bg-primary-subtle" style="height: 100vh;">
            <div class="container col-xl-10 col-xxl-8 px-4 py-5" style="height: 100vh;">
                <div class="row align-items-center gy-5 flex-lg-row flex-column-reverse g-lg-5 py-5">
                <div class="col-lg-7 text-center text-lg-start">
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Test Your Knowledge</h1>
                    <p class="col-lg-10 fs-4">Welcome to AfriEd Quiz!</p>
                    <p class="col-lg-10 fs-4 fw-lighter">Note: You can not change answers, go back to previous question, pause the timer, from start to finish of this quiz</p>
                    <button class="w-25 btn btn-md btn-primary" id="start-button" type="button">Start Quiz</button>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                    <img src="./assets/images/bg_image.svg" class="img-fluid anim-bounce">
                </div>
                </div>
            </div>
        </section>
    `;

    const nextButton = document.getElementById('start-button');
    nextButton.addEventListener('click', () => {
        const homeContainer = document.getElementById('container');
        homeContainer.innerHTML = '';
        // nextButton.style.display = 'none';
        displayQuestion();
    });
}

// Function to display a question and options
function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <section class="container-fluid bg-primary-subtle" style="height: 100vh;">
            <div class="container col-xl-10 col-xxl-8 px-4 py-5" style="height: 100vh;">
                <div class="row align-items-center justify-content-center gy-5 flex-lg-row flex-column-reverse g-lg-5 py-5">
                    <div class="col-lg-7 text-center text-lg-start">
                    <div class="d-block float-end">
                        <h6 class="text-danger">00:00</h6>
                    </div>
                    <div class="d-block">
                        <h6>What is the capital of France?</h6>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                    <div class="my-2 d-flex align-items-center justify-content-center">
                        <button class="w-25 btn btn-md btn-primary" id="next-button" type="button">Next >> </button>
                        <button class="w-25 btn btn-md btn-primary" id="submit-button" type="button">Submit </button>
                    </div>
                        
                    </div>
                </div>
            </div>
        </section>
    `;

    const nextButton = document.getElementById('submit-button');
    nextButton.addEventListener('click', () => {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = '';
        // nextButton.style.display = 'none';
        showTotalScore();
    });
}

function showTotalScore() {
    const quizContainer = document.getElementById('score-container');
    quizContainer.innerHTML = `
        <section class="container-fluid bg-primary-subtle" style="height: 100vh;">
            <div class="container col-xl-10 col-xxl-8 px-4 py-5" style="height: 100vh;">
                <div class="row align-items-center justify-content-center gy-5 flex-lg-row flex-column-reverse g-lg-5 py-5">
                    <div class="col-lg-7 text-center text-lg-center">
                        <div class="d-block">
                            <h4>Total Score</h4>
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="d-flex align-items-center justify-content-center border border-dark-subtle rounded-circle" style="width: 50px; height: 50px;">
                                    <h6>50</h6>
                                </div>
                            </div>
                            <button class="mt-3 w-25 btn btn-md btn-primary" id="home-button" type="button">Home </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>`;

    const nextButton = document.getElementById('home-button');
    nextButton.addEventListener('click', () => {
        const quizContainer = document.getElementById('quiz-container');
        const scoreContainer = document.getElementById('score-container');
        quizContainer.innerHTML = '';
        scoreContainer.innerHTML = '';
        // nextButton.style.display = 'none';
        displayStartScreen();
    });
}

function showQuestion() {
  const currentQuestion = quiz.getCurrentQuestion();
  questionContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>
      ${currentQuestion.options.map((option, index) => `
        <li><button class="option" data-index="${index}">${option}</button></li>
      `).join('')}
    </ul>
  `;

  optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionClick);
  });
}

function handleOptionClick(event) {
  const selectedOptionIndex = event.target.getAttribute('data-index');
  const isCorrect = quiz.checkAnswer(selectedOptionIndex);

  if (isCorrect) {
    alert('correct');
    // Show correct feedback
  } else {
    alert('not correct');
    // Show incorrect feedback
  }

  optionButtons.forEach(button => {
    button.removeEventListener('click', handleOptionClick);
  });

  setTimeout(() => {
    quiz.moveNext();
    if (quiz.currentQuestionIndex < quiz.questions.length) {
      showQuestion();
    } else {
      // Show final score
    }
  }, 2000); // Display feedback for 2 seconds
}
