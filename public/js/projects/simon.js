
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];




var isStarted=false;
var level=0;
$(document).keypress(function(){
    if(!isStarted){
        $("#level-title").text("Level "+level);
        nextSequence();
        isStarted = true;
    } 
});







$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
    //console.log(userClickedPattern);

});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
        
    } else {
        
        $(document.body).addClass("game-over");
        setTimeout(function () {
            $(document.body).removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        restartGame();
        
    }
}

function restartGame(){
        isStarted = false;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
function playSound(name){
    var audio = new Audio("sources/projects/theSimonGame/sounds/" + name + ".mp3");
    audio.play();
}
//get random number
function nextSequence(){
    userClickedPattern = [];


    var randomNumber=getRndInteger(0,4);
    var randomChosenColour = buttonColours[randomNumber];

    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
    playSound(randomChosenColour);

    gamePattern.push(randomChosenColour);

    $("#level-title").text("Level "+level);
    level++;
}
//get random number between
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }