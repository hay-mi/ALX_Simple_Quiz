function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Provide feedback based on the user's answer
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);