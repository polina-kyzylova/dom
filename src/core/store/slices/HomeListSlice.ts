import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum HomeType {
  apart = 'Apartment',
  house = 'House'
}

export interface IHomeList {
  home_type: HomeType;
  home_title: string;
  address: string;
  home_id: number;
}

const initialState: Array<IHomeList> = [
  {
    home_type: HomeType.apart,
    home_title: "Moscow appart",
    address: "Filevsky Boulevard, 9, Moscow",
    home_id: 111,
  },
  {
    home_type: HomeType.apart,
    home_title: "Sochi appart",
    address: "Tchaikovsky Street, 18, Sochi",
    home_id: 222,
  },
  {
    home_type: HomeType.house,
    home_title: "Moscow house",
    address: "cottage village Beresta, 12, Krasnogorsk",
    home_id: 333,
  },
  {
    home_type: HomeType.apart,
    home_title: "Grandparents apart",
    address: "Tverskaya street, 4, Moscow",
    home_id: 444,
  },
];

export const homeListSlice = createSlice({
  name: "homeList",
  initialState,
  reducers: {
    addNewHome: (state, action: PayloadAction<IHomeList>) => {
      state.push(action.payload);
    },
  },
});

export const { addNewHome } = homeListSlice.actions;
export default homeListSlice.reducer;
