/* eslint-disable import/no-cycle */
import handleError from './errorAndler';

let savedCityName;
const getData = (() => {
  const getWeatherCelcius = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cbf4a4769da6bbf794164c449e463b35`, { mode: 'cors' });
    const cityData = await response.json();
    handleError.ApiErrHandler(cityData);
  };

  const getWeatherFahrenheit = async () => {
    const city = getData.savedCityName;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=cbf4a4769da6bbf794164c449e463b35`, { mode: 'cors' });
    const cityData = await response.json();
    handleError.ApiErrHandler(cityData);
  };

  return { getWeatherCelcius, getWeatherFahrenheit, savedCityName };
})();

export default getData;