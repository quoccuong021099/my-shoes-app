import { all } from 'redux-saga/effects';
import cartSaga from '../features/Cart/saga';
import producDetailSaga from '../features/DetailProduct/saga';
import homeSaga from '../features/Home/saga';
import LoginSaga from '../features/Login/saga';
import RegisterSaga from '../features/Register/saga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
    producDetailSaga(),
    LoginSaga(),
    cartSaga(),
    RegisterSaga(),
  ]);
}
