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
      {data ? (
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

                   <img className="bw" src="/images/sands.jpg"/>

                   <div className="subhead">August 29, 2022 by Nicholas Hopper</div>


              
              
                 
               </div>
               <div className="content">
                   <div className="collumns">
                       <div className="collumn">
                           <div className="head"><span className="headline hl3">Live Surf Conditions</span><p><span className="headline hl4">by Nick Fields</span></p>
                           </div>
                              
                                 <p>{"Surf Quality: " + data.quality}</p>
                                 <p>{"Wave Height: " + data.waveAsHumanHeight}</p>
                                 <p>{"Wind Speed: " + Math.round(data.windSpeed) + " gusting " + Math.round(data.windGust) + " kts"}</p>
                                 <p>{"Wind Direction: " +cardinalDirection(data.direction)}</p>
                                 <p>{data.windDirection + " Wind"}</p>
                                 <p>{"Tide: " + data.tideHeight}</p>
                                 <p>{"Tide Height: " + data.tideType}</p>
                           </div>
                       <div className="collumn">
                           <div className="head">
                               <span className="headline hl5">{articles[0].title}</span>
                               <p>
                               <span className="headline hl6">He Really Does Suck</span>
                               </p>
                               </div>
                               <p> {articles[0].body}
                           The sunset faded to twilight before anything further happened.  The crowd far away on the left, towards Woking, seemed to grow, and I heard now a faint murmur from it.  The little knot of people towards 
                           Chobham dispersed.  There was scarcely an intimation of movement from the pit.</p>
                     <figure className="figure">
                               <img className="media" src="http://i.giphy.com/PW7MoTD2d9pJK.gif" alt=""/>
                               <figcaption className="figcaption">Hermine hoping for courage.</figcaption>
                           </figure>
               
                           <p>It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking also helped to restore confidence.  At any rate, as the dusk came on a slow, intermittent movement upon 
                               the sand pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained unbroken.  Vertical black figures in twos and threes would advance, stop, watch, and 
                               advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns.  I, too, on my side began to move towards the pit.</p>
               
                           <p>Then I saw some cabmen and others had walked boldly into the sand pits, and heard the clatter of hoofs and the gride of wheels.  I saw a lad trundling off the barrow of apples.  And then, within thirty yards 
                               of the pit, advancing from the direction of Horsell, I noted a little black knot of men, the foremost of whom was waving a white flag.</p>
               
                           </div>
                       <div className="collumn"><div className="head"><span className="headline hl1">{articles[1].title}</span><p><span className="headline hl2">Let go your conscious self and act on instinct</span></p></div><p>{articles[1].body}</p>
                 <figure className="figure">
                               <img className="media" src="http://i.giphy.com/4fDWVPMoSyhgc.gif" alt=""/>
                               <figcaption className="figcaption">This time, let go your conscious self and act on instinct.</figcaption>
                           </figure>
                           <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. <span className="citation">Do under&shy;estimate the Force. I suggest you try it again, Luke.</span> This time, 
                           let go your conscious self and act on instinct. In my experience, there is no such thing as luck. all clear, kid.  blow this thing and go home!</p>
                           <p>You don believe in the Force, do you? Partially, but it also obeys your commands. The plans you refer to will soon be back in our hands. As you wish.</p></div>
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetSurfConditions;