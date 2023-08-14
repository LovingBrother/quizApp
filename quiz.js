// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = null;
}

// Get the current question
Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentQuestionIndex];
};

// Display the question and options
function displayQuestion(quiz) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    const timerElement = document.getElementById('timer');

    feedbackElement.textContent = '';
    nextButton.style.display = 'none';

    clearInterval(quiz.timer);

    const currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = `Question ${quiz.currentQuestionIndex + 1}: ${currentQuestion.questionText}`;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => {
            checkAnswer(quiz, index);
        });
        optionsElement.appendChild(optionButton);
    });

    let timeLeft = 30; // 30 seconds for each question
    timerElement.textContent = `Time left: ${timeLeft}s`;

    quiz.timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(quiz.timer);
            checkAnswer(quiz, null); // Move to the next question
        }
    }, 1000); // Update timer every second
}

// Check the user's answer and provide feedback
function checkAnswer(quiz, selectedOptionIndex) {
    const feedbackElement = document.getElementById('feedback');
    const optionsElement = document.getElementById('options');
    const currentQuestion = quiz.getCurrentQuestion();
    const correctOptionIndex = currentQuestion.correctAnswer;

    clearInterval(quiz.timer);

    if (selectedOptionIndex === correctOptionIndex) {
        feedbackElement.textContent = 'Correct!';
        optionsElement.children[selectedOptionIndex].style.backgroundColor = '#4CAF50';
        quiz.score++;
    } else {
        feedbackElement.textContent = 'Incorrect.';
        if (selectedOptionIndex !== null) {
            optionsElement.children[selectedOptionIndex].style.backgroundColor = '#FF5733';
        }
        optionsElement.children[correctOptionIndex].style.backgroundColor = '#4CAF50';
    }

    setTimeout(() => {
        feedbackElement.textContent = '';
        optionsElement.innerHTML = '';
        quiz.currentQuestionIndex++;
        if (quiz.currentQuestionIndex < quiz.questions.length) {
            displayQuestion(quiz);
        } else {
            displayFinalScore(quiz);
        }
    }, 1500); // Display feedback for 1.5 seconds
}

// Sample questions
const sampleQuestions = [
    {
        questionText: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 0
    },
    {
        questionText: 'Which planet is known as the "Red Planet"?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1
    },
    {
        questionText: 'What is the largest ocean on Earth?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        correctAnswer: 0
    },
    {
        questionText: 'Which gas do plants primarily use for photosynthesis?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 1
    },
    {
        questionText: 'Which planet is known as the "Blue Planet"?',
        options: ['Venus', 'Mars', 'Earth', 'Saturn'],
        correctAnswer: 2
    },
    // Add more sample questions
];

const quiz = new Quiz(sampleQuestions);
displayQuestion(quiz);

// Display the final quiz score
function displayFinalScore(quiz) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    const timerElement = document.getElementById('timer');

    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    feedbackElement.textContent = `Your Score: ${quiz.score} out of ${quiz.questions.length}`;
    nextButton.style.display = 'none';
    timerElement.textContent = '';

    // Create a restart button
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Quiz';
    restartButton.addEventListener('click', () => {
        quiz.currentQuestionIndex = 0;
        quiz.score = 0;
        displayQuestion(quiz);
    });

    // Append the restart button
    optionsElement.appendChild(restartButton);

    nextButton.style.display = 'none';
    timerElement.textContent = '';
}
