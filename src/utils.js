const utils = (() => {
  const cleaerDom = (data) => {
    data.value = '';
  };
  const displayIconForCondition = (data) => {
    switch (data) {
      case data.weather[0].id === 800:
        console.log('hello');
        break;
      default:
        console.log('hi');
    }
  };
  return { cleaerDom, displayIconForCondition };
})();


export default utils;