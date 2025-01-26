// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


async function fetchWeatherData() {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/calgary?unitGroup=us&key=MKKNHQDK4MYP85WWXKVT6FV2V&contentType=json`);
    const data = await response.json();
    console.log(data);

}

fetchWeatherData();








