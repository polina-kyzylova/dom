import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum TemperMode {
  auto = "auto",
  custom = "custom",
  off = "off",
}

export interface HomeState {
  temper_mode: TemperMode;
}

const initialState: HomeState = {
  temper_mode: TemperMode.custom,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    initHome: (state, action: PayloadAction<HomeState>) => {
      state.temper_mode = action.payload.temper_mode;
    },
    changeTemperMode: (state, action) => {
      state.temper_mode = action.payload.temper_mode;
    },
  },
});

export const { initHome, changeTemperMode } = homeSlice.actions;
export default homeSlice.reducer;
