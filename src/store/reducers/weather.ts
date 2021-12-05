import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  PinionWeatherDailyType,
  PinionWeatherNowType,
} from "../../services/PinionWeather/types";

export type WeatherStateType = {
  daily: PinionWeatherDailyType[];
  now: PinionWeatherNowType;
};

const initialState: WeatherStateType = {
  daily: [
    {
      clouds: { cover: 0 },
      description: { text: "", main: "" },
      temperature: {
        morning: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
        day: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
        evening: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
        night: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
        min: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
        max: {
          actual: 0,
          feels_like: 0,
          units: "",
        },
      },
      sun: {
        sunrise: 0,
        sunset: 0,
        uv: 0,
      },
      wind: {
        beaufort: 0,
        degrees: 0,
        direction: "",
        speed: 0,
        units: "",
      },
    },
  ],
  now: {
    time: 0,
    clouds: { cover: 0 },
    description: { text: "", main: "" },
    temperature: {
      actual: 0,
      feels_like: 0,
      units: "",
    },
    wind: {
      beaufort: 0,
      degrees: 0,
      direction: "",
      speed: 0,
      units: "",
    },
    sun: {
      sunrise: 0,
      sunset: 0,
      uv: 0,
    },
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherDaily(state, action: PayloadAction<PinionWeatherDailyType[]>) {
      state.daily = action.payload;
    },
    setWeatherNow(state, action: PayloadAction<PinionWeatherNowType>) {
      state.now = action.payload;
    },
  },
});

export const { setWeatherDaily, setWeatherNow } = weatherSlice.actions;
export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
