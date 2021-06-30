
var pastCCs = [];
var Pselects = [];
function Cselect(){
    var rand = Math.floor(Math.random() *3)+1;
    pastCCs.push(rand);
    console.log(pastCCs);
}
Cselect();
$(document).ready(function(){
    $(".button1").on("click", function(){
        Pselects.push("1");
        console.log("1");
        console.log(Pselects);
      });
      $(".button2").on("click", function(){
       Pselects.push("2");
       console.log("2");
       console.log(Pselects);
      });
      $(".button3").on("click", function(){
       Pselects.push("3");
       console.log("3");
       console.log(Pselects);
      }); 
      $(".button4").on("click", function(){
       Pselects.push("4");
       console.log("4");
       console.log(Pselects);
      }); 
      
});
// function Pselect(){
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
       console.log(isTrue);
    }
      compareArray(pastCCs, Pselects);

// }

//compareArray(pastCCs, Pselects);
//Pselect();
