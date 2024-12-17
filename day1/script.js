const API_KEY = '35b109c5192523fe2d96a665a067ab25';

function getWeather() {
  const city = document.getElementById('city').value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('weather-status').innerText = `Weather in ${data.name}`;
        document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('desc').innerText = `Description: ${data.weather[0].description}`;
      } else {
        document.getElementById('weather-status').innerText = "City not found!";
        document.getElementById('temp').innerText = "";
        document.getElementById('humidity').innerText = "";
        document.getElementById('desc').innerText = "";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Try again later.");
    });
}
