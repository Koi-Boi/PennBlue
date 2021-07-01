
var pastCCs = [];
var pastPCs = [];
var highScore = 0;
var lastScore = 0;
var allScores = [];
var averageScore = 0;
var numberOfGames = 0;
//function for picking random button for the player to press
function Cselect(){
    pastPCs = [];
    var rand = Math.floor(Math.random() *4)+1;
    pastCCs.push(rand);
   console.log(pastCCs);
   for(var i=0; i<pastCCs.length; i++){
       var selected = pastCCs[i];
       if(selected == 1){
        document.getElementById(selected).style.backgroundColor = "red";
        setTimeout(function(){ document.getElementById(selected).style.backgroundColor = "#111324"; }, 1000);
       }  
       
        if(selected == 2){
        document.getElementById(selected).style.backgroundColor = "blue";
        setTimeout(function(){ document.getElementById(selected).style.backgroundColor = "#111324"; }, 1000);
       } 
       
         if(selected == 3){
        document.getElementById(selected).style.backgroundColor = "yellow";
        setTimeout(function(){ document.getElementById(selected).style.backgroundColor = "#111324"; }, 1000);
       }
       
        if(selected == 4){
        document.getElementById(selected).style.backgroundColor = "green";
        setTimeout(function(){ document.getElementById(selected).style.backgroundColor = "#111324"; }, 1000);
       }  
       
    setTimeout(function(){ document.getElementById("1").style.backgroundColor = "#111324"; }, 1000);
    setTimeout(function(){ document.getElementById("2").style.backgroundColor = "#111324"; }, 1000);
    setTimeout(function(){ document.getElementById("3").style.backgroundColor = "#111324"; }, 1000);
    setTimeout(function(){ document.getElementById("4").style.backgroundColor = "#111324"; }, 1000);
     } 
    
}
//adds event listeners for clicking on the colored buttons and the start button
$(document).ready(function(){
    $(".glow-on-hover").on("click", function(e){
        e.stopPropagation();
        Cselect();
     });
     $(".button1").on("click", function(){
         pastPCs.push(1);
         console.log("1");
         console.log(pastPCs);
         if(pastPCs.length == pastCCs.length){
            compareArray(pastCCs, pastPCs);
            reset();
            refresh();   
         }
       
       });
       $(".button2").on("click", function(){
        pastPCs.push(2);
        console.log("2");
        console.log(pastPCs);
        if(pastPCs.length == pastCCs.length){
            compareArray(pastCCs, pastPCs);
            reset();
            refresh();
         }
        
    
       });
       $(".button3").on("click", function(){
        pastPCs.push(3);
        console.log("3");
        console.log(pastPCs);
        if(pastPCs.length == pastCCs.length){
            compareArray(pastCCs, pastPCs);
            reset();
            refresh(); 
         }
     
       }); 
       $(".button4").on("click", function(){
        pastPCs.push(4);
        console.log("4");
        console.log(pastPCs);
        if(pastPCs.length == pastCCs.length){
            compareArray(pastCCs, pastPCs);
            reset();
            refresh();
         }
        
       }); 
    });
  //function for comparing the computers selections and yours
  //function for comparing the computers selections and yours
  function compareArray(compArr, playerArr){
        var isTrue = true;
             // compare if the last elements are the same
                // if they are different, return false
            for(var i=0; i<compArr.length; i++){
                if(compArr[i] != playerArr[i]){
                    isTrue = false;
                    
                }
            }
            
        console.log(isTrue)
         return isTrue;
        }
   
function reset (){
    if(compareArray(pastCCs, pastPCs)== false){
        lastScore = pastPCs.length;
        allScores.push(lastScore);
        numberOfGames = allScores.length;
        function add (arr){
           return arr.reduce((a, b) => a + b, 0);
        }   
        averageScore = add(allScores)/allScores.length;
        console.log(averageScore);
        pastPCs = [];
        pastCCs = [];
        if(lastScore > highScore){
            highScore = lastScore;
        }
        var Hscores = document.getElementById("Hscores");
        var Pscores = document.getElementById("Pscores");
        var NGscores = document.getElementById("NGscores");
        var Ascores = document.getElementById("Ascores");

        $(Hscores).text("High Score: " + highScore);
        $(Pscores).text("Previous Score: " + lastScore);
        $(NGscores).text("number of games played: " + numberOfGames);
        $(Ascores).text("Average score: " + averageScore);
    }
}   
function refresh (){
    if(compareArray(pastCCs, pastPCs) == true){
        Cselect();
    } 
}



