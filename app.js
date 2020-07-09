var min = 0;
var sec = 0;
var msec = 0;
var interval;
var elemmsec = document.getElementById("msec");
var elemsec = document.getElementById("sec");
var elemmin = document.getElementById("min");
var lap1 = document.getElementById("lap1")
var timerStatus = true;
var count = 0;

function timer1(){    
    msec++;
    if(msec==100){
        elemmsec.innerHTML = "00";
    }
    else if(msec>9){
        elemmsec.innerHTML = msec;
    }
    else{
        elemmsec.innerHTML = "0"+msec;
    }    
    
    if(msec>=100){
        msec = 0;
        sec++
        if(sec>9){
            elemsec.innerHTML = sec;
            
        }
        else{
            elemsec.innerHTML = "0"+sec;
        }

    }
    else if(sec>=60){
        sec = 0;
        min++;
        if(min>9){
            elemmin.innerHTML = min;
        }
        else{
            elemmin.innerHTML = "0"+min;
        }
        

    }
}
function start(){
    // alert("hello");
    if(timerStatus){
        interval = setInterval(timer1,10)
        timerStatus = false;
    }
    else{
        alert("stop watch is already running")
        // timerStatus = false
    }
    
    
    
}

function pause(){
    // alert("this is pause");
    clearInterval(interval);
    
}

function clear1(){
    // alert("this is pause")
    pause();
    min = 0;
    sec = 0;
    msec  =0;
    elemmin.innerHTML = "0"+min;
    elemsec.innerHTML = "0"+sec
    elemmsec.innerHTML = "0"+msec
    lap1.innerHTML ="";
    timerStatus = true;
    count=0;
}
function lap(){
    if(timerStatus==true){

    }
    else{
        count++;
        // alert("this is lap")        
        lap1.innerHTML += "<p class='text-center text-light'>Lap "+count+" "+min+":"+sec+":"+msec+"<p>"
        // document.write("<p class='text-center'>Lap "+min+":"+sec+":"+msec+"<p>")
    }
    
}
