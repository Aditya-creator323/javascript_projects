/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8bf1bf7dbemsh4f5fb791b988ef6p10080ajsne1532874663a",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const curTemp = document.getElementById("temp");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

// API_KEY for maps api
let API_KEY = "8bf1bf7dbemsh4f5fb791b988ef6p10080ajsne1532874663a";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = `https://open-weather13.p.rapidapi.com/city/${city}`;

  fetch(URL, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherData = data;
      showWeatherData(weatherData);
    })
    .catch((err) => console.log(err));
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;

  cityName.innerText = `${city}`;
  getWeatherData(city);
  // CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const typeOfWeather = weatherData.weather[0].main;
  weatherType.innerText = `${typeOfWeather}`;
  curTemp.innerText = `${weatherData.main.temp}`;
  minTemp.innerText = `${weatherData.main.temp_min}`;
  maxTemp.innerText = `${weatherData.main.temp_max}`;
};
