let time = document.getElementById ("time-ms");

setInterval(() => {
    let currentTime = new Date();
    time.innerHTML = currentTime.getTime();
},1000 

)
