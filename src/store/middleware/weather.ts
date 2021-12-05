import { Middleware } from "redux";

import { RootState } from "../index";
import { weatherActions } from "../reducers/weather";
import { setIsDay, setIsNight } from "../reducers/app";
import DateHelpers from "../../helpers/date";
import { setDayTheme, setNightTheme } from "../reducers/theme";

export const weatherMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (storeApi) => (next) => (action) => {
  //const state = storeApi.getState(); // correctly typed as RootState

  if (weatherActions.setWeatherNow.match(action)) {
    const { sun } = action.payload;

    const isDaytime = DateHelpers.isDaytime(sun.sunrise, sun.sunset);

    if (isDaytime) {
      storeApi.dispatch(setIsDay());
      storeApi.dispatch(setDayTheme());
    } else {
      storeApi.dispatch(setIsNight());
      storeApi.dispatch(setNightTheme());
    }
  }

  next(action);
};
