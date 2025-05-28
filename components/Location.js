import React from "react";
import { getWeatherIcon } from "./WeatherCard";

function Location({ data, location, setLocation }) {
  const locationData = data.find(city => 
    city.city.toLowerCase() === location.toLowerCase()
  );

  if (!locationData) {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Your Location's Weather</h3>
          <p>No weather data available for {location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Your Location's Weather</h3>
      </div>
      <div className="img-container">
        <img 
          className="card-img-top" 
          src={getWeatherIcon(locationData.forecast)} 
          alt={`${locationData.forecast} weather`} 
          id="icon"
        />
      </div>
      <div className="card-body">
        <h5 className="card-text">The weather in {locationData.city} is</h5>
        <h5 className="card-text">{locationData.temperature}°C</h5>
        <h5 className="card-text">It is {locationData.forecast} out today</h5>
      </div>
    </div>
  );
}

export default Location;