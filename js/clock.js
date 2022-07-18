const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");


    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//getclock 즉시 호출. 안쓰면 00:00:00 이 보이고 나서 1초후에 시작됨. 
getClock();
setInterval(getClock, 1000);
// setTimeout(hello, 5000);
