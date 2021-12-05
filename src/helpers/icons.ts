import { PinionWeatherConditions } from "../services/PinionWeather/types";
import { WeatherIcons } from "../components/shared/Icons/WeatherIcon/types";
import { TemperatureUnits } from "../types";
import Celsius from "../components/shared/ThemedIcons/Celcius";
import Fahrenheit from "../components/shared/ThemedIcons/Fahrenheit";

type IconTypeFromConditionsType = {
  daytime: boolean;
  cloudCover: number;
  weatherType: PinionWeatherConditions;
};

export function iconTypeFromConditions({
  daytime,
  cloudCover,
  weatherType,
}: IconTypeFromConditionsType): WeatherIcons {
  if (daytime) {
    if (weatherType === PinionWeatherConditions.CLOUDS) {
      return mapCloudsDayToIcon(cloudCover);
    }
    return mapWeatherConditionDayToIcon(weatherType);
  }

  if (weatherType === PinionWeatherConditions.CLOUDS) {
    return mapCloudsNightToIcon(cloudCover);
  }
  return mapWeatherConditionNightToIcon(weatherType);
}

export function mapWeatherConditionDayToIcon(
  type: PinionWeatherConditions
): WeatherIcons {
  switch (type) {
    case PinionWeatherConditions.ASH:
    case PinionWeatherConditions.DUST:
    case PinionWeatherConditions.SAND:
      return WeatherIcons.DUST_DAY;
    case PinionWeatherConditions.CLEAR:
      return WeatherIcons.CLEAR_DAY;
    case PinionWeatherConditions.DRIZZLE:
      return WeatherIcons.DRIZZLE;
    case PinionWeatherConditions.FOG:
      return WeatherIcons.FOG;
    case PinionWeatherConditions.HAZE:
      return WeatherIcons.HAZE;
    case PinionWeatherConditions.RAIN:
      return WeatherIcons.RAIN;
    case PinionWeatherConditions.SNOW:
      return WeatherIcons.SNOW;
    case PinionWeatherConditions.THUNDERSTORM:
      return WeatherIcons.THUNDERSTORMS;
    case PinionWeatherConditions.TORNADO:
      return WeatherIcons.TORNADO;
    default:
      return mapWeatherConditionToIcon(type);
  }
}

export function mapWeatherConditionNightToIcon(
  type: PinionWeatherConditions
): WeatherIcons {
  switch (type) {
    case PinionWeatherConditions.ASH:
    case PinionWeatherConditions.DUST:
    case PinionWeatherConditions.SAND:
      return WeatherIcons.DUST_NIGHT;
    case PinionWeatherConditions.CLEAR:
      return WeatherIcons.CLEAR_NIGHT;
    case PinionWeatherConditions.DRIZZLE:
      return WeatherIcons.PARTLY_CLOUDY_NIGHT_DRIZZLE;
    case PinionWeatherConditions.FOG:
      return WeatherIcons.FOG_NIGHT;
    case PinionWeatherConditions.HAZE:
      return WeatherIcons.HAZE_NIGHT;
    case PinionWeatherConditions.RAIN:
      return WeatherIcons.PARTLY_CLOUDY_NIGHT_RAIN;
    case PinionWeatherConditions.SNOW:
      return WeatherIcons.PARTLY_CLOUDY_NIGHT_SNOW;
    case PinionWeatherConditions.THUNDERSTORM:
      return WeatherIcons.THUNDERSTORMS_NIGHT;
    case PinionWeatherConditions.TORNADO:
      return WeatherIcons.TORNADO;
    default:
      return mapWeatherConditionToIcon(type);
  }
}

function mapWeatherConditionToIcon(
  type: PinionWeatherConditions
): WeatherIcons {
  switch (type) {
    case PinionWeatherConditions.MIST:
      return WeatherIcons.MIST;
    case PinionWeatherConditions.SMOKE:
      return WeatherIcons.SMOKE;
    default:
    case PinionWeatherConditions.SQUALL:
      return WeatherIcons.WIND;
  }
}

export function mapCloudsDayToIcon(cloudCover: number): WeatherIcons {
  const cloudsDayIcons = [
    WeatherIcons.PARTLY_CLOUDY_DAY,
    WeatherIcons.OVERCAST_DAY,
    WeatherIcons.CLOUDY,
    WeatherIcons.OVERCAST,
  ];

  return mapCloudsToIcon(cloudCover, cloudsDayIcons);
}

export function mapCloudsNightToIcon(cloudCover: number): WeatherIcons {
  const cloudsNightIcon = [
    WeatherIcons.PARTLY_CLOUDY_NIGHT,
    WeatherIcons.OVERCAST_NIGHT,
    WeatherIcons.CLOUDY,
    WeatherIcons.OVERCAST,
  ];

  return mapCloudsToIcon(cloudCover, cloudsNightIcon);
}

function mapCloudsToIcon(cloudCover: number, icons: WeatherIcons[]) {
  const fraction = 100 / icons.length;

  const pick = Math.floor((cloudCover === 100 ? 99 : cloudCover) / fraction);

  return icons[pick];
}
