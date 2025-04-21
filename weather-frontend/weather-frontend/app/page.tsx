'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        className="input input-bordered w-full max-w-xs mb-4"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary mb-4" onClick={fetchWeather}>
        Get Weather
      </button>

      {weather && weather.main && (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
