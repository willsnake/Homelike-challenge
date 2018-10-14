import { all } from 'redux-saga/effects';
import appSaga from './app';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([appSaga(), loginSaga()]);
}
