
//declare all variable via the DOM method

var BR = "<br>";
var mainHeader = document.getElementById("mainHeader");
var mainWrapper = document.getElementById("mainWrapper");
var gameDirections = document.getElementById("gameDirections");
var finalPageWrapper = document.getElementById("finalPageWrapper");
var rules = document.getElementById("rules");
var variables = document.getElementById("variables");
var click = document.getElementById("click");
var robotClick = document.getElementById("robotClick");

var game = document.getElementById("gamePageWrapper");
var gameTitle = document.getElementById("gameTitle");
var human = document.getElementById("human");
var resultTitle = document.getElementById("resultTitle");
var player = document.getElementById("player");
var playerWins = document.getElementById("playerWins");
var draw = document.getElementById("draw");
var computerWins = document.getElementById("computerWins");
var chosen = document.getElementById("chosen");
var seeResults = document.getElementById("seeResults");
var finalTitle = document.getElementById("finalTitle");
var finalResults = document.getElementById("finalResults");
var finalWins = document.getElementById("finalWins");
var finalTies = document.getElementById("finalTies");
var finalLoss = document.getElementById("finalLoss");
var wins = document.getElementById("wins");
var loss = document.getElementById("loss");
var finalDraw = document.getElementById("finalDraw");

var i = 0;

var rndNumber = 0;
var round = 0;
var playWin = 0;
var compWin = 0;
var ties = 0;
var userChoice;
var computerChoice;
var roundsLeft = 10;

var goHomeBtn = document.getElementsByClassName("showMain");
var goGameBtn = document.getElementById("showGame");

//image arrays
var srcRollover = ["images/rollRock.png", "images/rollPaper.png", "images/rollScissors.png",
                   "images/rollLizard.png", "images/rollSpock.png"];
var srcHuman = ["images/rock.png", "images/paper.png", "images/scissors.png",
                "images/lizard.png", "images/spock.png"];
var srcComputer = ["images/rock.png", "images/paper.png", "images/scissors.png",
                   "images/lizard.png", "images/spock.png"];

//declare node lists
var humanList = document.getElementsByClassName("human");
var computerList = document.getElementsByClassName("computer");


//declare event handlers
var timer = function () {
    var clickHandler = function () {
        //create random number and change picture src for computer
        computerList[rndNumber].src = srcComputer[rndNumber];
        rndNumber = Math.floor(Math.random() * 5);
        computerList[rndNumber].src = srcRollover[rndNumber];
        computerChoice = computerList[rndNumber].alt;

        //test user vs computer
        if (round < 10) {

            chosen.innerHTML = "";
            if (round == 11) {
                return;
            }
            else if (userChoice == computerChoice) {
                ties++;
                chosen.innerHTML += BR + "Draw!" + BR;
            } else if (userChoice == "scissors" && computerChoice == "paper") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "paper" && computerChoice == "rock") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "rock" && computerChoice == "lizard") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "lizard" && computerChoice == "spock") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "spock" && computerChoice == "scissors") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "scissors" && computerChoice == "lizard") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "paper" && computerChoice == "spock") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "spock" && computerChoice == "rock") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else if (userChoice == "rock" && computerChoice == "scissors") {
                playWin++;
                chosen.innerHTML += BR + "Won!" + BR;
            } else {
                compWin++;
                chosen.innerHTML += BR + "Lost!" + BR;
            }

            //increment round count
            round++;
            //display counter results        

            playerWins.innerHTML = "WON:" + BR + playWin;
            draw.innerHTML = "DRAW:" + BR + ties;
            computerWins.innerHTML = "Computer Wins:" + BR + compWin;
            chosen.innerHTML += userChoice + " VS. " + computerChoice;

        }
        //show results button after 10 rounds
        if (round == 10) {
            resultsButton();
        }
    };//end of clickHandler function



    if (roundsLeft > 0) {
        //decrease rounds left
        roundsLeft--;
    }
    resultTitle.innerHTML = "The winner will be<br>determined in " + roundsLeft + " rounds.";

    //delay clickHander
    setTimeout(clickHandler, 300);
};//end of timer function


