import { handleActions } from 'redux-actions';

export const initialState = {
  loginForm: {
    password: '',
    email: '',
  },
};

export const home = handleActions(
  {
    LOAD_INDEX: (_state, action) => {
      const state = JSON.parse(JSON.stringify(_state));
      return state;
    },
  },
  initialState,
);
