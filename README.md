# JavaScript Quiz Time

  ![JavaScript Quiz App](./assets/images/Screenshot%202023-10-15%20234603.png)


  ## Purpose
  This app is a short 5 question quiz that tests the user on basic JavaScript knowledge.
  The user has 30 seconds to go through all 5 questions, with the caveat that 3 seconds are subtracted each time they answer a question incorrectly.
 
  ## Functionality

  The main screen starts off with a quiz title and details.
  If the user decides to take on the challenge they will need to share their initials that will be displayed in a string statement with at the end of the game.
  *The users initials will be stored in local storage*

  Once the user begins the quiz, the first question will appear and the timer will begin.
  Once an answer is chosen, the user will know whether they answered right or wrong because the correct answer will change to a green background color and wrong answers will have a red background color.
  Also when a user answers incorrectly, the timer will subtract 3 seconds from the remaining time.

  If a user finishes before time is up, they will immediately see their initials and score.
  If a user runs out of time, an alert will pop up and will then be directed to the screen with their initials and score.

  From the 'score' screen users will also have an opportunity to try taking retaking the quiz. 