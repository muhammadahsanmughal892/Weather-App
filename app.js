const para = document.querySelector("#show-weather");
const humidity = document.querySelector("#show-humidity");
const WindSpeed = document.querySelector("#show-windSpeed");
const feels = document.querySelector("#feels-Like");
const cloud = document.querySelector("#cloud-cover");
const direction = document .querySelector("#wind-direction");
const pressure = document.querySelector("#pressure");
const weather = document.querySelector("#weather-condition");
const img = document.querySelector("#weather-icon");

async function getWeather(event) {
  try {
  event.preventDefault();

  const city = document.querySelector("#city-input").value;
   if (!city) return;

  para.innerHTML = "loading..."

  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );

  const data = response.data;

  console.log("response: ", data);

  if (data.error) {
    throw new Error(data.error.message);
  }

  img.src = data.current.condition.icon;
  para.innerHTML = "Show Weather: "+ response.data.current.temp_c;
  humidity.innerHTML = "Humidity: " +response.data.current.humidity;
  WindSpeed.innerHTML = "WindSpeed: " +response.data.current.wind_kph;
  feels.innerHTML = "Feels Like: "+response.data.current.feelslike_c;
  cloud.innerHTML = "Clouds Cover: "+response.data.current.cloud;
  direction.innerHTML = "Wind Direction: "+response.data.current.wind_dir;
  pressure.innerHTML = "Pressure: "+response.data.current.pressure_mb;
  weather.innerHTML = "Weather Condition: "+response.data.current.condition.text;
  } catch (err) {
    console.log(err);

    if(err.response && err.response.status === 400) {
      para.innerHTML ="City not found "
    } else {
      para.innerHTML = err.message;
    }

    
  }
}

console.log("File runing till the end");