import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import history from '../history';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history));

const appliedMiddleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(enhancer)
    : enhancer;
const rootReducer = connectRouter(history)(reducer);

const store = createStore(rootReducer, appliedMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
