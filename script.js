 $(document).ready(function() {
     let quizquestions = [
         [
             ["question1"],
             ["bbbbbbbbbbbb", "cccccccccccc", "ddddddddddd", "eeeeeeeeeeeee"],
             ["answer:0"]
         ],
         [
             ["question2"],
             ["ttttttt", "rrsdsd", "oooooooo", "llllllll"],
             ["answer:1"]
         ],
         [
             ["question3"],
             ["qqqqqqq", "aaaaaaaaa", "qqqqqqqq", "nnnnnnnnn"],
             ["answer:2"]
         ],
         [
             ["question4"],
             ["qqqqqqq", "aaaaaaaaa", "qqqqqqqq", "nnnnnnnnn"],
             ["answer:2"]
         ],
         [
             ["question5"],
             ["qqqqqqq", "aaaaaaaaa", "qqqqqqqq", "nnnnnnnnn"],
             ["answer:2"]
         ],
     ];


     $("#startBtn").on("click", startQuiz)

     $(document).on("click", ".userAnswer", nextQuestion)


     function nextQuestion() {
         $(".userAnswer").remove();
         if (questionPlusAnswer < (quizquestions.length - 1)) {
             startQuiz();
         } else {
             $("h1").text("Your final");
             $(".userAnswer").remove();
         }
     }



     var questionPlusAnswer = -1

     function startQuiz() {

         $(".welcome-p").remove();
         $("#startBtn").remove();
         questionPlusAnswer += 1
         let currentQuestion = quizquestions[questionPlusAnswer]
         $("h1").text(currentQuestion[0]);
         for (let i = 0; i < currentQuestion[1].length; i++) {
             var pTag = $("<button>");
             pTag.addClass("userAnswer");
             pTag.attr("id", "answer:" + i);
             pTag.text(currentQuestion[1][i]);
             $("main").append(pTag);
         }


     };


 });







 //  $(document).ready(function() {
 //     let quizquestions = [
 //         [
 //             ["question1"],
 //             ["bbbbbbbbbbbb", "cccccccccccc", "ddddddddddd", "eeeeeeeeeeeee"],
 //             ["answer:0"]
 //         ],
 //         [
 //             ["question2"],
 //             ["ttttttt", "rrsdsd", "oooooooo", "llllllll"],
 //             ["answer:1"]
 //         ],
 //         [
 //             ["question3"],
 //             ["qqqqqqq", "aaaaaaaaa", "qqqqqqqq", "nnnnnnnnn"],
 //             ["answer:1"]
 //         ],

 //     ];

 //     var questionPlusAnswer = 0

 //     $("#startBtn").on("click", function() {

 //         $(".welcome-p").remove();
 //         $("#startBtn").remove();



 //         let currentQuestion = quizquestions[questionPlusAnswer]
 //         let currentAnswer = currentQuestion[2]


 //         $("h1").text(currentQuestion[0]);
 //         for (i = 0; i < currentQuestion[1].length; i++) {
 //             var pTag = $("<button>");

 //             pTag.addClass("answer:" + currentAnswer);
 //             pTag.attr("id", "userAnswer");
 //             pTag.text(currentQuestion[1][i]);
 //             $("main").append(pTag);
 //         }
 //         var nextBtn = $("<button>");
 //         nextBtn.text("Next");
 //         $("main").append(nextBtn);

 //         questionPlusAnswer = questionPlusAnswer + 1

 //         console.log(questionPlusAnswer)
 //             //  console.log(currentQuestion[0])
 //             //  console.log(currentQuestion[1])
 //             //  console.log(currentAnswer)
 //     });


 //     //  This function tells you if your answer was the correct one
 //     let answerd = $("<p>");
 //     answerd.text("");
 //     $("main").append(answerd)

 //     //  This function tells you if your answer was the correct one

 //     $(document).on('click', '#userAnswer', function() {


 //         //  if (this.className === "correct") {
 //         //      answerd.text("Nice! That's correct!");
 //         //  } else { answerd.text("Opps! wrong answer!"); }
 //         //  console.log(this.className)
 //     })



 // });