const cityElement = document.querySelector('#currentConditions_city');
const countryElement = document.querySelector('#currentConditions_country');
const temperatureElement = document.querySelector('#currentConditions_temperature');
const highLowElement = document.querySelector('#highLowValue');
const descriptionElement = document.querySelector('#currentConditions_description');
const feelsLikeElement = document.querySelector('#feelsLikeValue');
const precipitationElement = document.querySelector('#precipitationValue');
const humidityElement = document.querySelector('#humidityValue');
const windElement = document.querySelector('#windValue');

function displayCurrentConditions(data) {
    const currentConditions = data.currentConditions;
    const [city, stateProvince, country] = data.resolvedAddress.split(',');
    const currentTemp = currentConditions.temp;
    const feelsLike = currentConditions.feelslike;
    const precipitation = currentConditions.precipprob;
    const high = data.days[0].tempmax;
    const low = data.days[0].tempmin;
    const conditions = currentConditions.conditions;
    const humidity = currentConditions.humidity;
    const wind = currentConditions.windspeed;

    cityElement.textContent = city;
    countryElement.textContent = country;
    temperatureElement.textContent = currentTemp;
    highLowElement.textContent = `H: ${high} / L: ${low}`;
    descriptionElement.textContent = conditions;
    feelsLikeElement.textContent = feelsLike;
    precipitationElement.textContent = `${precipitation}%`;
    humidityElement.textContent = humidity;
    windElement.textContent = wind;
}

export { displayCurrentConditions };





