## Can I explain what my code does?
- The whole program manages a trivia game. When the user submits their answers, it checks for a username cookie. If the cookie doesn't exist, it sets one with the entered username and then calculates the score, saves it to localStorage, displays updated scores, and fetches new questions.

## What was my coding process?
According to the instruction, first go through the pre-written JavaScript functions for fetching and displaying trivia questions. Understand how the API is integrated and how questions are rendered on the page. and implement fuction setCookie and getCookie. Function setCookie  sets a cookie with a specified name, value, and expiration period in days, while get function retrieves a cookie by name.
Then, Implement checkUsername Function to check if a "username" cookie exists and to display or hide username input field and newPlayer button. 
Next, Implement fucntion calculateScore, saveScore and displayScores. These three function calculatte score and then save scores in a local storage and then itertate the date in the local storage to display the username and the score on the table.
Last, implement function handleFormSubmit and newPlayer.The handleFormSubmit function handles the form submission, all the functions within are triggered when the user finishes answering questions and clicks the submit button. The newPlayer function clears the username cookie, updating the UI to show the username input and hiding the "New Player" button.

## What challenges did I have?
At frist, I spent a lot of time on understanding the existing code. When i was working on function checkUsername(), I didn't understand how i could  check for the presence of a "username" cookie since i didn't set "username" as a key of a cookie. Finally, i undertood i could use the key "username" which i intend to set later in advance. And also, there was some problems when writing funcation function saveScore(username, score) because I wanted to save all the scores of one username. But in the localStorage, the score of the same username will be overwritten. At last, I declared an array to store all the scores of one username.

## What would I do differently now?
I think I still need to read the instruction more carefully. and I also need to pay more attention to the result I retrived. Because the result sometimes might be null, which will cause code crashes.



Resources:
- How to get the value of a selected radio button
https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button

- how to check the attribute of element
https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute

- How to iterate through a localStorage
https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript