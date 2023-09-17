function city() {
  let cities = document.getElementById("search").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`
  )
    .then((result) => result.json())
    .then((data) => weatherData(data))
    .catch(() => alert("Invalid Input"));
}

function weatherData(data) {
  api2.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
  api1.innerHTML = ``;
  api3.innerHTML = `Feels like ${data.main.feels_like.toFixed(1)}°C`;
  api4.innerHTML = `${data.name}, ${data.main.temp.toFixed(1)}°C`;
  api5.innerHTML = `${data.weather[0].description}`;
  api6.innerHTML = `${data.main.pressure}hPa`;
  api7.innerHTML = `${data.main.humidity}%`;
  api8.innerHTML = `${data.wind.speed.toFixed(1)}m/s`;
  api9.innerHTML = `${(data.visibility / 1000).toFixed(1)}km`;
}
