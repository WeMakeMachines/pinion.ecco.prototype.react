import { useSelector } from "react-redux";
import { selectWeatherDaily } from "../../store/selectors/selectWeather";

import { Orientation, useOrientation } from "../../hooks/useOrientation";

import Daily from "./Daily";
import styles from "./index.module.css";

type ForecastType = {
  days?: number;
};

export default function WeatherDailyForecast({ days }: ForecastType) {
  const orientation = useOrientation();
  const weatherDaily = useSelector(selectWeatherDaily);

  if (days && days >= 7) {
    days = 7;
  }

  const orientationStyles =
    orientation === Orientation.PORTRAIT
      ? styles.containerPortrait
      : styles.containerLandscape;

  const forecast = !days ? weatherDaily : weatherDaily.slice(0, days);

  return (
    <div className={styles.containerPortrait}>
      {forecast.map(({ clouds, description, sun, temperature }, index) => (
        <Daily
          key={index}
          cloudCover={clouds.cover}
          description={description}
          temperature={temperature}
          timestamp={sun.sunrise}
        />
      ))}
    </div>
  );
}
