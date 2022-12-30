import React, { useState, useEffect } from 'react';
import './GetSurfConditions.css';


const cardinalDirection = (direction) => {
  if (direction >= 337.5 || direction < 22.5) {
    return "N";
  } else if (direction >= 22.5 && direction < 67.5) {
    return "NE";
  } else if (direction >= 67.5 && direction < 112.5) {
    return "E";
  } else if (direction >= 112.5 && direction < 157.5) {
    return "SE";
  } else if (direction >= 157.5 && direction < 202.5) {
    return "S";
  } else if (direction >= 202.5 && direction < 247.5) {
    return "SW";
  } else if (direction >= 247.5 && direction < 292.5) {
    return "W";
  } else if (direction >= 292.5 && direction < 337.5) {
    return "NW";
  }
};

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
          <p>{"Wind Speed: " + Math.round(data.windSpeed) + " gusting " + Math.round(data.windGust) + " kts"}</p>
          <p>{"Wind Direction: " +cardinalDirection(data.direction)}</p>
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