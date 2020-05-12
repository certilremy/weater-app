const utils = (() => {
  const cleaerDom = (data) => {
    data.value = '';
  };
  const displayIconForCondition = (data, cloudIndicator) => {
    if (data.weather[0].main === 'Thunderstorm') {
      cloudIndicator.innerHTML = '<i class="fas fa-poo-storm" style =\'color: #F28C38;\' ></i>';
    } else if (data.weather[0].main === 'Drizzle') {
      cloudIndicator.innerHTML = '<i class="fas fa-cloud-showers-heavy" style =\'white: #F28C38;\' ></i>';
    } else if (data.weather[0].main === 'Rain') {
      cloudIndicator.innerHTML = '<i class="fas cloud-rain" style =\'color: white;\' ></i>';
    } else if (data.weather[0].main === 'Snow') {
      cloudIndicator.innerHTML = '<i class="fas snowflake" style =\'color: white;\' ></i>';
    } else if (data.weather[0].main === 'Clear') {
      cloudIndicator.innerHTML = '<i class="fas fa-sun" style =\'color: #F28C38;\' ></i>';
    } else if (data.weather[0].main === 'Clouds') {
      cloudIndicator.innerHTML = '<i class="fas fa-cloud" style =\'color: white;\' ></i>';
    } else if (data.weather[0].main === 'Mist') {
      cloudIndicator.innerHTML = '<i class="fas fa-smog" style =\'color: white;\' ></i>';
    }
  };
  return { cleaerDom, displayIconForCondition };
})();


export default utils;