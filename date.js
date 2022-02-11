const countdown = () => {
    const countdate = new Date('March 24, 2022 00:00:00').getTime();
    const aaj = new Date().getTime();
    const gap = countdate - aaj;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second)
   
    document.querySelector(".days").innerHTML = textDay;
    document.querySelector(".hours").innerHTML = textHour;
    document.querySelector(".minutes").innerHTML = textMinute;
    document.querySelector(".seconds").innerHTML = textSecond;


};

setInterval(countdown, 1000);