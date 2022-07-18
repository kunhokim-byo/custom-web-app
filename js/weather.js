const API_KEY = "ee30e8a8d00460c09a15c386dc2a68a1";
function geoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
    //js가 url을 부름.
    fetch(url).then(response => response.json()).then(data => {
        const weathers = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weathers.innerText = data.weather[0].main;
        // console.log(data.name, data.weather[0].main);
    });


}





function geoError(){
    alert("not available");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);