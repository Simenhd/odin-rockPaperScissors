document.addEventListener('DOMContentLoaded', () => {
    // Selectors for scores (if you want to update score text later)
    const userScoreText = document.querySelector('.col-2 #user');
    const computerScoreText = document.querySelector('.col-2 #computer');

    // Selector for the table body
    const tableBody = document.querySelector('table tbody');

    // All the buttons in the document
    const buttons = document.querySelectorAll('button');

    // Variables to hold scores and round counter
    let userScore = 0;
    let computerScore = 0;
    let round = 0;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            round++; // Increment round number for each game played

            // Determine the user’s choice based on the clicked button
            let userSelection = getUserChoice(button.id);
            console.log(`User selected: ${userSelection}`);
            
            // Get the computer's choice
            const computerSelection = computerChoice();
            console.log(`Computer selected: ${computerSelection}`);
            
            // Determine the outcome
            const resultText = determineResult(userSelection, computerSelection);
            console.log(`Result: ${resultText}`);

            // Update the scores based on the result
            if (resultText === "You win!") {
                userScore += 1;
            } else if (resultText === "Computer wins!") {
                computerScore += 1;
            }

            // Update the score display in your HTML if needed:
            userScoreText.textContent = userScore;
            computerScoreText.textContent = computerScore;

            // Create a new table row for this round
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <th scope="row">${round}</th>
                <td>${userSelection}</td>
                <td>${computerSelection}</td>
                <td>${resultText}</td>
            `;

            // Append the new row to the table body
            tableBody.appendChild(newRow);
        });
    });
});

// Function: Get User Choice (Renamed to avoid conflict)
function getUserChoice(buttonID) {
    if (buttonID === 'Rock') {
        return "Rock";
    } else if (buttonID === 'Paper') {
        return "Paper";
    } else if (buttonID === 'Scissors') {
        return "Scissors";
    } else {
        return "Invalid choice";
    }
}

// Function: Returns a random choice for the computer
function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
  
// Function: Determines the result of the game using standard rules
function determineResult(user, computer) {
    if (computer === user) {
        return "Tie!";
    } else if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
