class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer = null;
    }

    // Get current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    };

//   checkAnswer(selectedOption) {
//     const currentQuestion = this.getCurrentQuestion();
//     if (currentQuestion.correct === selectedOption) {
//       this.score++;
//       return true;
//     }
//     return false;
//   }

//   moveNext() {
//     this.currentQuestionIndex++;
//   }
}

export default Quiz;
