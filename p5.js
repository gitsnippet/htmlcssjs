function autoPlay(){
    var  myimg = document.getElementById("loopimg");
    if(myimg.src.match("i1.png")){
        myimg.src = "image/i2.png";
    }
    else if(myimg.src.match("i2.png")){
        myimg.src = "image/i3.png";
    }
    else if(myimg.src.match("i3.png")){
        myimg.src = "image/i4.png";
    }
    else if(myimg.src.match("i4.png")){
        myimg.src = "image/i5.png";
    }
    else{
        myimg.src = "image/i1.png";
    }
}

setInterval(autoPlay,1000)
