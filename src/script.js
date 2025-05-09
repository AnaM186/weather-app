//⏰ Display the current date and time using JavaScript: Tuesday 16:00
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
let displayDate = document.querySelector("#current-time-day");
let now = new Date();

function displayTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
}

function showCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let city = searchInputElement.value;
  let cityInput = document.querySelector(".heading");
  cityInput.innerHTML = city.trim();
  let apiKey = "9b2b9028d41153499b7c703a42e44245";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

displayDate.innerHTML = formatDate(now);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);
