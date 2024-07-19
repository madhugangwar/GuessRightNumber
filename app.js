const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const restartBtn = document.querySelector(".restart-btn");
const allGuesses = document.querySelector(".all-guesses");

const allGuessesArray = [];
let randomNumber = Math.round(Math.random() * 100);

function a() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userInputValue = parseInt(userInput.value);
        
        if (isNaN(userInputValue)) {
            result.innerText = 'Please enter a valid number!';
            return;
        }

        if (userInputValue < randomNumber) {
            result.innerText = 'Too Low!';
        } else if (userInputValue > randomNumber) {
            result.innerText = 'Too High!';
        } else {
            result.innerText = 'Congrats!!!';
            submitBtn.disabled = true;  // Disable submit button when the correct guess is made
            restartBtn.disabled = false;  // Enable restart button when the correct guess is made
        }

        allGuessesArray.push(userInputValue);
        allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(', ');
        form.reset();
    });
    
    restartBtn.addEventListener('click', () => {
        result.innerText = '';
        allGuesses.innerText = '';
        allGuessesArray.length = 0;
        restartBtn.disabled = true;
        submitBtn.disabled = false;
        randomNumber = Math.round(Math.random() * 100);
    });

    restartBtn.disabled = true;  // Disable restart button initially
}

a();
