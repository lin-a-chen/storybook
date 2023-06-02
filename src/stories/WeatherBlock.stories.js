import WeatherBlock from "../components/WeatherBlock";

const windDirs = {
  left: "/icons/left-arrow.png",
  up: "/icons/up-arrow.png",
  right: "/icons/right-arrow.png",
  down: "/icons/down-arrow.png",
};
export default {
  title: "WeatherBlockStory",
};

export const Default = () => {
  return (
    <WeatherBlock
      dayOfWeek={0}
      sky=""
      temperature={0}
      humidity={0}
      wind={{ direction: "", speed: "" }}
    />
  );
};
export const Fall = () => {
  return (
    <WeatherBlock
      dayOfWeek={0}
      sky="cloudy"
      temperature={13}
      humidity={85}
      wind={{ direction: windDirs.left, speed: "8" }}
    />
  );
};
export const Summer = () => {
  return (
    <WeatherBlock
      dayOfWeek={4}
      sky="sunny"
      temperature={27}
      humidity={75}
      wind={{ direction: windDirs.right, speed: "3" }}
    />
  );
};

export const Winter = () => {
  return (
    <WeatherBlock
      dayOfWeek={3}
      sky="snowy"
      temperature={-6}
      humidity={60}
      wind={{ direction: "", speed: "0" }}
    />
  );
};
