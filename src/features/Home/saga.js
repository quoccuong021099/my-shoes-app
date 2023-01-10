import { all, call, put, takeLatest } from 'redux-saga/effects';
import productApi from '../../api/productApi';
import {
  getListProduct,
  getListProductFailed,
  getListProductSuccess,
} from './homeSlice';

function* getListProductSaga({ payload }) {
  try {
    const res = yield call(productApi.getAll, payload);
    yield put(getListProductSuccess(res));
  } catch (error) {
    yield put(getListProductFailed(error));
  }
}

export default function* homeSaga() {
  yield all([takeLatest(getListProduct, getListProductSaga)]);
}
