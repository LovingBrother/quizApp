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

  checkAnswer(selectedOptionIndex) {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion.correctAnswer === selectedOptionIndex) {
      this.score++;
      return true;
    }
    return false;
  };

  moveNext() {
      this.currentQuestionIndex++;
  };

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = null;
  }

}

export default Quiz;
