/* eslint-disable import/no-cycle */
import utils from './utils';
import domListener from './domListener';

const displayer = (() => {
  const infoWeatherContainer = document.querySelector('.info-weather');
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
    infoWeatherContainer.style.display = 'block';
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    applicationHelp.style.display = 'none';
    cityname.innerHTML = `Weather for ${data.name} country code ${data.sys.country} `;
    weatherSkyInfo.innerHTML = `${data.weather[0].description}`;
    temp.innerHTML = `Temperature: ${data.main.temp}`;
    tempMax.innerHTML = `Temperature max: ${data.main.temp_max}`;
    tempMin.innerHTML = `Temperature min: ${data.main.temp_min}`;
    wendSpeed.innerHTML = `Wind speed: ${data.wind.speed}`;
    utils.displayIconForCondition(data, cloudGif);
    domListener.listenForConversion();
  };

  const displayError = () => {
    cityname.innerHTML = "Sorry we can't find weather for the provided city";
    utils.clearDomError(img, weatherSkyInfo, temp, tempMax, tempMin, wendSpeed, cloudGif);
  };
  return { displayCityData, displayError };
})();

export default displayer;