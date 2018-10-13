import { takeEvery } from 'redux-saga/effects';

export function* homeFunction() {
  try {
  } catch (e) {
    console.error('Something went wrong', e);
  }
}

export default function* homeSaga() {
  yield takeEvery('LOAD_INDEX', homeFunction);
}
