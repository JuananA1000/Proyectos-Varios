// Aquí tu js
const apiKey = 'e8f81aa67ccbad4b1a4835c70e8c345a';
const city = 'London';
const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Weather data:', data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });