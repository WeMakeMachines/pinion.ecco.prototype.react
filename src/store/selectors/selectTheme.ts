import { StoreStateType } from "../index";

export const selectForegroundColor = (state: StoreStateType): string =>
  state.theme.foreground;

export const selectBackgroundColor = (state: StoreStateType): string =>
  state.theme.background;
