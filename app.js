function getweather(){
    let country = document.getElementById("country")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&appid=a212125074ae7c5998aa06e818acf0d7&units=metric`)
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    let des = data.weather[0].description;
    let imag = document.getElementById("imag");
    if (des === "clear sky") {
        imag.src = "clear-sky.png"
    }
    if (des === "few clouds") {
        imag.src = "cloudy.png"
    }
    if (des === "scattered clouds") {
        imag.src = "clouds.png"
    }
    if (des === "shower rain") {
        imag.src = "rainy-day (1).png"
    }
    if (des === "thunderstorm") {
        imag.src = "thunder.png"
    }
    if (des === "snow") {
        imag.src = "snow.png"
    }
    if (des === "mist") {
        imag.src = "mist.png"
    }
    if (des === "overcast clouds") {
        imag.src = "overcast.png"
    }

    

    let temprature = document.getElementById("temprature")
    let city = document.getElementById("city")
    let Humidity = document.getElementById("Humidity")
    let Wind = document.getElementById("Wind")
    let Precipitation = document.getElementById("Precipitation")
    city.innerHTML = country.value
    temprature.innerHTML = data.main.temp
    Humidity.innerHTML = `${data.main.humidity} %`
    Wind.innerHTML = `${data.wind.speed} km/h`
    Precipitation.innerHTML = `${data.weather[0].description}`
})
  .catch(function(err) {
    console.log("Error:", err);
  });
}
