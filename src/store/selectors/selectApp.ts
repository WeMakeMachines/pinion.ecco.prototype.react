import { StoreStateType } from "../index";

export const selectIsLoading = (state: StoreStateType): boolean =>
  state.app.loading;

export const selectIsDaytime = (state: StoreStateType): boolean =>
  state.app.isDaytime;
