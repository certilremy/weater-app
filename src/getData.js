import handleError from './errorAndler';

let savedCityName;
const getData = (() => {
  const getWeatherCelcius = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fdd680c9db12c88b556332cfd0c4de11`, { mode: 'cors' });
    const cityData = await response.json();
    handleError.ApiErrHandler(cityData);
  };

  const getWeatherFahrenheit = async () => {
    const city = getData.savedCityName;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fdd680c9db12c88b556332cfd0c4de11`, { mode: 'cors' });
    const cityData = await response.json();
    handleError.ApiErrHandler(cityData);
  };

  return { getWeatherCelcius, getWeatherFahrenheit, savedCityName };
})();

export default getData;