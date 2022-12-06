
import React, { useState, useEffect } from 'react';
import './GetSurfConditions.css';

const GetSurfConditions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/surf/r');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{"Conditions"}</h1>
          <p>{"Surf Quality: " + data.quality}</p>
          <p>{"Wave Height: " + data.waveAsHumanHeight}</p>
          <p>{"Wind Speed: " +data.windSpeed}</p>
          <p>{"Wind Gust: " +data.windGust}</p>
          <p>{"Direction: " +data.windDirection}</p>
          <p>{"Tide: " + data.tideHeight}</p>
          <p>{"Tide Height: " + data.tideType}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetSurfConditions;