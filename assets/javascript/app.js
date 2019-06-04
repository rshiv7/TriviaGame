




$(document).ready(function () {
    // Function that creates the start button and initial screen

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();


$("body").on("click", ".start-button", function (event) {
    event.preventDefault();

    generateHTML();

    timerWrapper();

});

$("body").on("click", ".answer", function (event) {
    //answeredQuestion = true;

    selectedAnswer = $(this).text();
    if (selectedAnswer === correctAnswers[questionCounter]) {
        //alert("correct");

        clearInterval(theClock);
        generateWin();
    }
    else {
        //alert("wrong answer!");
        clearInterval(theClock);
        generateLoss();
    }
});


$("body").on("click", ".reset-button", function(event) {

    resetGame();
});

});




function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.jpg'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000);
}

// This function was working before. I cant' seem to understand the error.
// I wanted to create this function to display the data stored in the gameHtml variable.


function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(gameHTML);
    
}


function wait() {
    if (questionCounter < 4) {
        questionCounter++;
        generateHTML();
        count = 30;
        timerWrapper();
    }
    else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (count === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (count > 0) {
            count--;
        }
        $(".timer").html(count);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + count + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainArea").html(gameHTML);
}


function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    count = 30;
}

var startScreen;
var gameHTML;
var count = 30;
var questionArray = ["Which character is sent to Anger Management?", "Which character is the owner of the office complex where Dunder Mifflin is situated?", "Which character was in the same High-School as Michael?", "Which character brings a huge container of chilli to the office?", "Which character promises to pay the college tuition for a class of 3rd Graders?"];
var answerArray = [["Andy", "Dwight", "Jim", "Ryan"], ["Andy", "Dwight", "Michael", "Robert"], ["Dwight", "Angela", "Phyllis", "Stanley"], ["Stanley", "Pam", "Kevin", "Ryan"], ["Stanley", "Dwight", "Jim", "Michael"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Andy.jpg'>", "<img class='center-block img-right' src='assets/images/Dwight.jpg'>", "<img class='center-block img-right' src='assets/images/Phyllis.png'>", "<img class='center-block img-right' src='assets/images/Kevin.jpg'>", "<img class='center-block img-right' src='assets/images/Michael.jpg'>"];
var correctAnswers = ["A. Andy", "B. Dwight", "C. Phyillis", "C. Kevin", "D. Michael"];
var questionCounter = 0 ;
var selectedAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;