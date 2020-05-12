/* eslint-disable import/no-cycle */
import displayer from './displayer';

const handleError = (() => {
  const ApiErrHandler = (data) => {
    if (data.cod === '404') {
      displayer.displayError();
    }
    displayer.displayCityData(data);
  };

  return { ApiErrHandler };
})();

export default handleError;