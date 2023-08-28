const API_Key =  `fefde4fa336b9a2451738d7f48b6ccac`;
const form = document.querySelector('form');
const search = document.querySelector('#search')
const weather = document.querySelector('#weather');

// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);  
}
const showWeather = (data) => {
    console.log(data);
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found</h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp}° C</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}


form.addEventListener("submit", function(event){
    getWeather(search.value)
    event.preventDefault();
})