import "../styles/weatherBlock.css";

const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];
const WeatherBlock = ({dayOfWeek, sky, humidity, wind, temperature}) => {
  return (
    <div className={`weatherBlock ${sky}`}>
      <div className="infoContainer">
        <h2>{daysOfWeek[dayOfWeek]}</h2>
        <span>Температура: {temperature}°C</span>
        <span>Вологість: {humidity}%</span>
        <span className="windDirection">Вітер: {wind.speed} м/с <img src={wind.direction} alt="-"/></span>
      </div>
    </div>
  );
};

export default WeatherBlock;
