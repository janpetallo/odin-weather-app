import { parseISO, format } from "date-fns";

const cityElement = document.querySelector('#currentConditions_city');
const countryElement = document.querySelector('#currentConditions_country');
const temperatureElement = document.querySelector('#currentConditions_temperature');
const dayElement = document.querySelector('#currentDay');
const highLowElement = document.querySelector('#highLowValue');
const descriptionElement = document.querySelector('#currentConditions_description');
const feelsLikeElement = document.querySelector('#feelsLikeValue');
const precipitationElement = document.querySelector('#precipitationValue');
const humidityElement = document.querySelector('#humidityValue');
const windElement = document.querySelector('#windValue');

import { convertToCelcius, convertToKmh } from './converter.js';

function displayCurrentConditions(data, isFahrenheit) {
    const today = format(parseISO(data.days[0].datetime), 'EEEE');
    const currentConditions = data.currentConditions;
    const addressParts = data.resolvedAddress.split(',').map(part => part.trim());
    
    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const city = capitalizeWords(addressParts[0]);
    const country = addressParts.slice(1).map(part => capitalizeWords(part)).join(', ');
    const currentTemp = isFahrenheit ? currentConditions.temp : convertToCelcius(currentConditions.temp);
    const feelsLike = isFahrenheit ? currentConditions.feelslike : convertToCelcius(currentConditions.feelslike);
    const precipitation = currentConditions.precipprob;
    const high =  isFahrenheit ? data.days[0].tempmax : convertToCelcius(data.days[0].tempmax);
    const low = isFahrenheit ? data.days[0].tempmin : convertToCelcius(data.days[0].tempmin);
    const conditions = currentConditions.conditions;
    const humidity = currentConditions.humidity;
    const wind = isFahrenheit ? currentConditions.windspeed : convertToKmh(currentConditions.windspeed);

    dayElement.textContent = today;
    cityElement.textContent = city;
    countryElement.textContent = country;
    temperatureElement.textContent = `${currentTemp}${isFahrenheit ? '°F' : '°C'}`;
    highLowElement.textContent = `H: ${high} / L: ${low}`;
    descriptionElement.textContent = conditions;
    feelsLikeElement.textContent = `${feelsLike} ${isFahrenheit ? '°F' : '°C'}`;
    precipitationElement.textContent = `${precipitation}%`;
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = `${wind} ${isFahrenheit ? 'mph' : 'km/h'}`;
}

export { displayCurrentConditions };





