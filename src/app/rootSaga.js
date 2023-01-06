import { all } from 'redux-saga/effects';
import homeSaga from '../features/Home/saga';

export default function* rootSaga() {
  yield all([ homeSaga()]);
}
