import {
  PinionWeatherConditions,
  PinionWeatherDailyTemperatureType,
  PinionWeatherDescriptionType,
} from "../../services/PinionWeather/types";

import Temperature from "../shared/Temperature";
import CalendarDate from "../shared/CalendarDate";

import WeatherIconDay from "../shared/Icons/WeatherIconDay";
import styles from "./Daily.module.css";

type DailyType = {
  cloudCover: number;
  description: PinionWeatherDescriptionType;
  temperature: PinionWeatherDailyTemperatureType;
  timestamp: number;
};

export default function Daily({
  cloudCover,
  description,
  temperature,
  timestamp,
}: DailyType) {
  const weatherType = description.main as PinionWeatherConditions;

  return (
    <div className={styles.container}>
      <CalendarDate timestamp={timestamp} />
      <p className={styles.text}>{description.text}</p>
      <div className={styles.icon}>
        <WeatherIconDay cloudCover={cloudCover} weatherType={weatherType} />
      </div>
      <div className={styles.temperature}>
        <Temperature
          actual={temperature.day.actual}
          units={temperature.day.units}
        />
      </div>
    </div>
  );
}
