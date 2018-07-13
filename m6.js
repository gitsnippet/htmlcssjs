function checkPass(){
    var value1 = document.getElementById('pass1').value;
    var value2 = document.getElementById('pass2').value;
    if( value1 == value2 ){
        alert("密码一样");
    }else{
        alert("密码不一样");
        document.write(value1);
        document.write("<br>");
        document.write("value2");
    }
}

