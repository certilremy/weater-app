import utils from './utils';

const displayer = (() => {
  const applicationHelp = document.getElementById('application-help');
  const cityname = document.getElementById('city-name');
  const weatherSkyInfo = document.getElementById('weather-sky-info');
  const cloudGif = document.getElementById('cloud-gif');
  const temp = document.getElementById('temp');
  const tempMax = document.getElementById('temp_max');
  const tempMin = document.getElementById('temp_min');
  const img = document.getElementById('city-image-condition');
  const wendSpeed = document.getElementById('wind-speed');
  const displayCityData = (data) => {
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    applicationHelp.style.display = 'none';
    cityname.innerHTML = `Weather for ${data.name} country code ${data.sys.country} `;
    weatherSkyInfo.innerHTML = `${data.weather[0].description}`;
    temp.innerHTML = `Temperature: ${data.main.temp}`;
    tempMax.innerHTML = `Temperature max: ${data.main.temp_max}`;
    tempMin.innerHTML = `Temperature min: ${data.main.temp_min}`;
    wendSpeed.innerHTML = `Wind speed: ${data.wind.speed}`;
    utils.displayIconForCondition(data, cloudGif);
  };

  const displayError = () => {
    cityname.innerHTML = "Sorry we can't find weather for the provided city";
    // listData.style.display = 'none;';
  };
  return { displayCityData, displayError };
})();

export default displayer;