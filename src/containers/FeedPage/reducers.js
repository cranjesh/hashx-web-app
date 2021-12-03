import { SET_FEED_CURR_CARD_INDEX } from "../../state/actionTypes"
import { SET_FEED_LEFT_CARD_INDEX } from "../../state/actionTypes"

const initialState = {
  currCardIndex: 0,
  leftCardIndex: -1
};

function feedReducer(state = initialState, action) {
  if (action.type === SET_FEED_CURR_CARD_INDEX) {
    return { ...state, currCardIndex: action.cardIndex }
  } else if (action.type === SET_FEED_LEFT_CARD_INDEX) {
    return { ...state, leftCardIndex: state.currCardIndex }
  }
  return state
}

export default feedReducer
