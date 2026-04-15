document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const questionText = document.getElementById('question-text');
    const hintText = document.getElementById('hint-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const qNumber = document.getElementById('question-number');
    const timerDisplay = document.getElementById('timer');
    const finalScore = document.getElementById('final-score');
    
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 30;

    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startScreen.classList.remove('active');
        setTimeout(() => {
            startScreen.style.display = 'none';
            quizScreen.style.display = 'flex';
            quizScreen.classList.add('active');
            showQuestion();
        }, 500);
    }

    function showQuestion() {
        resetState();
        const question = questions[currentQuestionIndex];
        questionText.innerText = question.question;
        hintText.innerText = question.hint;
        qNumber.innerText = `السؤال ${currentQuestionIndex + 1}/${questions.length}`;
        
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Shuffle options and retain their original index for validation
        const shuffled = question.options.map((opt, i) => ({ text: opt, index: i }));
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        shuffled.forEach(opt => {
            const button = document.createElement('button');
            button.innerText = opt.text;
            button.classList.add('option-btn');
            button.dataset.index = opt.index; // Store original index in data attribute
            button.addEventListener('click', () => selectOption(opt.index, button));
            optionsContainer.appendChild(button);
        });

        startTimer();
    }

    function resetState() {
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        clearInterval(timer);
        timeLeft = 30;
        timerDisplay.innerText = `00:${timeLeft}`;
    }

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                nextQuestion();
            }
        }, 1000);
    }

    function selectOption(selectedIndex, button) {
        clearInterval(timer);
        const correctIndex = questions[currentQuestionIndex].answer;
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        
        buttons.forEach(btn => btn.style.pointerEvents = 'none');

        if (selectedIndex === correctIndex) {
            button.classList.add('correct');
            score++;
        } else {
            button.classList.add('wrong');
            // Find the correct button accurately by original index
            buttons.forEach(btn => {
                if (parseInt(btn.dataset.index) === correctIndex) {
                    btn.classList.add('correct');
                }
            });
        }

        setTimeout(() => {
            nextQuestion();
        }, 1500);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizScreen.classList.remove('active');
        progressBar.style.width = `100%`;
        setTimeout(() => {
            quizScreen.style.display = 'none';
            resultScreen.style.display = 'flex';
            resultScreen.classList.add('active');
            finalScore.innerText = score;
            
            const message = document.getElementById('result-message');
            if (score > 7) {
                message.innerText = "ممتاز! أنت عالم حقيقي بتاريخ الجزائر.";
            } else if (score > 4) {
                message.innerText = "عمل جيد! لديك معرفة جيدة بيوم العلم.";
            } else {
                message.innerText = "واصل التعلم! تاريخ الجزائر غني وبانتظارك.";
            }
        }, 500);
    }
});
