import WeatherBlock from "./WeatherBlock";
import "../styles/weather.css";

const Weather = ({daysArray, month, city, dayOfMonth, displayMode}) => {  
  const daysToDisplay = [];
  if (displayMode === "сьогодні"){
    daysToDisplay.push(daysArray[0]);
  } 
  else if (displayMode === "тиждень"){
    for (let i = 0; i < 7; i ++){
    daysToDisplay.push(daysArray[i]);

    }
  }
  return(
    <div className="weather">
      <h2>Погода в {city} на {displayMode}</h2>
      <h4>{dayOfMonth} {month}</h4>
      
      <div className="daysBlock">
        {daysToDisplay.map(day => 
            <WeatherBlock {...day}></WeatherBlock>
        )
        }
    </div>
    </div>
  );
}

export default Weather;