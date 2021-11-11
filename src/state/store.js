import {createStore, applyMiddleware, compose} from 'redux';
import appReducer from "./reducer";
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(logger)));

export default store;