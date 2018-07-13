function createOneSnow(){
    var leftX = Math.random()*window.innerWidth;
    var topY = Math.random()*window.innerHeight;
    var snowDiv = document.createElement("div");
    snowDiv.style.position = "fixed";
    snowDiv.style.left = leftX + "px";
    snowDiv.style.top = topY + "px";
    var targetImg= document.createElement("img");
    targetImg.src = 'image/white-snow.png';
    targetImg.style.width = '20px'; 
    snowDiv.appendChild(targetImg);
    document.body.appendChild(snowDiv);
}

function createManySnow(){
    for (var i = 0 ; i < 20 ; i++) {
        createOneSnow();        
    }
}


function startFly(){
    var allSnows = document.getElementsByTagName("div");
    snowLength = allSnows.length;
        for (var i = 0 ; i < snowLength; i++) {
            var randomTop = Math.random()*6;
            allSnows[i].style.top = allSnows[i].offsetTop + randomTop + "px";
            if( allSnows[i].offsetTop % 500 == 0 ) {
               createOneSnow();
            }
            if(allSnows[i].offsetTop > window.innerHeight){
                allSnows[i].remove();
                createOneSnow();
            }
        }
        document.getElementById("startButton").disabled = "disabled";
        document.getElementById("stopButton").disabled = "";
}
 
function stopFly(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = "";
    document.getElementById("stopButton").disabled = "disabled";
}
    
function removeSnow(){
    var allSnows = document.getElementsByTagName("div");
    var snowLength =allSnows.length;
    for (var i = 0; i < snowLength; i++) {
        allSnows[0].remove();        
    }
}

window.onload=function(){
    createManySnow();
    setInterval(startFly,100);
}

