import { combineReducers } from 'redux';
import loginReducer from "../containers/Login/reducer";

const appReducer = combineReducers({
    loginReducer
});

export default appReducer;
