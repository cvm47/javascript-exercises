const convertToCelsius = function(fahrenheit) {
  let finalProduct = (fahrenheit - 32) * 5/9
  return Math.round(finalProduct * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let finalProduct = (celsius * 9/5) + 32
  return Math.round(finalProduct * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
