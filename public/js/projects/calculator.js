
var input = document.getElementById("txt");

var buttons = document.getElementsByClassName("btn-info");
for (btn of buttons){
    operatorInput(btn.textContent);
}

var C = document.getElementById("C");
C.addEventListener("click",function(){
    input.value="";
});

var CAL = document.getElementById("Cal");
CAL.addEventListener("click",read);

var buttonsOperatorDark = document.getElementsByClassName("btn-dark");
for (btn of buttonsOperatorDark){
    operatorInput(btn.textContent);
}

var buttonsOperatorLight = document.getElementsByClassName("btn-light");
for (btn of buttonsOperatorLight){
    operatorInput(btn.textContent);
}

function operatorInput(str){
    btn.addEventListener("click", function(){
        input.value += str;
    })
}



function read(){
    var num1="";
    var num2="";

    
    var status="";
    var result=0;

    for(s of input.value){

        if(s == "+"){
            result=update(status, num1, num2);
            num1=result.toString();
            num2="";
            status=sum;
        }
        else if (s == "-"){   
            result=update(status, num1, num2);
            num1=result.toString();
            num2="";
            status=sub;
        }
        else if (s == "X"){ 
            result=update(status, num1, num2);
            num1=result.toString();
            num1=result.toString();     
            num2="";  
            status=mul;
        }
        else if (s == "/"){  
            result=update(status, num1, num2);
            num1=result.toString(); 
            num2="";        
            status=div;
        }
        else {
            if (checkStatus(status)){
                num2+=s;
            } else {
                num1+=s;
            }
            
        }

    }
    
    result=update(status, num1, num2);
    //alert(result);
    input.value=result.toString();
    
}

function checkStatus(str1){
    if(str1 == ""){
        return false;
    } else {
        return true;
    }
}
function update(status, num1, num2){
    //alert("num first:"+num1+" num second: "+num2);
    if(checkStatus(status)){
        return operation(num1, num2, status);
    }
    else {
        return Number(num1);
    }
}



function sum(num1, num2){
    
    return (num1) + (num2);
}

function sub(num1, num2){
    return (num1) - (num2);
}

function div(num1, num2){
    return (num1) / (num2);
}

function mul(num1, num2){
    return (num1) * (num2);
}

function operation(num1,num2,operation){
    return operation( Number(num1), Number(num2));
}
