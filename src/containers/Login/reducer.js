import { SETUP_SESSION } from "../../state/actionTypes";

const initialState = {
  sessions: []
};

function loginReducer(state = initialState, action) {
  if (action.type === SETUP_SESSION) {
    return Object.assign({}, state, {
      sessions: state.sessions.concat(action.sessionData)
    });
  }
  return state;
}

export default loginReducer;
