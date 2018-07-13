function plus(){
    var total = parseInt(document.getElementById("total").value);
    if(total > 5998){
        document.getElementById("total").value = 5999;
    }
    else{
        document.getElementById("total").value = total + 1;
    }
}

function minus(){
    var total =parseInt(document.getElementById("total").value);
    if(total <2){
        document.getElementById("total").value = 1;
    }
    else{
        document.getElementById("total").value = total - 1;
    }
}

function check(){
    var total = document.getElementById("total");
    var input = total.value;
    var pattern = new RegExp("^\\d{1,4}$");
    if(!pattern.test(input)){
        total.value = input.substring(0,input.length-1);
    }
}


var interval = null;
var totalSecond = 0;
var isPaused = false;
var isStarted = false;
function start(){
    isStarted = true;
    var totalMinute = parseInt(document.getElementById("total").value);
    if(isPaused == false){
        totalSecond = totalMinute*60;
        interval = setInterval("timerDown()",1000);
    }
}

function timerDown(){
    if(totalSecond <=0){
        clearInterval(interval);
        document.getElementById("done").play();
    }
    var hour = Math.floor(totalSecond/3600);
    if(hour < 10){
        hour = "0" + hour;
    }

    var minute = Math.floor((totalSecond-hour*3600)/60);
    if(minute < 10){
        minute = "0" + minute;
    }

    var second = totalSecond%60;
    if(second < 10){
        second = "0" + second;
    }

    document.getElementById("hour").innerHTML = hour.toString();
    document.getElementById("minute").innerHTML = minute.toString();
    document.getElementById("second").innerHTML = second.toString();
    totalSecond--;
}

function pause(){
    if(isStarted){
        isPaused = true;
    }
    clearInterval(interval);
}

function refresh(){
    window.location.reload();
}



