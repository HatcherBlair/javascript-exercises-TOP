const convertToCelsius = function(temperature) {
  // Fromula = (F - 32) * 5/9
  return Math.round(((temperature - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  // Formula = (C * 9/5) + 32
  return Math.round(((temperature * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
