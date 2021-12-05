import { createSlice } from "@reduxjs/toolkit";

export type AppStateType = {
  loading: boolean;
  isDaytime: boolean;
};

const initialState: AppStateType = {
  loading: true,
  isDaytime: true,
};

const appsSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setLoaded(state) {
      state.loading = false;
    },
    setIsDay(state) {
      state.isDaytime = true;
    },
    setIsNight(state) {
      state.isDaytime = false;
    },
  },
});

export const { setLoaded, setLoading, setIsDay, setIsNight } =
  appsSlice.actions;
export default appsSlice.reducer;
