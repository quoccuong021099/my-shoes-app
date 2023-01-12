import { combineReducers } from '@reduxjs/toolkit';
import detailProductReducer from '../features/DetailProduct/detailProductSlice';
import homeReducer from '../features/Home/homeSlice';

export const rootReducer = combineReducers({
  home: homeReducer,
  detailProduct: detailProductReducer,
});
