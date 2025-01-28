const cityElement = document.querySelector('#currentConditions_city');
const countryElement = document.querySelector('#currentConditions_country');
const temperatureElement = document.querySelector('#currentConditions_temperature');
const descriptionElement = document.querySelector('#currentConditions_description');
const feelsLikeElement = document.querySelector('#currentConditions_feelsLike');
const humidityElement = document.querySelector('#currentConditions_humidity');
const windElement = document.querySelector('#currentConditions_wind');

function displayCurrentConditions(data) {
    const currentConditions = data.currentConditions;
    const [city, stateProvince, country] = data.resolvedAddress.split(',');
    const currentTemp = currentConditions.temp;
    const feelsLike = currentConditions.feelslike;
    const conditions = currentConditions.conditions;
    const humidity = currentConditions.humidity;
    const wind = currentConditions.wind;

    cityElement.textContent = city;
    countryElement.textContent = country;
    temperatureElement.textContent = currentTemp;
    descriptionElement.textContent = conditions;
    feelsLikeElement.textContent = feelsLike;
    humidityElement.textContent = humidity;
    windElement.textContent = wind;
}

export { displayCurrentConditions };





