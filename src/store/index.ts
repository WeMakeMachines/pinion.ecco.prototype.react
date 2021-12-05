import { configureStore, Store } from "@reduxjs/toolkit";
import { weatherMiddleware } from "./middleware/weather";

import appReducer, { AppStateType } from "./reducers/app";
import settingsReducer, { SettingsStateType } from "./reducers/settings";
import themeReducer, { ThemeStateType } from "./reducers/theme";
import weatherReducer, { WeatherStateType } from "./reducers/weather";

export type StoreStateType = {
  app: AppStateType;
  settings: SettingsStateType;
  theme: ThemeStateType;
  weather: WeatherStateType;
};

const store: Store<StoreStateType> = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
    theme: themeReducer,
    weather: weatherReducer,
  },
  middleware: [weatherMiddleware] as const,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
