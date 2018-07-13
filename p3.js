function myTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var hourDeg = hour%12*30 + minute*0.5 ;
    document.getElementById("hour").style.transform = "rotate(" + hourDeg + "deg)";    
    document.getElementById("minute").style.transform = "rotate(" + minute*6 + "deg)";
    document.getElementById("second").style.transform = "rotate(" + second*6 + "deg)";
}

setInterval(myTime,1000);


