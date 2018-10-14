import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

export function* redirectFunction(action) {
  try {
    const { payload } = action;
    yield put(push(`${payload}`));
  } catch (e) {
    console.error('Something went wrong', e);
  }
}

export default function* appSaga() {
  yield takeEvery('REDIRECT_TO', redirectFunction);
}
