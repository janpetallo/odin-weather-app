// Import our custom CSS
import "./scss/styles.scss";
import "./styles.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import our JS functions
import { displayCurrentConditions } from "./modules/current";
import { displayWeeklyForecast } from "./modules/weekly";

const searchInput = document.getElementById('searchInput');
const celsiusButton = document.getElementById('celsiusButton');
const fahrenheitButton = document.getElementById('fahrenheitButton');
const errorMessage = document.getElementById('errorMessage');
let isFahrenheit = true;

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=MKKNHQDK4MYP85WWXKVT6FV2V&contentType=json`, { mode: 'cors' });
        const data = await response.json();
        console.log(data);
        errorMessage.style.display = 'none';    
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage.style.display = 'flex';
        throw error;
    }
}

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const city = event.target.value;
        fetchWeatherData(city).then(data => {
            displayCurrentConditions(data, isFahrenheit);
            displayWeeklyForecast(data, isFahrenheit);
        });
    }
});

celsiusButton.addEventListener('click', function() {
    isFahrenheit = false;
    celsiusButton.classList.add('active');
    fahrenheitButton.classList.remove('active');
    const city = searchInput.value || 'Calgary';
    fetchWeatherData(city).then(data => {
        displayCurrentConditions(data, isFahrenheit);
        displayWeeklyForecast(data, isFahrenheit);
    });
});

fahrenheitButton.addEventListener('click', function() {
    isFahrenheit = true;
    fahrenheitButton.classList.add('active');
    celsiusButton.classList.remove('active');
    const city = searchInput.value || 'Calgary';
    fetchWeatherData(city).then(data => {
        displayCurrentConditions(data, isFahrenheit);
        displayWeeklyForecast(data, isFahrenheit);
    });
});

// Initial load
// Default to Calgary
fetchWeatherData('Calgary').then(data => {
    displayCurrentConditions(data, isFahrenheit);
    displayWeeklyForecast(data, isFahrenheit);
    fahrenheitButton.classList.add('active');
});








