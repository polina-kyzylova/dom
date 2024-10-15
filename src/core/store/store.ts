import { configureStore } from '@reduxjs/toolkit';
import HomeListReducer from './slices/HomeListSlice';
import HomeReducer from './slices/HomeSlice';

export const store = configureStore({
  reducer: {
    homeList: HomeListReducer,
    home: HomeReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']