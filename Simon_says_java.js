
var pastCCs = [];
var pastPCs = [];
function Cselect(){
    var rand = Math.floor(Math.random() *3)+1;
    pastCCs.push(rand);
    console.log(pastCCs);
}
Cselect();
$(document).ready(function(){
    $(".button1").on("click", function(){
        pastPCs.push("1");
        console.log("1");
        console.log(pastPCs);
      });
      $(".button2").on("click", function(){
       pastPCs.push("2");
       console.log("2");
       console.log(pastPCs);
      });
      $(".button3").on("click", function(){
       pastPCs.push("3");
       console.log("3");
       console.log(pastPCs);
      }); 
      $(".button4").on("click", function(){
       pastPCs.push("4");
       console.log("4");
       console.log(pastPCs);
      }); 
      
});
  function compareArray(compArr, playerArr){
        var isTrue = true;
        // For each element of both arrays
        for(var i = 0 ; i <= compArr.length; i++){
             // compare if they are the same
                // if they are different, return false
            if(compArr[compArr.length] != playerArr[playerArr.length]){
                isTrue = false;
            }
            console.log(isTrue)
         return isTrue;
        }
        
    }
compareArray(pastCCs, pastPCs);
//compareArray(pastCCs, pastPCs);

