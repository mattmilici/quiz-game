 $(document).ready(function() {

     // ----------------------------variables being used----------------------------

     var scoreTracker = 0;
     var currentQuestion;
     var questionPlusAnswer = -1;
     var timeFunc;
     let quizquestions = [
         [
             ["Javascript can update and change both HTML and CSS"],
             ["True", "False"],
             ["answer:0"]
         ],
         [
             ["Javascript can calculate, _______ and validate data"],
             ["spell", "manipulate", "sing", "laugh"],
             ["answer:1"]
         ],
         [
             ["You set a variable in Javascript by using which of the following syntax"],
             ["var", "parse", "function", "()"],
             ["answer:0"]
         ],
         [
             ["JQuery is a library built on Javascript"],
             ["True", "False"],
             ["answer:0"]
         ],
         [
             ["How would you determine the number of items in an array?"],
             ["array.count", "array.parse", "array.read", "array.length"],
             ["answer:3"]
         ],
     ];

     //Starting button on home screen. This kicks off the timer and shows the first quiz question
     $("#startBtn").on("click", startQuiz)
     $("#startBtn").on("click", startTimer)
     $(".scores-btn").on("click", submitButtonPressed)

     //every time an answer is selected you will be taken to the next screen 
     $(document).on("click", ".userAnswer", nextQuestion)
     $(document).on("click", ".submitBtn", submitButtonPressed)
     $(document).on("click", ".playAgain", restart)


     // ---------------------------- This function takes you to the next question ----------------------------

     function nextQuestion() {
         $(".userAnswer").remove();
         $(".answerCheck").show();
         if (this.id === currentQuestion[2][0]) {
             scoreTracker = scoreTracker + 1
             $(".answerCheck").text("correct!")


         } else {
             $(".answerCheck").text("incorrect!");

         }

         if (questionPlusAnswer < (quizquestions.length - 1)) {
             startQuiz();
         } else {
             finalScorePage()
             stopTimer()
         }
     }



     function finalScorePage() {

         $("h1").text("You got  " + scoreTracker + " out of " + quizquestions.length + " correct");
         $("h1").css("text-align", "center");
         var pQuote = $("<p>")
         pQuote.addClass("percentRight")
         var percent = 100 * (scoreTracker / quizquestions.length)
         pQuote.text(percent + "%")
         $("main").append(pQuote);

         var label = $("<p>")
         label.addClass("label")
         label.text("Please enter your initals")
         $("main").append(label);

         var input = $("<input>")
         input.attr("id", "input")
         input.addClass("userInitials")
         $("main").append(input);

         var submitbtn = $("<button>")
         submitbtn.addClass("submitBtn")
         submitbtn.text("Submit")
         $("main").append(submitbtn);

         $(".userAnswer").remove();
         $(".answerCheck").hide();
     }


     function startQuiz() {
         $(".scoreboardPTags").hide()
         $(".welcome-p").hide();
         $(".welcome-p2").hide();
         $("#startBtn").hide();


         questionPlusAnswer += 1
         currentQuestion = quizquestions[questionPlusAnswer]
         $("h1").text(currentQuestion[0]);
         $("h1").css("text-align", "left");
         for (let i = 0; i < currentQuestion[1].length; i++) {
             var pTag = $("<button>");
             pTag.addClass("userAnswer btn");
             pTag.attr("id", "answer:" + i);
             pTag.text(currentQuestion[1][i]);
             $("main").append(pTag);
         }


     };


     function startTimer() {
         var startingTime = 60
         var timePassed = 0;
         // Run myfunc every second
         timeFunc = setInterval(function() {

                 var timeRemaing = startingTime - timePassed;

                 $('#timerCount').text(timeRemaing)


                 timePassed = timePassed + 1


                 // Display the message when countdown is over
                 if (timeRemaing < 0) {
                     clearInterval(timeFunc);
                     $("#timeTracker").text("")
                     $('#timerCount').text("Times up!")
                     finalScorePage()
                 }
             },
             1000);
     }

     function stopTimer() {
         clearTimeout(timeFunc);
     }


     var userScoresArray = [];
     var allUsersArray = JSON.parse(localStorage.getItem('userresults')) || [];

     function submitButtonPressed() {
         var str = $("input").val();
         userScoresArray.push(str)
         userScoresArray.push(scoreTracker)


         allUsersArray.push(userScoresArray)
         localStorage.setItem("userresults", JSON.stringify(allUsersArray));



         $("h1").text("High Scores!");
         $("h1").css("text-align", "center");
         $(".userhighscore").remove()
         $(".userInitials").remove()
         $(".playAgain").remove()
         $("#startBtn").hide()
         $(".percentRight").remove()
         $(".userInitials").remove()
         $(".label").remove()
         $(".submitBtn").remove()
         $(".userAnswer").remove()
         $(".answerCheck").hide()
         $(".welcome-p").hide()
         $(".welcome-p2").hide()

         $("h1").text("High Scores!");
         $("h1").css("text-align", "center");

         scoreBoard()
         stopTimer()

         var playAgain = $("<button>");
         playAgain.addClass("playAgain btn");
         playAgain.text("Play Again!");
         $("main").append(playAgain);


     }

     function restart() {
         $(".playAgain").remove()
         $(".userhighscore").remove()
         $("h1").text("Test your Javascript Knowledge!");
         $(".scoreboardPTags").hide()
         $(".welcome-p").show();
         $(".welcome-p").text("Back for another go?!");
         $(".welcome-p2").show();
         $(".welcome-p2").text("You'll be prompted with a Javascript question with four mulitple choice answers. Click the answer you believe to be true. If you select the wrong answer you'll lose 5 seconds off your time. time starts at 60 seconds!");

         $("#startBtn").show()
         startingTime = 60
         questionPlusAnswer = -1
         scoreTracker = 0

     }


     function scoreBoard() {
         $(".scoreboardPTags").hide()

         var getData = localStorage.getItem("userresults")
         var dataParsed = JSON.parse(getData)
         console.log(dataParsed)

         dataParsed.sort(function(a, b) {
             return b[1] - a[1];
         });

         for (let r = 0; r < dataParsed.length; r++) {
             var pHeader = $("<p>")
             pHeader.addClass("scoreboardPTags")
             pHeader.text("user: " + dataParsed[r][0] + " Scored: " + dataParsed[r][1])
             $("main").append(pHeader)
         }
     }

 });