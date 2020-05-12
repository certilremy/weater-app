const displayer = (() => {
  const applicationHelp = document.getElementById('application-help');
  const cityname = document.getElementById('city-name');
  const temp = document.getElementById('temp');
  const tempMax = document.getElementById('temp_max');
  const tempMin = document.getElementById('temp_min');
  const weatherDesct = document.getElementById('weather-desc');
  const wendSpeed = document.getElementById('wind-speed');
  const displayCityData = (data) => {
    console.log(data);
    applicationHelp.style.display = 'none';
    cityname.innerHTML = `Weather for ${data.name} country code ${data.sys.country} `;
    weatherDesct.innerHTML = `Weather info: ${data.weather[0].description}`;
    temp.innerHTML = `Temperature: ${data.main.temp}`;
    tempMax.innerHTML = `Temperature max: ${data.main.temp_max}`;
    tempMin.innerHTML = `Temperature min: ${data.main.temp_min}`;
    wendSpeed.innerHTML = `Wind speed: ${data.wind.speed}`;
  };

  const displayError = () => {
    cityname.innerHTML = "Sorry we can't find weather for the provided city";
    // listData.style.display = 'none;';
  };
  return { displayCityData, displayError };
})();

export default displayer;