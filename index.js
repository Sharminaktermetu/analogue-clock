
let hour=document.getElementById('clock-hour')
let minute=document.getElementById('clock-minute')
let second=document.getElementById('clock-second')
setInterval(setclock)

    function setclock(){
    
        const nowDate= new Date();
        const seconds=nowDate.getSeconds()/60;
        const minutes =(nowDate.getMinutes())/60;
        const hours=(nowDate.getHours())/12;
    
        setRotation(hour,hours);
        setRotation(minute,minutes);
        setRotation(second,seconds);
    
    }
1000;



function setRotation(element,rR){
   element.style.setProperty('--r',rR*360)
}