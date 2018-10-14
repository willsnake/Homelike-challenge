import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { login } from './login';

const AppReducers = combineReducers({
  login,
  routing: routerReducer,
});

export default AppReducers;
