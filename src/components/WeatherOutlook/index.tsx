import { useSelector } from "react-redux";

import { PinionWeatherConditions } from "../../services/PinionWeather/types";
import { selectWeatherNow } from "../../store/selectors/selectWeather";

import Temperature from "../shared/Temperature";
import WeatherIconDay from "../shared/Icons/WeatherIconDay";
import WeatherIconNight from "../shared/Icons/WeatherIconNight";
import Description from "./Description";
import Sun from "./Sun";

import styles from "./index.module.css";
import WindBeaufortIcon from "../shared/Icons/WindBeaufortIcon";
import {
  selectWarnThresholdUvIndex,
  selectWarnThresholdWindBeaufort,
} from "../../store/selectors/selectSettings";
import WeatherUvWarningIcon from "../shared/Icons/WeatherUvWarningIcon";
import { selectIsDaytime } from "../../store/selectors/selectApp";

export default function WeatherOutlook() {
  const weatherNow = useSelector(selectWeatherNow);
  const uvIndexThreshold = useSelector(selectWarnThresholdUvIndex);
  const windThreshold = useSelector(selectWarnThresholdWindBeaufort);
  const isDaytime = useSelector(selectIsDaytime);

  const weatherType = weatherNow.description.main as PinionWeatherConditions;
  const strongWinds = weatherNow.wind.beaufort >= windThreshold;
  const highUvIndex = weatherNow.sun.uv >= uvIndexThreshold;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          {isDaytime && highUvIndex ? (
            <WeatherUvWarningIcon uv={weatherNow.sun.uv} />
          ) : null}
          {isDaytime && !highUvIndex ? (
            <WeatherIconDay
              cloudCover={weatherNow.clouds.cover}
              weatherType={weatherType}
            />
          ) : null}
          {!isDaytime ? (
            <WeatherIconNight
              cloudCover={weatherNow.clouds.cover}
              weatherType={weatherType}
            />
          ) : null}
          {strongWinds ? (
            <div className={styles.secondaryIcon}>
              <WindBeaufortIcon scale={weatherNow.wind.beaufort} />
            </div>
          ) : null}
        </div>
        <div className={styles.summary}>
          <Temperature
            actual={weatherNow.temperature.actual}
            units={weatherNow.temperature.units}
          />
          <Description text={weatherNow.description.text} />
        </div>
      </div>
      <Sun />
    </div>
  );
}
