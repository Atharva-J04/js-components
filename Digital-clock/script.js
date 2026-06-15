
let clock=document.querySelector(".timee");
let ss = document.querySelector(".SS");
 function updateclock(){
    let now = new Date();
    let hours =now.getHours();
    let  minutes=now.getMinutes();
    let seconds=now.getSeconds();
    
    if(hours <10){
        hours=`0${hours}`;
    }
    if(minutes <10){
        minutes=`0${minutes}`;
    }
    if(seconds <10){
        seconds=`0${seconds}`;
    }
   if(hours>=12){
      ss.textContent="PM";
    }
    else{
        ss.textContent="AM";
    }
    clock.textContent=`${hours}:${minutes}:${seconds}`;
};
updateclock();
setInterval(updateclock,1000);
