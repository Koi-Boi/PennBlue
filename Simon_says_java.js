var pastCCs = [];
var Pselects = [];
function Cselect(){
    var rand = Math.floor(Math.random() *3)+1;
    pastCCs.push(rand);
}
select();

function Pselect(){
   $("button1").on("click", function(){
     Pselects.push(1) 
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