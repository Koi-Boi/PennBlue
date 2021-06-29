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