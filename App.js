import React, { useState } from 'react';
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";

function App() {
    const [location, setLocation] = useState("Madrid");

    return (
        <>
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <div className="app">
                {/* Location component with props */}
                <Location 
                    data={cities} 
                    location={location} 
                    setLocation={setLocation} 
                />
                
                {cities.map((cityData, index) => (
                    <WeatherCard key={index} data={cityData} />
                ))}
            </div>
        </>
    )
}

export default App;