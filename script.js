 $(document).ready(function() {

     var userProfile = {
         username: null,
         userScore: null,
     }
     var scoreTracker = 0;

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

     //every time an answer is selected you will be taken to the next screen 
     $(document).on("click", ".userAnswer", nextQuestion)
     $(document).on("click", ".submitBtn", submitButtonPressed)

     var answerCheck = $("<p>")
     answerCheck.text("")
     answerCheck.addClass("answerCheck")
     $(".checkAnswer").append(answerCheck);
     $(".answerCheck").insertAfter(".checkAnswer")

     function nextQuestion() {
         $(".userAnswer").remove();
         if (this.id === currentQuestion[2][0]) {
             scoreTracker = scoreTracker + 1
             answerCheck.text("correct!")


         } else {
             answerCheck.text("incorrect!");

         }

         if (questionPlusAnswer < (quizquestions.length - 1)) {
             startQuiz();
         } else {
             finalScorePage()
             stopTimer()
         }
     }

     var userInputInitials


     function finalScorePage() {

         $("h1").text("Your got  " + scoreTracker + " out of " + quizquestions.length + " right");
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
         input.addClass("userInitials")
         $("main").append(input);
         var submitbtn = $("<button>")
         submitbtn.addClass("submitBtn")
         submitbtn.text("Submit")
         $("main").append(submitbtn);






         $(".userAnswer").remove();
         $(".answerCheck").remove();
     }


     var questionPlusAnswer = -1
     var currentQuestion;

     function startQuiz() {
         $(".welcome-p").remove();
         $("#startBtn").remove();
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



     // time we want to countdown to
     var startingTime = 2;
     var timePassed = 0;
     var timeFunc;


     function startTimer() {
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


     function submitButtonPressed() {
         var str = $("input").val();
         console.log(str);

         var tesdfst = "userProfile"
         userProfile.username = str
         userProfile.userScore = scoreTracker



         var userProlieJSON = JSON.stringify(userProfile);

         localStorage.setItem(tesdfst, userProlieJSON)

         $("h1").text("High Scores!");
         $(".percentRight").remove()
         $(".userInitials").remove()
         $(".label").remove()
         $(".submitBtn").remove()



     }


 });