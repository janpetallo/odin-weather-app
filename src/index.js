// Import our custom CSS
import "./scss/styles.scss";
import "./styles.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// import our JS functions
import { displayCurrentConditions } from "./modules/current";
import { displayWeeklyForecast } from "./modules/weekly";



async function fetchWeatherData(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=MKKNHQDK4MYP85WWXKVT6FV2V&contentType=json`,
        { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
    
    return data;

}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const city = event.target.value;
        fetchWeatherData(city).then(data => {
            displayCurrentConditions(data);
            displayWeeklyForecast(data);
        });
    }
});

// Default to Calgary
fetchWeatherData('Calgary').then(data => {
    displayCurrentConditions(data);
    displayWeeklyForecast(data);
});








