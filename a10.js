function timeUpdate(){
    var video = document.getElementById('video');
    document.getElementById('ptime').innerHTML = video.currentTime;
}


function durationChange(){
    var video = document.getElementById('video');
    document.getElementById('duration').innerHTML = video.duration;
}

function seekVideo(){
    document.getElementById('video').currentTime = parseFloat(document.getElementById('seekText').value);
}
    
