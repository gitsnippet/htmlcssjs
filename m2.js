function popMenu(event){
    var mymenu = document.getElementById('menu-div');
    mymenu.style.left = event.clientX + "px";
    mymenu.style.top = event.clientY + "px";
    mymenu.style.display = 'block';
    return false;
}

