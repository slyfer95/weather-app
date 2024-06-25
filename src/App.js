import { Button, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import "./App.css";
import { CiSearch } from "react-icons/ci";

function App() {
  const apiUrl = "https://api.weatherbit.io/v2.0/current?city=";
  const apiKey = "&key=f37ee27abe714244a092c152db44c0ea";

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const updateWeather = async () => {
    const fullUrl = apiUrl + city + apiKey;
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container-01"></div>
        <div className="content">
          <div className="search">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter City"
              onChange={handleCityChange}
            />
            <Button onClick={updateWeather}>
              <CiSearch size={30} />
            </Button>
          </div>
          {weatherData && (
            <div className="weather-info">
              <h4>Temperature in Celsius: {weatherData.data[0].temp}°C</h4>
              <h4>
                Temperature in Fahrenheit:{" "}
                {(weatherData.data[0].temp * 9) / 5 + 32}°F
              </h4>
              <h4>Weather: {weatherData.data[0].weather.description}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
