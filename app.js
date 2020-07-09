var min = 0;
var sec = 0;
var msec = 0;
var interval;
var elemmsec = document.getElementById("msec");
var elemsec = document.getElementById("sec");
var elemmin = document.getElementById("min");

function timer1(){
    msec++;
    
    elemmsec.innerHTML = msec;
    if(msec>=100){
        msec = 0;
        sec++
        elemsec.innerHTML = sec;

    }
    else if(sec>=60){
        sec = 0;
        min++;
        elemmin.innerHTML = min;

    }
}
function start(){
    // alert("hello");
    interval = setInterval(timer1,10)
    
    
}

function pause(){
    // alert("this is pause");
    clearInterval(interval)
}

function clear1(){
    // alert("this is pause")
    pause();
    min = 0;
    sec = 0;
    msec  =0;
    elemmin.innerHTML = "0";
    elemsec.innerHTML = "0"
    elemmsec.innerHTML = "0"
}
function lap(){
    alert("this is lap")
}
