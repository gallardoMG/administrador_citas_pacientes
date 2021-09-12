import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const preloadedState = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, composeEnhancers(preloadedState))
sagaMiddleware.run(rootSaga)
export default store;