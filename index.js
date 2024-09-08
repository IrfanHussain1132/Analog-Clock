let minhand=document.querySelector('.min-hand');
let hourhand=document.querySelector('.hour-hand');
let sechand=document.querySelector('.sec-hand');
function clock(){
    let time=new Date();
    let hrs=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    hrs=((hrs % 12) / 12) * 360 + 270;
    hourhand.style.transform=`rotate(${hrs}deg)`;

    min=(min / 60) * 360 + 270;
    minhand.style.transform=`rotate(${min}deg)`;

    sec=(sec / 60) * 360 + 270;
    sechand.style.transform=`rotate(${sec}deg)`;

}
setInterval(clock,1000);
clock();