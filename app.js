'use strict';

const containerText = document.querySelector('.container-inside');

const wantedTime = new Date("March 24, 2022 12:00:00").getTime();

const x = setInterval(() => {
    let currentTime = new Date().getTime();
    let timeLeft = wantedTime - currentTime;
    
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    containerText.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";;

    if (timeLeft < 0) {
        clearInterval(x);
        containerText.innerHTML = "EXPIRED";
      }
}, 1000);