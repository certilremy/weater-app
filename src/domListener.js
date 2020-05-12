import getData from './getData';
import utils from './utils';

const domListener = (() => {
  const listenForQuery = () => {
    const form = document.getElementById('city-name-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const cityquery = document.getElementById('city-name-input');
      getData.getWeatherCelcius(cityquery.value);
      utils.cleaerDom(cityquery);
    });
  };
  return { listenForQuery };
})();

export default domListener;