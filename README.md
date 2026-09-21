# Weather App

A simple and responsive weather application built using HTML, CSS, and JavaScript.

The application uses the OpenWeatherMap API to fetch and display current weather information for different cities.

## Features

- Search weather by city name
- Displays current temperature
- Displays weather condition
- Displays humidity
- Displays feels-like temperature
- Weather condition icons
- Error handling for invalid city names
- Press Enter to search
- Responsive design for different screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- OpenWeatherMap API

## How It Works

1. Enter a city name in the search box.
2. Click the Search button or press Enter.
3. The application sends a request to the OpenWeatherMap API.
4. The API returns weather data in JSON format.
5. JavaScript processes the data and displays the weather information.

## API Key Setup

This project uses the OpenWeatherMap API.

For security, the API key is not included in this repository.

To run the project:

1. Get an API key from OpenWeatherMap.
2. Open `script.js`.
3. Find:

```javascript
const API_KEY = "YOUR_API_KEY";
Replace YOUR_API_KEY with your own API key.