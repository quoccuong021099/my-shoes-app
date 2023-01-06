import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../features/Home/homeSlice';

export const rootReducer = combineReducers({
  home: homeReducer,
});
