//empty function; code will be added later
function startButtonClick(){}

//empty function; code will be added later
function stopButtonClick(){}


//this is our new countdown function in the .js page
function runTimer(countdownElem){
    // Tracks the current countdown time
    var currTime = 50;

    // Tracks the current timeout
    var timeout = 0;

    // This value will not change and creates the 5 second delay 
    var timeoutIncrement = 5000;
    
    for(var counter=0; counter <11; counter++){
      // Decreases the countdown by 5 on the page
      setTimeout(function(){
       // if current time reaches 0 the blastoff alert will pop up and the countdown will say launch successful
       if(currTime == 0){
              alert("Blastoff!");
        countdownElem.innerHTML = "Launch successful!";
       }
       // when the current time is less than 25 the warning will pop up displaying the warning text and currTime
       else if (currTime <25){
              countdownElem.innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
       }
       // display the current time in the page
       else{
              countdownElem.innerHTML = currTime;
       }
        
        //currTime decreases by 5
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;
}
       }