/**
 * Initializes the Trivia Game when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trivia-form");
    const questionContainer = document.getElementById("question-container");
    const newPlayerButton = document.getElementById("new-player");

    // Initialize the game
    checkUsername(); //Uncomment once completed
    fetchQuestions();
    displayScores();

    /**
     * Fetches trivia questions from the API and displays them.
     */
    function fetchQuestions() {
        showLoading(true); // Show loading state

        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                displayQuestions(data.results);
                showLoading(false); // Hide loading state
                console.log(data.results)
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
                showLoading(false); // Hide loading state on error
            });
    }

    /**
     * Toggles the display of the loading state and question container.
     *
     * @param {boolean} isLoading - Indicates whether the loading state should be shown.
     */
    function showLoading(isLoading) {
        document.getElementById("loading-container").classList = isLoading
            ? ""
            : "hidden";
        document.getElementById("question-container").classList = isLoading
            ? "hidden"
            : "";
    }

    /**
     * Displays fetched trivia questions.
     * @param {Object[]} questions - Array of trivia questions.
     */
    function displayQuestions(questions) {
        questionContainer.innerHTML = ""; // Clear existing questions
        questions.forEach((question, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `
                <p>${question.question}</p>
                ${createAnswerOptions(
                    question.correct_answer,
                    question.incorrect_answers,
                    index
                )}
            `;
            questionContainer.appendChild(questionDiv);
        });
    }

    /**
     * Creates HTML for answer options.
     * @param {string} correctAnswer - The correct answer for the question.
     * @param {string[]} incorrectAnswers - Array of incorrect answers.
     * @param {number} questionIndex - The index of the current question.
     * @returns {string} HTML string of answer options.
     */
    function createAnswerOptions(
        correctAnswer,
        incorrectAnswers,
        questionIndex
    ) {
        const allAnswers = [correctAnswer, ...incorrectAnswers].sort(
            () => Math.random() - 0.5
        );
        return allAnswers
            .map(
                (answer) => `
            <label>
                <input type="radio" name="answer${questionIndex}" value="${answer}" ${
                    answer === correctAnswer ? 'data-correct="true"' : ""
                }>
                ${answer}
            </label>
        `
            )
            .join("");
    }

    // Event listeners for form submission and new player button
    form.addEventListener("submit", handleFormSubmit);
    newPlayerButton.addEventListener("click", newPlayer);

    /**
     * Handles the trivia form submission.
     * @param {Event} event - The submit event.
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        //... form submission logic including setting cookies and calculating score
    }
    function checkUsername() {
        //... code for checking if a username cookie is set and adjusting the UI
        const userNameInput = document.getElementById("username");
        
        if(getCookie(userName)){
            userNameInput.classList.add("hidden");
            newPlayerButton.classList.remove("hidden");
        }
    }

    function setCookie(name, value, days) {
        //... code for setting a cookie
        let expires = "";
        if(days){
            const date = new Date();
            date.setTime(date.getTime()+days*24*60*60*1000);
            expires = `;expires=${date.toUTCString()}`
        }
        document.cookie =`${name}=${value}${expires}`;
    }
    function getCookie(name) {
        //... code for retrieving a cookie
        const cookieString = document.cookie;
        const pairs = cookieString.split(";");

        for(const pair of pairs){
            const[key, value]=pair.split("=");

            if(name === key){
                return value;
            }
        }
    }
    function saveScore(username, score) {
        //... code for saving the score to localStorage
        localStorage.setItem(username,score);
    }
    function newPlayer() {
        //... code for clearing the username cookie and updating the UI
    }
    function calculateScore() {
        //... code for calculating the score
    }
    function displayScores() {
        //... code for displaying scores from localStorage
    }
});