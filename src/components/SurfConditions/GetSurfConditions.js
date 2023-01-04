import React, { useState, useEffect } from 'react';





function getCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString('en-US', options);
}

function cardinalDirection(direction) {
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
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://caden.works/api/surf/r');
      const result = await response.json();
      setData(result);
    };

    const fetchArticles = async () => {
      const response = await fetch('https://caden.works/api/articles');
      const result = await response.json();
      setArticles(result);
    }

    fetchData();
    fetchArticles();
  }, []);

  return (
    <div className="surf-conditions">
      {data && articles ? (
               <div>
                <div className="container">
            
            
               
                   <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
                   <link rel="stylesheet" href="home/newspaper.css"/>
                   <title>Newspaper Style Design Experiment</title>
                   <meta name="viewport" content="width=device-width"/>
               
               
               
               <div className="head">
                   <div className="headerobjectswrapper">
                       <header>Sands Beach Surf</header>
                   </div>
               
                   <div className="subhead">Santa Barbara, CA- {getCurrentDate()}</div>

                   <img className="bw" src="/images/sands.jpg" alt="sands" />

                   <div className="subhead">August 29, 2022 by Nicholas Hopper</div>


              
              
                 
               </div>
               <div className="content">
                   <div className="collumns">
                       <div className="collumn">
                           <div className="head"><span className="headline hl3">Live Surf Conditions</span><p><span className="headline hl4">by Nick Fields</span></p>
                           </div>
                              <div className="conditionscollumn">
                                 <p>{"Surf Quality: " + data.quality}</p>
                                 <p>{"Wave Height: " + data.waveAsHumanHeight}</p>
                                 <p>{"Wind Speed: " + Math.round(data.windSpeed) + " gusting " + Math.round(data.windGust) + " kts"}</p>
                                 <p>{"Wind Direction: " +cardinalDirection(data.direction)}</p>
                                 <p>{data.windDirection + " Wind"}</p>
                                 <p>{"Tide: " + data.tideHeight}</p>
                                 <p>{"Tide Height: " + data.tideType}</p>
                              </div>
                           </div>
                       <div className="collumn">
                           <div className="head">
                               <span className="headline hl5">{articles[0].title}</span>
                               <p>
                               <span className="headline hl6">He Really Does Suck</span>
                               </p>
                               </div>
                               <p> {articles[0].body}
                               </p>
                     <figure className="figure">
                               <img className="media" src="https://www.surfertoday.com/images/animatedgifs/surfgif1.gif" alt=""/>
                               <figcaption className="figcaption">Surfer Wiping Out</figcaption>
                           </figure>
               
                           </div>
                       <div className="collumn"><div className="head"><span className="headline hl1">{articles[1].title}</span><p><span className="headline hl2">Let go your conscious self and act on instinct</span></p></div><p>{articles[1].body}</p>
                 <figure className="figure">
                               <img className="media" src="https://www.surfertoday.com/images/animatedgifs/surfgif9.gif" alt=""/>
                               <figcaption className="figcaption">This time, let go your conscious self and act on instinct.</figcaption>
                           </figure>
                           <p><span className="citation">Lay Off The Testosterone</span></p>
                          </div>
                       <div className="collumn"><div className="head"><span className="headline hl3">{articles[2].title} </span><p><span className="headline hl4">Why Ketamine is a bad idea</span></p></div><p>{articles[2].body}</p></div>
                       <div className="collumn"><div className="head"><span className="headline hl1">{articles[3].title} </span><p><span className="headline hl4">by Ryan Pacheco</span></p></div><p>{articles[3].body}</p>
                         
                        </div>
                   </div>
                   </div>
                   </div>
                   </div>

               
        // <div>
        //   <h1>{"Conditions"}</h1>
        //   <p>{"Surf Quality: " + data.quality}</p>
        //   <p>{"Wave Height: " + data.waveAsHumanHeight}</p>
        //   <p>{"Wind Speed: " + Math.round(data.windSpeed) + " gusting " + Math.round(data.windGust) + " kts"}</p>
        //   <p>{"Wind Direction: " +cardinalDirection(data.direction)}</p>
        //   <p>{data.windDirection + " Wind"}</p>
        //   <p>{"Tide: " + data.tideHeight}</p>
        //   <p>{"Tide Height: " + data.tideType}</p>
        // </div>
      ) : (
        <div className="loading-spinner">
        <img src="/images/loading-spinner.gif" alt="Loading spinner" />
      </div>
      )}
    </div>
  );
};

export default GetSurfConditions;