//show result btn function
var resultsButton = function () {
    for (var i = 0; i < humanList.length; i++) {
        //diable click and mouseover event listeners
        var humanNode = humanList[i];
        human.removeEventListener("click", timer, false);
        human.removeEventListener("click", imgHandler, false);
        humanNode.removeEventListener("mouseover", mouseoverHandler, false);
        humanNode.index = i;
    }
    //enable result button
    seeResults.disabled = false;
    seeResults.style.display = "block";

    //display final page results
    finalWins.innerHTML = "Player Wins";
    finalTies.innerHTML = "Draws";
    finalLoss.innerHTML = "Roboto Wins";
    wins.innerHTML = playWin;
    finalDraw.innerHTML = ties;
    loss.innerHTML = compWin;
    //determine who won overall
    if (playWin == compWin) {
        finalResults.innerHTML = "Draw, we are equally brilliant!";
    } else if (playWin > compWin) {
        finalResults.innerHTML = "You win. You have embarresed me, I will go hibernate now.";
    } else {
        finalResults.innerHTML = "You have lost to the almighty Roboto!";
    }
}


//Mouseover function
var mouseoverHandler = function () {
    var i = this.index;
    //console.log(this);
    this.src = srcRollover[i];
};
//Mouseout function
var mouseoutHandler = function () {
    var i = this.index;
    this.src = srcHuman[i];
    computerList[rndNumber].src = srcComputer[rndNumber];
};
//assign userChoice
var imgHandler = function (eventObj) {
    var imgObj = eventObj.target;
    userChoice = imgObj.alt;
};

//veiw home page function
function goHome() {
    mainWrapper.style.display = "block";
    game.style.display = "none";
    finalPageWrapper.style.display = "none";
    location.reload(true);
}
//veiw game page function
function goGame() {
    mainWrapper.style.display = "none";
    game.style.display = "block";
    finalPageWrapper.style.display = "none";
}
//veiw final page function
function finalPage() {
    mainWrapper.style.display = "none";
    game.style.display = "none";
    finalPageWrapper.style.display = "block";
}

//create all eventlistners and assignthem to my humanList

for (var i = 0; i < humanList.length; i++) {
    var humanNode = humanList[i];
    human.addEventListener("click", timer, false);
    human.addEventListener("click", imgHandler, false);
    humanNode.addEventListener("mouseover", mouseoverHandler, false);
    humanNode.addEventListener("mouseout", mouseoutHandler, false);
    humanNode.index = i;
}


//start page
mainHeader.innerHTML = "The" + BR + "Ultimate" + BR + "Game" + BR;
rules.innerHTML = "Rules: ";
gameDirections.innerHTML = "This game is a special version of Rock, Paper, Scissors. Instead of three variables, there are now five." + BR +
                           "You will compete against Mr. Roboto (the computer)." + BR + " It will take 10 rounds to determine the victor." + BR + BR +
                           "-Scissors cuts Paper, Paper Covers Rock" + BR +
                           "-Rock crushes Lizard, Lizard poisons Spock" + BR +
                           "-Spock smashes scissors, Scissors decapitates Lizard" + BR +
                           "-Paper disproves Spock, Spock vaporizes Rock and" + BR +
                           "-Rock crushes Scissors";
variables.innerHTML = "Rock" + BR +
                      "Paper" + BR +
                      "Scissors" + BR +
                      "Lizard" + BR +
                      "Spock" + BR;

//game page
gameTitle.innerHTML = "Let the games begin!";
click.innerHTML = "Choose Here:";
robotClick.innerHTML = "Computer:";
resultTitle.innerHTML = "The winner will be<br>determined in " + roundsLeft + " rounds.";
player.innerHTML = "Current Score";
playerWins.innerHTML = "WON:" + BR + playWin;
draw.innerHTML = "DRAW:" + BR + ties;
computerWins.innerHTML = "Computer Wins:" + BR + compWin;

//final page title
finalTitle.innerHTML = "Game Results" + BR + "<hr>";

//set up event handler for play and restart button
seeResults.disabled = true;
goHomeBtn[0].onclick = goHome;
goGameBtn.onclick = goGame;
seeResults.onclick = finalPage;