import { PinionWeatherConditions } from "../../../../services/PinionWeather/types";
import {
  mapCloudsDayToIcon,
  mapWeatherConditionDayToIcon,
} from "../../../../helpers/icons";

import WeatherIcon from "../WeatherIcon";

type WeatherIconDayType = {
  cloudCover: number;
  weatherType: PinionWeatherConditions;
};

export default function WeatherIconDay({
  cloudCover,
  weatherType,
}: WeatherIconDayType) {
  const iconType =
    weatherType === PinionWeatherConditions.CLOUDS
      ? mapCloudsDayToIcon(cloudCover)
      : mapWeatherConditionDayToIcon(weatherType);

  return <WeatherIcon type={iconType} />;
}
