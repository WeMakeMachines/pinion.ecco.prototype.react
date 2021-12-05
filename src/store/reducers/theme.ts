import { createSlice } from "@reduxjs/toolkit";

const themes = {
  nightTheme: {
    foreground: "#ffffff",
    background: "#646464",
  },
  dayTheme: {
    foreground: "#374151",
    background: "#ffffff",
  },
};

export type ThemeStateType = {
  foreground: string;
  background: string;
};

const initialState: ThemeStateType = themes.nightTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDayTheme(state) {
      state = themes.dayTheme;
    },
    setNightTheme(state) {
      state = themes.nightTheme;
    },
  },
});

export const { setDayTheme, setNightTheme } = themeSlice.actions;
export default themeSlice.reducer;
