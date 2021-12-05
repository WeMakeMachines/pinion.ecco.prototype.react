import { StoreStateType } from "../index";
import {
  PinionWeatherDailyType,
  PinionWeatherNowType,
} from "../../services/PinionWeather/types";

export const selectWeatherDaily = (
  state: StoreStateType
): PinionWeatherDailyType[] => state.weather.daily.slice(1);

export const selectWeatherNow = (state: StoreStateType): PinionWeatherNowType =>
  state.weather.now;
