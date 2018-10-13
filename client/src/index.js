import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

// Reducers
import mainReducer from './redux/reducers';
// Sagas
import rootSaga from './sagas';
// Middlewares
import logger from './middlewares/logger';
// Router
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const middlewares = [];

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);
middlewares.push(logger);

const store = createStore(
  connectRouter(history)(mainReducer),
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

injectGlobal`
    html,body {
      margin: 0px;
      padding: 0px;
      height: 100%;
      text-align: center;
    }

    #root {
      height: 100%;
      border: 1px solid black;
    }
`;

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
