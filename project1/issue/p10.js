window.onload = function()
{
    var imgs = ["image/i1.png","image/i2.png","image/i3.png","image/i4.png","image/i5.png"];
    bs = document.getElementsByTagName("button");
    for(var i =0;i<bs.length;i++){
        bs[i].addEventListener("click",showImg);
    }
    pLeft =document.getElementById("left");
    pLeft.addEventListener("click",prevImg);
    pRight =document.getElementById("right");
    pRight.addEventListener("click",nextImg);


    function showImg(e)
    {
        x = e.target.getAttribute("order");
        document.getElementById("loopImg").setAttribute("src",imgs[x-1]);
    }  

    function  nextImg(e)
    {
        x = e.target.getAttribute("order");
        alert(x);
        if(x == imgs.length-1) 
        {
            x = 0;
        }
        else
        {
            x = x+1;
        }
        document.getElementById("loopImg").setAttribute("src",imgs[x]);
    }

    function prevImg(e)
    {
        x = e.target.getAttribute("order");
        if(x == 0) 
        {
            x = imgs.length-1;
        }
        else
        {
            x = x-1;
        }
        document.getElementById("loopImg").setAttribute("src",imgs[x]);
    }
}

