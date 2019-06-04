




$(document).ready(function () {
    // Create a function that creates the start button and initial screen

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();
})

var startingScreen;
var gameHTML;
var timer = 30;
var questionArray = ["Which character is sent to Anger Management?", "Which character is the owner of the office complex where Dunder Mifflin is situated?", "Which character was in the same High-School as Michael?", "Which character brings a huge container of chilli to the office?", "Which character promises to pay the college tuition for a class of 3rd Graders?"];
var answerArray = [["Andy", "Dwight", "Jim", "Ryan"], ["Andy", "Dwight", "Michael", "Robert"], ["Dwight", "Angela", "Phyllis", "Stanley"], ["Stanley", "Pam", "Kevin", "Ryan"], ["Stanley", "Dwight", "Jim", "Michael"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Andy.jpg'>", "<img class='center-block img-right' src='assets/images/Dwight.jpg'>", "<img class='center-block img-right' src='assets/images/Phyllis.png'>", "<img class='center-block img-right' src='assets/images/Kevin.jpg'>", "<img class='center-block img-right' src='assets/images/Michael.jpg'>"];
var correctAnswers = ["A. Andy", "B. Dwight", "C. Phyillis", "C. Kevin", "D. Michael"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
// var clickSound = new Audio("sound/button-click.mp3");