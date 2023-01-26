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

      // Decreases the countdown by 5 on the page
      setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       setTimeout(function(){
        countdownElem.innerHTML = currTime;
               currTime = currTime - 5;
       }, timeout);
       timeout = timeout + timeoutIncrement;

       // This is the last time we need to call setTimeout, currTime is now 0
       setTimeout(function(){
           alert("Blastoff!");
        countdownElem.innerHTML = "Launch successful!";
       }, timeout);

}