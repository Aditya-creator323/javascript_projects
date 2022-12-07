let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')
let result = document.getElementById('result')

let date = new Date()
console.log(date.getSeconds());

/* 
    Functionality 

    * When we click start button our timer should start 
    * When seconds reach 60 than update minute 
    * When stop is clicked stop the timer 
    * When we click reset all the values like minutes and seconds should get reset to 00:00

*/

let second = 00;
let minute = 00;
let stopTime = true;

start.onclick = () => {
    if(stopTime == true){
        stopTime = false;
        runTimer();
    }
}

stop.onclick = () => {
    if(stopTime == false){
        stopTime = true;
    }
}

const runTimer = () => {
    if(stopTime == false){
        if(second == 59){
            minute++;
            second = 0;
        }
        second++;
        if(second < 10){
            second = "0" + second;
        }
    
        result.innerText = `${minute}:${second}`
        setTimeout("runTimer()",1000);
    }
}

reset.onclick = () => {
    stopTime = true;
    second = 00;
    minute = 00;
    result.innerText = "00:00";
}



