// Ваш API-ключ із OpenWeatherMap
const API_KEY = "7fdd0dd95a3f7025fcf2f7090c7d73ed";
// Кінцева точка API
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + API_KEY + "&units=metric";

// Елементи DOM
const button = document.getElementById('getWeatherBtn');
const weatherDiv = document.getElementById('weather');

// Функція для отримання даних погоди
async function getWeather() {
    try {
        // Використання fetch для отримання даних
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Розбір відповіді як JSON
        const data = await response.json();

        // Витягуємо потрібні дані
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Відображення даних у DOM
        weatherDiv.innerHTML = `
            <h2>Погода в Лондоні:</h2>
            <p><strong>Температура:</strong> ${temperature}°C</p>
            <p><strong>Вологість:</strong> ${humidity}%</p>
            <p><strong>Швидкість вітру:</strong> ${windSpeed} м/с</p>
        `;
    } catch (error) {
        // Відображення помилки
        weatherDiv.innerHTML = `<p>Помилка завантаження даних: ${error.message}</p>`;
    }
}

// Обробник для кнопки
button.addEventListener('click', getWeather);
