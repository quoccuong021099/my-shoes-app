import { takeLatest } from '@redux-saga/core/effects';
import { all, call, put } from 'redux-saga/effects';
import userApi from '../../api/userApi';
import { openAlertCommon } from '../AlertCommon/alertSlice';
import { login, loginFailed, loginSuccess } from './loginSlice';

function* loginFunc({ payload }) {
  try {
    const res = yield call(userApi.login, payload);
    localStorage.setItem('token', res?.token);
    if (res.message === 'Authentication successful') {
      yield put(
        loginSuccess({
          code: 200,
          message: 'Log in successfully',
          token: res.token,
        }),
      );
      yield put(
        openAlertCommon({ status: 'success', text: 'Register successfully' }),
      );
    } else {
      yield put(
        loginFailed({
          code: 201,
          message: 'Login failed, wrong email or password, please re-check',
        }),
      );
      yield put(openAlertCommon({ status: 'error', text: res.message }));
    }
  } catch (err) {
    yield put(
      loginFailed({
        code: 201,
        message: 'Login failed, wrong email or password, please re-check',
      }),
    );
    yield put(
      openAlertCommon({
        status: 'error',
        text: 'Login failed, wrong email or password, please re-check',
      }),
    );
  }
}

export default function* LoginSaga() {
  yield all([takeLatest(login, loginFunc)]);
}
