window.onload = function()
{
    var imgs = ["image/i1.png","image/i2.png","image/i3.png","image/i4.png","image/i5.png"];
    var bs = document.getElementsByTagName("button");
    for(var i =0;i<bs.length;i++){
        bs[i].addEventListener("click",showImg);
    }
    var pLeft =document.getElementById("left");
    pLeft.addEventListener("click",prevImg);
    var pRight =document.getElementById("right");
    pRight.addEventListener("click",nextImg);

    var currentIndex = 0;
    var prevIndex ;
    function displayImg(src){
        document.getElementById("loopImg").src = src;
    }

    displayImg(imgs[0]);

    function showImg(e)
    {
        x = +e.target.getAttribute("order");
        prevIndex = currentIndex;
        currentIndex = x-1;
        displayImg(imgs[currentIndex]);
        document.getElementsByTagName("button")[currentIndex].style.backgroundColor = "gray";
        document.getElementsByTagName("button")[prevIndex].style.backgroundColor = "white";
    }  

    function  nextImg(e)
    {
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) %imgs.length;
        displayImg(imgs[currentIndex]);
        document.getElementsByTagName("button")[currentIndex].style.backgroundColor = "gray";
        document.getElementsByTagName("button")[prevIndex].style.backgroundColor = "white";
    }

    function prevImg(e)
    {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + imgs.length) %imgs.length;
        displayImg(imgs[currentIndex]);
        document.getElementsByTagName("button")[currentIndex].style.backgroundColor = "gray";
        document.getElementsByTagName("button")[prevIndex].style.backgroundColor = "white";
    }
}

