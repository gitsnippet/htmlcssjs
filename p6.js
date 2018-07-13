var  imgs = ["image/i1.png","image/i2.png","image/i3.png","image/i4.png","image/i5.png"];
var  myindex = 0;
function autoPlay(){
    if(myindex == imgs.length-1){
        myindex = 0; 
    }
    var  myimg = document.getElementById("loopimg");
    myimg.src = imgs[myindex];
    myindex++;
}
setInterval(autoPlay,1000)
