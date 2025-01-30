import { parseISO, format } from "date-fns";
import { convertToCelcius, convertToKmh } from './converter.js';

const weeklyElement = document.querySelector('#weeklyForecast_container');

function displayWeeklyForecast(data, isFahrenheit) {
    // Clear the weekly forecast container 
    weeklyElement.innerHTML = ''; 

    const weeklyForecast = data.days.slice(1, 8);
    console.log(weeklyForecast);
    weeklyForecast.forEach(day => {
        const dayName = format(parseISO(day.datetime), 'EEEE');

        const high = isFahrenheit ? day.tempmax : convertToCelcius(day.tempmax);
        const low = isFahrenheit ? day.tempmin : convertToCelcius(day.tempmin);

        const dayElement = document.createElement('div');
        dayElement.classList.add('weeklyForecast_day');
        dayElement.innerHTML = `
            <div class="weeklyForecast_dayName">${dayName}</div>
            <div class="weeklyForecast_dayTemp">H: ${high} ${isFahrenheit ? '°F' : '°C'}</div>
            <div class="weeklyForecast_dayTemp">L: ${low} ${isFahrenheit ? '°F' : '°C'}</div>
            <div class="weeklyForecast_dayConditions">${day.conditions}</div>
        `;
        weeklyElement.appendChild(dayElement);
    });
}

export { displayWeeklyForecast };

