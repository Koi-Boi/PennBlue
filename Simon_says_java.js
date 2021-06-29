
var pastCCs = [];
var Pselects = [];
function Cselect(){
    var rand = Math.floor(Math.random() *3)+1;
    pastCCs.push(rand);
}

function Pselect(){
   $("button1").on("click", function(){
     Pselects.push(1)
     alert("gaming"); 
   })
   $("button2").on("click", function(){
    Pselects.push(2) 
   }) 
   $("button3").on("click", function(){
    Pselects.push(3) 
   }) 
   $("button2").on("click", function(){
    Pselects.push(4) 
   }) 
}
function compareArray(compArr, playerArr){
    var isTrue = true;
    // For each element of both arrays
    for(var i = 0 ; i <= compArr.length; i++){
         // compare if they are the same
            // if they are different, return false
        if(compArr[i] != playerArr[i]){
            isTrue = false;
        }
     return isTrue;
    }

}
Cselect();
Pselect();
compareArray(pastCCs, Pselects);