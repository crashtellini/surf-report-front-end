import React, { useState, useEffect } from 'react';
import './GetSurfConditions.css';

const GetSurfConditions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://caden.works/api/surf/r');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="surf-conditions">
      {data ? (
        <div>
          <h1>{"Conditions"}</h1>
          <p>{"Surf Quality: " + data.quality}</p>
          <p>{"Wave Height: " + data.waveAsHumanHeight}</p>
          <p>{"Wind Speed: " + data.windSpeed + " gusting " + data.windGust + " kts"}</p>
          <p>{"Wind Direction: " +data.direction}</p>
          <p>{data.windDirection + " Wind"}</p>
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
