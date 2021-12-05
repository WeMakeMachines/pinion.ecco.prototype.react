import { PinionWeatherConditions } from "../../../../services/PinionWeather/types";
import {
  mapCloudsNightToIcon,
  mapWeatherConditionNightToIcon,
} from "../../../../helpers/icons";

import WeatherIcon from "../WeatherIcon";

type WeatherIconNightType = {
  cloudCover: number;
  weatherType: PinionWeatherConditions;
};

export default function WeatherIconNight({
  cloudCover,
  weatherType,
}: WeatherIconNightType) {
  const iconType =
    weatherType === PinionWeatherConditions.CLOUDS
      ? mapCloudsNightToIcon(cloudCover)
      : mapWeatherConditionNightToIcon(weatherType);

  return <WeatherIcon type={iconType} />;
}
