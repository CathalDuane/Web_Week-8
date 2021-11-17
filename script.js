// Declare var outside function to use globally
var randNum; 

//Start Section/Button
function startPress(){
    randNum = Math.floor(Math.random() * 3);
    startHide()
    playShow() 
    //test
    // alert(randNum);
     
}

// Conditional Functions
//User Picks Rock
function gameRock(){
    var userSelection = 0;
    if (userSelection == randNum){
        playHide()
        draw() 
    }
    else if(userSelection == 0 && randNum == 1){
        playHide()
        lose()  
    }
    else if(userSelection == 0 && randNum == 2){
        playHide()
        win()  
    }
}

//User Picks Paper
function gamePaper(){
    var userSelection = 1;
    if (userSelection == randNum){
        playHide()
        draw()   
    }
    if(userSelection == 1 && randNum == 2){
        playHide()
        lose()
    }
    else if(userSelection == 1 && randNum == 0){
        playHide()
        win()
    }

}

//User Picks Scissors
function gameScissors(){
    var userSelection = 2;  
    if (userSelection == randNum){
        playHide()
        draw() 
    }
    if(userSelection == 2 && randNum == 0){
        playHide()
        lose()
    }
    else if(userSelection == 2 && randNum == 1){
        playHide()
        win()
    }
    
}

//Hide and show functions
function startHide(){
    document.getElementById("start").style.display = "none";
    document.getElementById("startHeader").style.display = "none";
    document.getElementById("startSubHeader").style.display = "none";
} 
function startShow(){
    //Back to start
    event.preventDefault();
    document.getElementById("start").style.display = "block";
    document.getElementById("startHeader").style.display = "block";
    document.getElementById("startSubHeader").style.display = "block";
    //Remove results and replay button
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    document.getElementById("draw").style.display = "none";
    document.getElementById("playAgain").style.display = "none";
} 
function playShow(){
    document.getElementById("chooseText").style.display = "block";
    document.getElementById("rock").style.display = "block";
    document.getElementById("paper").style.display = "block";
    document.getElementById("scissors").style.display = "block";
    

}
function playHide(){
    document.getElementById("chooseText").style.display = "none";
    document.getElementById("rock").style.display = "none";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    
}


// Result functions
function draw(){
    document.getElementById("draw").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
}
function win(){
    document.getElementById("win").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
}
function lose(){
    document.getElementById("lose").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
}





