import { combineReducers } from 'redux'
import loginReducer from "../containers/Login/reducer"
import feedReducer from "../containers/FeedPage/reducer"

const appReducer = combineReducers({
    loginReducer,
    feedReducer
});

export default appReducer
