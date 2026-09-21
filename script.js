const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

searchButton.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    hideError();

    try {
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

      if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`${response.status}: ${errorData.message}`);
}

        const data = await response.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        condition.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

        weatherIcon.textContent = getWeatherIcon(data.weather[0].main);

    } catch (error) {
        showError(error.message);
    }
}

function getWeatherIcon(weather) {
    const icons = {
        Clear: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Drizzle: "🌦️",
        Thunderstorm: "⛈️",
        Snow: "❄️",
        Mist: "🌫️",
        Smoke: "🌫️",
        Haze: "🌫️",
        Dust: "🌫️",
        Fog: "🌫️",
        Sand: "🌫️",
        Ash: "🌋",
        Squall: "💨",
        Tornado: "🌪️"
    };

    return icons[weather] || "🌤️";
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function hideError() {
    errorMessage.style.display = "none";
}