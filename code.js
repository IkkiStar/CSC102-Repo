//the playSound function
function playSound(soundSrc){
       var sound = document.createElement("audio");
       sound.src = soundSrc;
       //adds controls to the play sound function. User can play or pause the audio.
       sound.setAttribute("controls", "auto");
       document.body.appendChild(sound);
       play = function(){
              sound.play();
       }
       stop = function(){
              sound.pause();
       }
}


var arrInterval = new Array();


//empty function; code will be added later
function startButtonClick(){
       //dont let the user press the start button while countdown is running
       document.getElementById("btnStart").disabled = true;
       document.getElementById("btnStop").disabled = false;

       // This is a short hand to point to the count down element
       var countdownElem = document.getElementById("countdown");
       runTimer(countdownElem);
}

//empty function; code will be added later
function stopButtonClick(){
       //dont let the user press the stop button when already stopped
       document.getElementById("btnStart").disabled = false;
       document.getElementById("btnStop").disabled = true;

       //all intervals when the countdown can be stopped
       for (counter = 0; counter <11; counter++){
              clearTimeout(arrInterval[counter]);
       }
}

//this function will ask for a first name, last name, and badge number
//the names need to be less than 20 characters and the badge number nedds to be 3 characters or less than 1000
function getUserInput(){
       var fullName = "";
       var badgeNumber = 0;
       
       do{
        var firstName = prompt("Please enter first name (under 10 characters): ");
        var lastName = prompt("Please enter last name (under 10 characters): ");

        fullName = firstName + " " + lastName;

        if (fullName.length > 20){
              alert("Please enter a shorter name. Length was: " + fullName.length);
        }
       }
       while(fullName.length > 20);

       do{
              badgeNumber = prompt("Please enter your badge number (3 digits max): ");

              if (badgeNumber > 999){
                     alert("Please enter a badge number with 3 digits or fewer.");
              }
       }
       while(badgeNumber >999);

       return fullName + " " + badgeNumber;
}

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
      arrInterval[counter] = setTimeout(function(){
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