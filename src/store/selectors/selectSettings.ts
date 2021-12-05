import { StoreStateType } from "../index";
import { Units } from "../../types";

export const selectClockSeconds = (state: StoreStateType): boolean =>
  state.settings.clock.showSeconds;

export const selectSpeed = (state: StoreStateType): Units =>
  state.settings.units.speed;

export const selectTemperature = (state: StoreStateType): Units =>
  state.settings.units.temperature;

export const selectWarnThresholdUvIndex = (state: StoreStateType): number =>
  state.settings.warningThresholds.uv;

export const selectWarnThresholdWindBeaufort = (
  state: StoreStateType
): number => state.settings.warningThresholds.wind;

export const selectIconStyle = (state: StoreStateType): string =>
  state.settings.iconStyle;
