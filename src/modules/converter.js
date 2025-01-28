
function convertToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function convertToKmh(mph) {
    return (mph * 1.60934).toFixed(1);
}

export { convertToCelcius, convertToKmh };

