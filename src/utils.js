const utils = (() => {
  const cleaerDom = (data) => {
    data.value = '';
  };
  const displayIconForCondition = (data, cloudIndicator) => {
    if (data.weather[0].main === 'Thunderstorm') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0004.gif';
    } else if (data.weather[0].main === 'Drizzle') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0071.gif';
    } else if (data.weather[0].main === 'Rain') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0005.gif';
    } else if (data.weather[0].main === 'Snow') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0087.gif';
    } else if (data.weather[0].main === 'Clear') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0079.gif';
    } else if (data.weather[0].main === 'Clouds') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0068.gif';
    } else if (data.weather[0].main === 'Mist') {
      cloudIndicator.src = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0006.gif';
    }
  };
  return { cleaerDom, displayIconForCondition };
})();


export default utils;