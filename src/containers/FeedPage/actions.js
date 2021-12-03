import { SET_FEED_CURR_CARD_INDEX } from "../../state/actionTypes";
import { SET_FEED_LEFT_CARD_INDEX } from "../../state/actionTypes";

export function setFeedCurrCardIndex(cardIndex) {
  return { type: SET_FEED_CURR_CARD_INDEX, cardIndex };
}

export function setFeedLeftCardIndex() {
  return { type: SET_FEED_LEFT_CARD_INDEX };
}
