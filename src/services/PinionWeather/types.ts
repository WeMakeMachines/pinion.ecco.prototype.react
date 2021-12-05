export type PinionWeatherCloudsType = {
  cover: number;
};

export type PinionWeatherDescriptionType = {
  text: string;
  main: string;
};

export type PinionWeatherSunType = {
  sunrise: number;
  sunset: number;
  uv: number;
};

export type PinionWeatherTemperatureType = {
  actual: number;
  feels_like: number;
  units: string;
};

export type PinionWeatherWindType = {
  beaufort: number;
  degrees: number;
  direction: string;
  gust?: number;
  speed: number;
  units: string;
};

export type PinionWeatherNowType = {
  time: number;
  clouds: PinionWeatherCloudsType;
  description: PinionWeatherDescriptionType;
  temperature: PinionWeatherTemperatureType;
  wind: PinionWeatherWindType;
  sun: PinionWeatherSunType;
};

export type PinionWeatherDailyTemperatureType = {
  morning: PinionWeatherTemperatureType;
  day: PinionWeatherTemperatureType;
  evening: PinionWeatherTemperatureType;
  night: PinionWeatherTemperatureType;
  min: PinionWeatherTemperatureType;
  max: PinionWeatherTemperatureType;
};

export type PinionWeatherDailyType = {
  clouds: PinionWeatherCloudsType;
  description: PinionWeatherDescriptionType;
  temperature: PinionWeatherDailyTemperatureType;
  sun: PinionWeatherSunType;
  wind: PinionWeatherWindType;
};

export type PinionWeatherType = {
  daily: PinionWeatherDailyType[];
  now: PinionWeatherNowType;
};

export enum PinionWeatherConditions {
  THUNDERSTORM = "Thunderstorm",
  DRIZZLE = "Drizzle",
  RAIN = "Rain",
  SNOW = "Snow",
  MIST = "Mist",
  SMOKE = "Smoke",
  HAZE = "Haze",
  FOG = "Fog",
  SAND = "Sand",
  DUST = "Dust",
  ASH = "Ash",
  SQUALL = "Squall",
  TORNADO = "Tornado",
  CLEAR = "Clear",
  CLOUDS = "Clouds",
}
