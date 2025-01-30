import { parseISO, format } from "date-fns";

const weeklyElement = document.querySelector('#weeklyForecast_container');

function displayWeeklyForecast(data) {
    // Clear the weekly forecast container 
    weeklyElement.innerHTML = ''; 

    const weeklyForecast = data.days.slice(1, 8);
    console.log(weeklyForecast);
    weeklyForecast.forEach(day => {
        const dayName = format(parseISO(day.datetime), 'EEEE');

        const dayElement = document.createElement('div');
        dayElement.classList.add('weeklyForecast_day');
        dayElement.innerHTML = `
            <div class="weeklyForecast_dayName">${dayName}</div>
            <div class="weeklyForecast_dayTemp">H: ${day.tempmax} </div>
            <div class="weeklyForecast_dayTemp">L: ${day.tempmin}</div>
            <div class="weeklyForecast_dayConditions">${day.conditions}</div>
        `;
        weeklyElement.appendChild(dayElement);
    });
}

export { displayWeeklyForecast };

