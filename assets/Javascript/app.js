// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
var answers= ["true", "false", "true"]
var correct= 0
var incorrect= 0
var counter= 30
var timer;
$("#results").hide()
$("button").on("click",function(event){
    event.preventDefault()
    var answerOne = $("input[name='Q1']:checked").val();
    var answerTwo = $("input[name='Q2']:checked").val();
    var answerThree = $("input[name='Q3']:checked").val();
    if(answerOne === answers[0]){
        correct++
    }else {
        incorrect++
    }
    if(answerTwo === answers[1]){
        correct++
    }else {
        incorrect++
    }
    if(answerThree === answers[2]){
        correct++
    }else {
        incorrect++
    }
    console.log("correct: "+correct+" incorrect: "+incorrect)
    stopTimer()
   
})

// timer(second, 1000 * 1);

// timer(min, 1000 * 60);

function countdown() {
    $("#hour-glass").text(counter);
    counter--;
    if (counter===0){
        stopTimer()
    }
}


function stopTimer() {
    clearInterval(timer)
    $("#correct").text("correct: "+correct)
    $("#incorrect").text("incorrect: "+incorrect)
    $("#main").hide()
    $("#results").show()
}
timer=setInterval(countdown,1000)