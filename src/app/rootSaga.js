import { all } from 'redux-saga/effects';
import producDetailSaga from '../features/DetailProduct/saga';
import homeSaga from '../features/Home/saga';

export default function* rootSaga() {
  yield all([homeSaga(), producDetailSaga()]);
}
