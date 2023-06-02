import Weather from "../components/Weather";
const windDirs = {
  left: "/icons/left-arrow.png",
  up: "/icons/up-arrow.png",
  right: "/icons/right-arrow.png",
  down: "/icons/down-arrow.png",
};
const monthArray = [
  {
    dayOfWeek: 0,
    sky: "cloudy",
    humidity: 85,
    wind: { direction: windDirs.up, speed: 5 },
    temperature: 18,
  },
  {
    dayOfWeek: 1,
    sky: "sunny",
    humidity: 65,
    wind: { direction: windDirs.up, speed: 7 },
    temperature: 21,
  },
  {
    dayOfWeek: 2,
    sky: "sunny",
    humidity: 66,
    wind: { direction: null, speed: 0 },
    temperature: 24,
  },
  {
    dayOfWeek: 3,
    sky: "cloudy",
    humidity: 70,
    wind: { direction: null, speed: 0 },
    temperature: 22,
  },
  {
    dayOfWeek: 4,
    sky: "cloudy",
    humidity: 78,
    wind: { direction: windDirs.down, speed: 7 },
    temperature: 19,
  },
  {
    dayOfWeek: 5,
    sky: "sunny",
    humidity: 69,
    wind: { direction: windDirs.down, speed: 3 },
    temperature: 24,
  },
  {
    dayOfWeek: 6,
    sky: "cloudy",
    humidity: 70,
    wind: { direction: windDirs.left, speed: 2 },
    temperature: 27,
  },
  {
    dayOfWeek: 0,
    sky: "cloudy",
    humidity: 72,
    wind: { direction: windDirs.right, speed: 3 },
    temperature: 26,
  },
  {
    dayOfWeek: 1,
    sky: "sunny",
    humidity: 68,
    wind: { direction: windDirs.right, speed: 7 },
    temperature: 23,
  },
  {
    dayOfWeek: 2,
    sky: "sunny",
    humidity: 73,
    wind: { direction: null, speed: 0 },
    temperature: 25,
  },
  {
    dayOfWeek: 3,
    sky: "cloudy",
    humidity: 70,
    wind: { direction: null, speed: 0 },
    temperature: 22,
  },
  {
    dayOfWeek: 4,
    sky: "cloudy",
    humidity: 78,
    wind: { direction: windDirs.right, speed: 10 },
    temperature: 19,
  },
  {
    dayOfWeek: 5,
    sky: "sunny",
    humidity: 69,
    wind: { direction: windDirs.right, speed: 3 },
    temperature: 26,
  },
  {
    dayOfWeek: 6,
    sky: "sunny",
    humidity: 69,
    wind: { direction: windDirs.right, speed: 4 },
    temperature: 27,
  },
  {
    dayOfWeek: 0,
    sky: "cloudy",
    humidity: 70,
    wind: { direction: windDirs.up, speed: 5 },
    temperature: 25,
  },
  {
    dayOfWeek: 1,
    sky: "sunny",
    humidity: 65,
    wind: { direction: windDirs.down, speed: 3 },
    temperature: 25,
  },
  {
    dayOfWeek: 2,
    sky: "sunny",
    humidity: 66,
    wind: { direction: windDirs.up, speed: 3 },
    temperature: 27,
  },
  {
    dayOfWeek: 3,
    sky: "cloudy",
    humidity: 70,
    wind: { direction: windDirs.left, speed: 4 },
    temperature: 28,
  },
  {
    dayOfWeek: 4,
    sky: "sunny",
    humidity: 65,
    wind: { direction: windDirs.right, speed: 3 },
    temperature: 30,
  },
  {
    dayOfWeek: 5,
    sky: "sunny",
    humidity: 64,
    wind: { direction: windDirs.down, speed: 3 },
    temperature: 29,
  },
  {
    dayOfWeek: 6,
    sky: "sunny",
    humidity: 65,
    wind: { direction: null, speed: 0 },
    temperature: 30,
  },
];

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export default {
  title: "WeatherStory",
};

export const Week = () => {
  return (
    <Weather
      daysArray={monthArray}
      city="Житомирі"
      month={months[0]}
      dayOfMonth={10}
      displayMode="тиждень"
    ></Weather>
  );
};
export const Day = () => {
  return (
    <Weather
      daysArray={monthArray}
      city="Житомирі"
      month={months[5]}
      dayOfMonth={10}
      displayMode="сьогодні"
    ></Weather>
  );
};
