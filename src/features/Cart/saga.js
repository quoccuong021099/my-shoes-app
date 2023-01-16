import { call, put, takeLatest } from '@redux-saga/core/effects';
import { all } from 'redux-saga/effects';
import cartApi from '../../api/cartApi';
import { openAlertCommon } from '../AlertCommon/alertSlice';
import {
  addCart,
  addCartFailed,
  addCartSuccess,
  deleteCartItem,
  deleteCartItemFailed,
  deleteCartItemSuccess,
  getCart,
  getCartFailed,
  getCartSuccess,
} from './cartSlice';

function* getCartFunc() {
  try {
    const res = yield call(cartApi.getCart);
    yield put(getCartSuccess(res));
  } catch (error) {
    yield put(getCartFailed());
  }
}

function* deleteCartFunc({ payload }) {
  try {
    yield call(cartApi.delCartItem, payload);
    yield put(deleteCartItemSuccess(payload));
    yield put(openAlertCommon({ status: 'success', text: 'Delete success' }));
  } catch (error) {
    yield put(deleteCartItemFailed());
    yield put(openAlertCommon({ status: 'error', text: 'Delete failed' }));
  }
}

function* addCartFunc({ payload }) {
  try {
    yield call(cartApi.addItemCart, payload);
    yield put(addCartSuccess(payload));
    yield put(openAlertCommon({ status: 'success', text: 'Add success' }));
  } catch (error) {
    console.log('error', error);
    yield put(addCartFailed());
    yield put(openAlertCommon({ status: 'error', text: 'Add failed' }));
  }
}

export default function* cartSaga() {
  yield all([
    takeLatest(getCart, getCartFunc),
    takeLatest(deleteCartItem, deleteCartFunc),
    takeLatest(addCart, addCartFunc),
  ]);
}
