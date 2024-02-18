const convertToCelsius = function (fahrenheitTemperature) {
    let celsius = (fahrenheitTemperature - 32) * (5 / 9);

    // Convert to number and keep one decimal place if needed
    if (celsius !== 0 && celsius % 1 !== 0) {
        celsius = Number(celsius.toFixed(1));
    }

    return celsius;
};

const convertToFahrenheit = function (celsiusTemperature) {
    let fahrenheit = celsiusTemperature * (9 / 5) + 32; 

    // Convert to number and keep one decimal place if needed
    if (fahrenheit !== 0 && fahrenheit % 1 !== 0) {
        fahrenheit = Number(fahrenheit.toFixed(1));
    } 

    return fahrenheit;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
