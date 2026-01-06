// Global Variables
let selectedgroup = '';
let questions = [];
let currentIndex = 0;
let score = 0;
let questionLimit = '5';
let timer;
let seconds = 0;

// This handles the different states to swtich between
const states = {
    menu: document.getElementById('menu'),
    difficulty: document.getElementById('difficulty'),
    quiz: document.getElementById('quiz'),
    result: document.getElementById('result')
};

// This function shows the given state and hides the others
function switchStates(name) {
    Object.values(states).forEach(s => s.classList.remove('active'));
    states[name].classList.add('active');
}

// This function handles the group selection, updates UI and moves to difficulty state
document.querySelectorAll('.group').forEach(button => {
    button.onclick = () => {
        selectedgroup = button.dataset.group;
        document.getElementById('selectedgroup').textContent =
            selectedgroup === 'all' ? 'All Groups' : selectedgroup;

        // Moves to difficulty selection state
        switchStates('difficulty');
    };
});

// This handles the question limit selection
const questionButtons = document.querySelectorAll('.question-count-options button');

// This applies the highlighted style button based on the default question limit
questionButtons.forEach(button => {
    if (button.dataset.count === questionLimit) {
        button.classList.add('selected');
    }
});

// This applies the highlighted style button based on the question limit clicked on
questionButtons.forEach(button => {
    button.onclick = () => {
        questionLimit = button.dataset.count;

        // Updates button styles
        questionButtons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
    };
});

// This handles the back button to return to the menu
document.querySelector('.back').onclick = () => switchStates('menu');

// This handles the difficulty selection and starts the quiz
document.querySelectorAll('[data-level]').forEach(button => {
    button.onclick = async () => {
        let level = button.dataset.level;
        questions = [];

        // This grabs questions for all groups and difficulties from database
        if (selectedgroup === 'all') {
            const res = await fetch('/api/groups');
            const groups = await res.json();

            groups.forEach(group => {
                // If 'random' level is chosen, grab questions from all levels
                if (level === 'all') {
                    Object.values(group.levels).forEach(arr => questions.push(...arr));
                }
                // If a specific level is chosen, grab questions from that level
                else {
                    questions.push(...group.levels[level]);
                }
            });
        } 

        // This grabs questions for a specific group from database
        else {
            if (level === 'all') {
                const res = await fetch('/api/groups');
                const allGroups = await res.json();

                // Finds the selected group
                const group = allGroups.find(g => g.name === selectedgroup);

                // Grabs questions from all levels of the selected group
                Object.values(group.levels).forEach(arr => questions.push(...arr));
            } 
            // Grabs questions for the specific level of the selected group
            else {
                const res = await fetch(`/api/groups/${selectedgroup}/${level}`);
                questions = await res.json();
            }
        }


        // Shuffles and limits the questions based on user selection
        shuffleArray(questions);
        if (questionLimit !== 'all') {
            questions = questions.slice(0, Number(questionLimit));
        }

        // Starts the quiz
        startQuiz();
    };
});

// This function starts the quiz by initializing variables and showing the first question
function startQuiz() {
    // Shows the quiz state, starts the timer and displays the first question
    switchStates('quiz');
    startTimer();
    showQuestion();
}

// This function displays the current question and choices
function showQuestion() {
    if (currentIndex >= questions.length) return endQuiz();

    // This gets the current question
    const q = questions[currentIndex];

    // Updates the question text, score, and question count
    document.getElementById('questiontext').textContent = q.question;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('questionCount').textContent =
        `${currentIndex + 1}/${questions.length}`;

    // Updates the question image if available
    const img = document.getElementById('questionimage');
    if (q.image) {
        img.src = q.image;
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    // Displays the choices as buttons
    const choices = document.getElementById('choices');
    choices.innerHTML = '';

    // Creates a button for each choice
    q.choices.forEach(opt => {
        const button = document.createElement('button');
        button.textContent = opt;
        button.classList.add('choices');
        button.onclick = () => checkAnswer(button, opt === q.answer);
        choices.appendChild(button);
    });
}


// This function checks the selected answer and updates score and UI accordingly
function checkAnswer(button, correct) {
    document.querySelectorAll('.choices').forEach(b => b.disabled = true);

    // Updates button style based if it is correct or not and updates score
    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }

    // Moves to the next question after a short delay
    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1000);
}

// This function ends the quiz and shows the result screen
function endQuiz() {
    clearInterval(timer);
    switchStates('result');

    // Calculates the percentage score
    const percentage = Math.round((score / questions.length) * 100);

    // Displays final score and percentage
    document.getElementById('finalscore').textContent =
        `You scored ${score} / ${questions.length} (${percentage}%)`;
    document.getElementById('totaltime').textContent =
        `Time: ${formatTime(seconds)}`;

    // Displays result image and message based on score percentage
    const resultImg = document.getElementById('resultimage');
    const resultText = document.getElementById('resulttext');

    // Updates image source and text based on score percentage
    if (percentage >= 80) {
        resultImg.src = 'images/Result/excellent.png';
        resultText.textContent = "You know your K-Pop! Well done!";
    } 
    else if (percentage >= 50) {
        resultImg.src = 'images/Result/good.png';
        resultText.textContent = "Not bad! You have a decent K-Pop knowledge.";
    } 
    else {
        resultImg.src = 'images/Result/tryagain.gif';
        resultText.textContent = "Try again!";
    }
    resultImg.style.display = 'block';
}

// This function resets and starts the quiz timer
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = formatTime(seconds);
    }, 1000);
}

// This function formats time in seconds to MM:SS format
function formatTime(s) {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
}

// This function shuffles an array in place
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Skip button moves to the next question without answering
document.getElementById('skip').onclick = () => {
    currentIndex++;
    showQuestion();
};

// Quit button ends the quiz
document.getElementById('quit').onclick = () => endQuiz();

// Play Again button resets variables and returns to menu
document.getElementById('playAgain').onclick = () => {
    score = 0;
    currentIndex = 0;
    questions = [];
    switchStates('menu');
};
