import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

export const initialState = {
  username: '',
  loadingChat: false,
};

export const login = handleActions(
  {
    LOGIN_STARTED: state => update(state, { $toggle: ['loadingChat'] }),
  },
  initialState,
);
