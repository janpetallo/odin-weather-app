const weeklyElement = document.querySelector('#weeklyForecast_container');

function displayWeeklyForecast(data) {
    // Clear the weekly forecast container 
    weeklyElement.innerHTML = ''; 

    const weeklyForecast = data.days;
    console.log(weeklyForecast);
    weeklyForecast.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('weeklyForecast_day');
        dayElement.innerHTML = `
            <div class="weeklyForecast_dayName"></div>
            <div class="weeklyForecast_dayDate">${day.datetime}</div>
            <div class="weeklyForecast_dayTemp">H: ${day.tempmax} / L: ${day.tempmin}</div>
            <div class="weeklyForecast_dayConditions">${day.conditions}</div>
        `;
        weeklyElement.appendChild(dayElement);
    });
}

export { displayWeeklyForecast };

