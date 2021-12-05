import { createSlice } from "@reduxjs/toolkit";

import { IconStyle, Units } from "../../types";

export type SettingsStateType = {
  clock: {
    showSeconds: boolean;
  };
  iconStyle: IconStyle;
  units: {
    speed: Units;
    temperature: Units;
  };
  warningThresholds: {
    uv: number;
    wind: number;
  };
};

const initialState: SettingsStateType = {
  clock: {
    showSeconds: false,
  },
  iconStyle: IconStyle.FILLED,
  units: {
    speed: Units.METRIC,
    temperature: Units.METRIC,
  },
  warningThresholds: {
    uv: 6,
    wind: 6,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    temperatureAsImperial(state) {
      state.units.temperature = Units.IMPERIAL;
    },
    temperatureAsMetric(state) {
      state.units.temperature = Units.METRIC;
    },
    speedAsImperial(state) {
      state.units.speed = Units.IMPERIAL;
    },
    speedAsMetric(state) {
      state.units.speed = Units.METRIC;
    },
    clockShowSeconds(state) {
      state.clock.showSeconds = true;
    },
    clockHideSeconds(state) {
      state.clock.showSeconds = false;
    },
  },
});

export const {
  temperatureAsImperial,
  temperatureAsMetric,
  speedAsImperial,
  speedAsMetric,
  clockHideSeconds,
  clockShowSeconds,
} = settingsSlice.actions;
export default settingsSlice.reducer;
