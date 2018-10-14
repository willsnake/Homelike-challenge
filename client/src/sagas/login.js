import { call, takeEvery, put } from 'redux-saga/effects';

// API
import { callToApi } from '../api';

// Actions
import { loginSucceded, redirectTo } from '../redux/actions';

export function* loginFunction(action) {
  try {
    const { payload } = action;
    const response = yield call(callToApi, payload);
    yield put(loginSucceded(response.message));
    yield put(redirectTo('/chat'));
  } catch (e) {
    console.error('Something went wrong', e);
  }
}

export default function* loginSaga() {
  yield takeEvery('LOGIN_STARTED', loginFunction);
}
