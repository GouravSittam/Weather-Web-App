let data;

let inputBox = document.getElementById("inputBox");
let countryName = document.getElementById("countryName");
let stateName = document.getElementById("stateName");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let temperature = document.getElementById("temperature");
let imgIcon = document.getElementById("imgIcon");
let weatherType = document.getElementById("weatherType");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Enter the city name: ");
    return;
  }

  let city = inputBox.value;

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5a538533abaa421394e140114241203&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;

  console.log(data);

  //Filling the left blanks
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temperature.innerHTML = data.current.feelslike_c;
  imgIcon.src = data.current.condition.icon;
  weatherType.innerHTML = data.current.condition.text;
};
