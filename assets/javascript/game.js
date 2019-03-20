//crystal js

var goal = 0;

var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

var win = 0;
var loss = 0;
var totalScore = 0;

//set random:
goal = Math.floor(Math.random() * 102) + 19;
gem1 = Math.floor(Math.random() * 12) + 1;
gem2 = Math.floor(Math.random() * 12) + 1;
gem3 = Math.floor(Math.random() * 12) + 1;
gem4 = Math.floor(Math.random() * 12) + 1;

//reset:
function reset(){
    totalScore = 0;
    goal = Math.floor(Math.random() * 102) + 19;
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    updateDisplay();
}


//display
function updateDisplay(){
    $("#goal").text(goal);
    $("#totalScore").text(totalScore);
    $("#win").text(win);
    $("#loss").text(loss);
}
updateDisplay();

//click function:
$("#gem1").on("click",function(){
    totalScore += gem1;
    if (totalScore === goal){
        win++;
        reset();
    }

    else if (totalScore >= goal){
        loss++;
        reset();
    }
    else{
        updateDisplay();
    }
    
})

$("#gem2").on("click",function(){
    totalScore += gem2;
    if (totalScore === goal){
        win++;
        reset();
    }
    else if (totalScore >= goal){
        loss++;
        reset();
    }
    else{
        updateDisplay();
    }
})

$("#gem3").on("click",function(){
    totalScore += gem3;
    if (totalScore === goal){
        win++;
        reset();
    }

    else if (totalScore >= goal){
        loss++;
        reset();
    }
    else{
        updateDisplay();
    }
})

$("#gem4").on("click",function(){
    totalScore += gem4;
    if (totalScore === goal){
        win++;
        reset();
    }

    else if (totalScore >= goal){
        loss++;
        reset();
    }
    else{
        updateDisplay();
    }
})

