
function roll(){
    
    var randomNumberd20_1 = Math.floor(Math.random() * 20 ) + 1;
    var randomNumberd20_2 = Math.floor(Math.random() * 20 ) + 1;

    
    document.getElementsByClassName("img1")[0].src="sources/projects/diceGame/d20d"+randomNumberd20_1+".png";
    document.getElementsByClassName("img1")[1].src="sources/projects/diceGame/d20d"+randomNumberd20_2+".png";
    
    if(randomNumberd20_1>randomNumberd20_2){
        $("h1").text("Player 1 Won!!");

    } else if(randomNumberd20_1<randomNumberd20_2){
        $("h1").text("Player 2 Won!!");
    } else {
        $("h1").text("DRAW!");
    }
}