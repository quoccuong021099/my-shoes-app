import { all, call, put, takeLatest } from 'redux-saga/effects';
import productApi from '../../api/productApi';
import {
  getProductDetail,
  getProductDetailFailed,
  getProductDetailSuccess
} from './detailProductSlice';

function* getProductDetailSaga({ payload }) {
  try {
    const res = yield call(productApi.getById, payload);
    yield put(getProductDetailSuccess(res));
  } catch (error) {
    yield put(getProductDetailFailed(error));
  }
}

export default function* producDetailSaga() {
  yield all([takeLatest(getProductDetail, getProductDetailSaga)]);
}
