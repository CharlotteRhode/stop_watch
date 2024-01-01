const timerElement = document.getElementById("timer");
const startButtonElement = document.getElementById("start");
const stopButtonElement = document.getElementById("stop");
const resetButtonElement = document.getElementById("reset");

let beginValue = 0;
let elapsedValue = 0;
let interval;



function startTimer(){
   beginValue = Date.now() - elapsedValue;

   interval = setInterval( () =>{
       elapsedValue = Date.now() - beginValue;
       timerElement.textContent = formattedTime(elapsedValue);
   }, 10);

   startButtonElement.disabled = true;
   stopButtonElement.disabled = false;
}

function stopTimer(){
    clearInterval(interval);
    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;
}

function resetTimer() {
    clearInterval(interval);
    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;

    elapsedValue = 0;
    timerElement.textContent = "00:00:00";
}


function formattedTime(elapsedValue){
    const miliseconds = Math.floor((elapsedValue % 1000) / 10);
    const seconds = Math.floor((elapsedValue % (1000 * 60) )/ 1000);
    const minutes = Math.floor( (elapsedValue % (1000 * 60 * 60)) / (1000*60));
    const hours = Math.floor( elapsedValue / (1000*60*60) );

    return (
        (hours ? (hours>9 ? hours : "0"+hours) : "00" )
        + ":" +
        (minutes ? (minutes>9 ? minutes : "0"+minutes) : "00" )
        + ":" +
        (seconds ? (seconds>9 ? seconds : "0"+seconds) : "00" )
        + "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
    );
}



startButtonElement.addEventListener("click", startTimer);
stopButtonElement.addEventListener("click", stopTimer);
resetButtonElement.addEventListener("click", resetTimer);