import { is } from "date-fns/locale";

const cityElement = document.querySelector('#currentConditions_city');
const countryElement = document.querySelector('#currentConditions_country');
const temperatureElement = document.querySelector('#currentConditions_temperature');
const highLowElement = document.querySelector('#highLowValue');
const descriptionElement = document.querySelector('#currentConditions_description');
const feelsLikeElement = document.querySelector('#feelsLikeValue');
const precipitationElement = document.querySelector('#precipitationValue');
const humidityElement = document.querySelector('#humidityValue');
const windElement = document.querySelector('#windValue');

function convertToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

function convertToKmh(mph) {
    return (mph * 1.60934).toFixed(1);
}

function displayCurrentConditions(data, isFahrenheit) {
    const currentConditions = data.currentConditions;
    const [city, stateProvince, country] = data.resolvedAddress.split(',');
    const currentTemp = isFahrenheit ? currentConditions.temp : convertToCelcius(currentConditions.temp);
    const feelsLike = isFahrenheit ? currentConditions.feelslike : convertToCelcius(currentConditions.feelslike);
    const precipitation = currentConditions.precipprob;
    const high =  isFahrenheit ? data.days[0].tempmax : convertToCelcius(data.days[0].tempmax);
    const low = isFahrenheit ? data.days[0].tempmin : convertToCelcius(data.days[0].tempmin);
    const conditions = currentConditions.conditions;
    const humidity = currentConditions.humidity;
    const wind = isFahrenheit ? currentConditions.windspeed : convertToKmh(currentConditions.windspeed);

    cityElement.textContent = city;
    countryElement.textContent = country;
    temperatureElement.textContent = isFahrenheit ? `${currentTemp}°F` : `${currentTemp}°C`;
    highLowElement.textContent = `H: ${high} / L: ${low}`;
    descriptionElement.textContent = conditions;
    feelsLikeElement.textContent = isFahrenheit ? `${feelsLike}°F` : `${feelsLike}°C`;
    precipitationElement.textContent = `${precipitation}%`;
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = isFahrenheit ? `${wind} mph` : `${wind} km/h`;
}

export { displayCurrentConditions };





