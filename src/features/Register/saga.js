import { takeLatest } from '@redux-saga/core/effects';
import { all, call, put } from 'redux-saga/effects';
import userApi from '../../api/userApi';
import { openAlertCommon } from '../AlertCommon/alertSlice';
import { register, registerFailed, registerSuccess } from './registerSlice';

function* registerFunc({ payload }) {
  try {
    const res = yield call(userApi.register, payload);
    if (res.message === 'User created successfully') {
      yield put(
        registerSuccess({
          code: 200,
          message: 'Register successfully',
        }),
      );
      yield put(
        openAlertCommon({ status: 'success', text: 'Register successfully' }),
      );
    } else {
      yield put(
        registerFailed({
          code: 201,
          message: res.message,
        }),
      );
      yield put(openAlertCommon({ status: 'error', text: res.message }));
    }
  } catch (err) {
    console.log('err', err);
    yield put(openAlertCommon({ status: 'error', text: err.message }));
    yield put(
      registerFailed({
        code: 201,
        message: err.message,
      }),
    );
  }
}

export default function* RegisterSaga() {
  yield all([takeLatest(register, registerFunc)]);
}
