import {createStore, applyMiddleware, compose} from 'redux';
import appReducer from "./reducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(appReducer, composeEnhancers(applyMiddleware(logger)));
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
