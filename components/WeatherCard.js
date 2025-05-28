import React from "react";
// Import all weather icons
import sunny from "url:../assets/Sunny.svg";
import rainy from "url:../assets/Rainy.svg";
import cloudy from "url:../assets/Cloudy.svg";
import partlyCloudy from "url:../assets/PartlyCloudy.svg";

export const getWeatherIcon = (forecast) => {
  switch (forecast.toLowerCase()) {
    case 'sunny':
      return sunny;
    case 'rainy':
      return rainy;
    case 'cloudy':
      return cloudy;
    case 'partly cloudy':
      return partlyCloudy;
    default:
      return sunny; 
  }
};

function WeatherCard({ data }) {
  return (
    <div className="card">
      <div className="img-container">
        <img 
          className="card-img-top" 
          src={getWeatherIcon(data.forecast)} 
          alt={`${data.forecast} weather`} 
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}°C</h5>
        <h5 className="card-text">{data.forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;