class Quiz {

    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)

    constructor(questions, timeLimit, timeRemaining)
     {  
        this.questions = questions; 
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0; 
    }


    // 2. getQuestion()

    getQuestion() {
        return this.questions[this.currentQuestionIndex];

    }
    
    // 3. moveToNextQuestion()

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    // 4. shuffleQuestions()

    shuffleQuestions() {
        let currentIndex = this.questions.length;
        while(currentIndex != 0){
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            var temp = this.questions[currentIndex];
            this.questions[currentIndex]= this.questions[randomIndex];
            this.questions[randomIndex] = temp;
        }
   
    }


    // 5. checkAnswer(answer)

    checkAnswer(answer){
        let currentQuestion = this.getQuestion();
        if (currentQuestion.answer == answer){
            this.correctAnswers++;
        }            

        }   

    hasEnded() {
        if(this.currentQuestionIndex < this.questions.length){
            return false;
        }
        else{
            return true;
        }
    }
    

    }

    
