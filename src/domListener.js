import getData from './getData';
import utils from './utils';

const domListener = (() => {
  const listenForQuery = () => {
    const form = document.getElementById('city-name-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const cityquery = document.getElementById('city-name-input');
      getData.savedCityName = cityquery.value;
      getData.getWeatherCelcius(cityquery.value);
      utils.cleaerDom(cityquery);
    });
  };

  const listenForConversion = () => {
    const fahr = document.getElementById('fahrenheit');
    fahr.addEventListener('click', getData.getWeatherFahrenheit);
  };
  return { listenForQuery, listenForConversion };
})();

export default domListener;