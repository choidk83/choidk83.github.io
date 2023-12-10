// const API_KEY = "ae075f90449369d0be86a2dbc826c7cf";
// import config from "config/apikey.js"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = config.apiKey;
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = `${data.name}`;
        weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}℃`;
    });
}

function onGeoError() {
    alert("날씨를 불러오는데 실패하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);