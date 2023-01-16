import { combineReducers } from '@reduxjs/toolkit';
import detailProductReducer from '../features/DetailProduct/detailProductSlice';
import homeReducer from '../features/Home/homeSlice';
import loginReducer from '../features/Login/loginSlice';
import cartReducer from '../features/Cart/cartSlice';
import alertSlice from '../features/AlertCommon/alertSlice';

export const rootReducer = combineReducers({
  home: homeReducer,
  detailProduct: detailProductReducer,
  login: loginReducer,
  cart: cartReducer,
  alert: alertSlice,
});
