import getData from './getData';

const domListener = (() => {
  const listenForQuery = () => {
    const form = document.getElementById('city-name-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const cityquery = document.getElementById('city-name-input').value;
      getData.getWeatherCelcius(cityquery);
    });
  };
  return { listenForQuery };
})();

export default domListener;