const time = document.getElementById("sweet");
function timer(){
    var start = new Date(2024,0,28,20,13);
    var tim = new Date() - start;
    var days = Math.floor(tim/1000/60/60/24);
    var hours = Math.floor(tim/1000/60/60%24);
    var minutes = Math.floor(tim/1000/60%60);
    var seconds = Math.floor(tim/1000%60);

    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
timer();
setInterval(timer, 1000);