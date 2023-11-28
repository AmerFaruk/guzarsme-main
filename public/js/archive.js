
//card container
var containerCardsRow = document.getElementById("cardsRow");
//cards
var containerCards = document.getElementsByClassName("col-cards");

var works = $("work");
var recent= $("recent");
var news= $("new");
var reviews= $("review");



const radioButtons = $('input[name="vbtn-radio"]');
$(".control-section input").click(function(){
    
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            var selectedCategory = 'label[for=' + radioButton.id + ']';
            var label = document.querySelector(selectedCategory);
            var text = label.id;

            showSection("#"+text+"-Section");

            console.log(text);
            break;
        }
    }
});




function showSection(section){

    

}

function hideSections(){
    
    
}

