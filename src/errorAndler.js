const handleError = (() => {
  const ApiErrHandler = (data) => {
    if (data.cod === '404') {
      //console.log(data.message);
      //console.log("Sorry we can't find data for this city");
      // return "Sorry we can't find data for this city";
    }
    console.log(data);
    //displayer.displayCityData(data);
  };

  return { ApiErrHandler };
})();

export default handleError;