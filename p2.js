function clearResult(){
    document.getElementById("result").value = "";
}

function backSpace(){
    var result = document.getElementById("result").value;
    var newResult = result.substring(0,result.length-1);
    document.getElementById("result").value = newResult;
}

function clickButton(){
    var result = document.getElementById("newResult").value;
    if (result.length <= 17) {
        document.getElementById().value += number;
    }
    else{
        alert("本计算器仅仅允许输入18位长度");
    }
}

function calcResult(){
    var result = document.getElementById('result');
    try {
        if (result.value.length >=3) {
            result.value = eval(result.value);            
        }
    } catch (e) {
        result.value = "你输入的表达式有误!";
    }
}

function switchSymbol(){
    var result = document.getElementById('result');
    var code = result.value.charCodeAt(0);
    if (code == 45 ) {
        result.value = result.value.substring(1);        
    }
    else{
        result.value = "-" + result.value;
    }
}

var isInputSymbol = false;

function clickSymbol(symbol){
    if (document.getElementById('result').value.length >0 ) {
        if(
        
    } else {
        
    }
