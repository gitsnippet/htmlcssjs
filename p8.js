var imgCount = 4;
var imgWidth = 800;
function startMove() {
    var box = document.getElementById("box");
    if(box.offsetLeft <= -1*imgWidth*(imgCount-1)){
        moveToStart();
    }
    else{
        moveToNext();
    }
}

function moveToNext(){
    box.style.transition = "all 2s ease-in-out";
    box.style.left = box.offsetLeft - imgWidth + "px";
}

function moveToPrev(){
    box.style.transition = "all 2s ease-in-out";
    box.style.left = box.offsetLeft + imgWidth + "px";
}

function moveToStart() {
    box.style.transition = "all 2s ease-in-out";
    box.style.left = box.offsetLeft + (imgCount-1)*imgWidth + "px";
}

function showButton(){
    document.getElementById("prev").style.display = "block";
    document.getElementById("next").style.display = "block";
}

function hideButton(){
    document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = "none";
}



