var drums = document.querySelectorAll("button");
for(let i=0;i<drums.length;i++){
    
    drums[i].addEventListener("click", function(){
        
        var keyInner=this.innerHTML;
        getSound(keyInner);

        buttonAnimation(keyInner);
        
    

    });

    

}

document.addEventListener("keydown",function(event){
        
    getSound(event.key);

    buttonAnimation(event.key);

});

function getSound(key){

    switch (key){
        case  "w":
            var tom1= new Audio('sources/projects/drumKit/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2= new Audio('sources/projects/drumKit/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('sources/projects/drumKit/sounds/tom-3.mp3');
            tom3.play();
            break;    
        case "d":
            var tom4= new Audio('sources/projects/drumKit/sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare= new Audio('sources/projects/drumKit/sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash=new Audio('sources/projects/drumKit/sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick=new Audio('sources/projects/drumKit/sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
