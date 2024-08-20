// Function to get a random choice for the computer
var count=0;
var userScore=0;
var computerScore=0;
var text=document.querySelector(".result")
var coupCount=document.querySelector("#coupCount");
var UserCount=document.querySelector("#UserCount");
const computerChoice = () => {
    const computerOptions = ["rock", "paper", "scissors"];
    const compIndex = Math.floor(Math.random() * computerOptions.length);
    const computerSelect = computerOptions[compIndex];
    console.log(`computer ${computerSelect}`);
    return computerSelect; // Return the computer's choice
}

// Function to handle user choice
const user = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            const userChoice = option.getAttribute("id");
            console.log(`user ${userChoice}`);
            const computerChoiceValue = computerChoice(); // Get the computer's choice
            winnerCheck(userChoice, computerChoiceValue); // Pass both choices to winnerCheck
        });
    });
}

// Function to determine the winner
const winnerCheck = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log("draw");
        text.innerText="Draw";
    } else {
        // Determine and log who wins
        if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("user wins");
            text.innerText="user wins";
            userScore++;
            UserCount.innerText=userScore;
        } else {
            console.log("computer wins");
            text.innerText="computer wins";
            computerScore++;
            coupCount.innerText=computerScore;
        }
    }
}

// Initialize the event listeners
user();
